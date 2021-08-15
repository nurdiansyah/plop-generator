import firebase from 'gatsby-plugin-firebase'
import { useContext, useEffect, useState } from "react"
import { uuid } from "uuidv4"

import { SnackBarContext } from "../providers/SnackbarProvider"

export type UploadFile = {
  path: string
  name: string
  imgUrl: string
}
export interface FileUploadProps {
  files: UploadFile[]
  removeFile: (file: UploadFile) => any
  getFiles: () => any
  handleSubmit: (fileObjects: File[]) => any
}

export const useFileUpload = (props: {
  applicationId: string
}): FileUploadProps => {
  const storageRef = firebase.storage().ref()
  const [files, setFiles] = useState([] as UploadFile[])
  const [initFiles, setInitFiles] = useState(false)
  const snackbar = useContext(SnackBarContext)

  const getFiles = async () => {

    const ref: any = storageRef.child(
      `documents/${firebase?.auth().currentUser?.uid}/${props.applicationId}`
    )
    console.info(`documents/${firebase?.auth().currentUser?.uid}/${props.applicationId}`)
    const newFiles: any = []
    const dbFiles = await ref.listAll()
    const downloadFiles = dbFiles.items.map((file: any) => {
      return storageRef
        .child(file.location.path)
        .getDownloadURL()
        .then((url: string) => {
          const split = decodeURIComponent(file.location.path).split("/")
          const name = split[split.length - 1]
          const mappedFile = {
            path: file.location.path,
            imgUrl: url,
            name,
            preview: url,
          }
          newFiles.push(mappedFile)
          return mappedFile
        })
        .catch(console.error)
    })
    const resolvedFiles = await Promise.all(downloadFiles)
    setFiles(resolvedFiles as UploadFile[])
    return resolvedFiles
  }

  useEffect(() => {
    getFiles()
    setInitFiles(true)
    return () => {}
  }, [initFiles])

  const removeFile = (file: UploadFile) => {
    const ref: any = storageRef.child(file.path)
    ref
      .delete()
      .then(async () => {
        console.info("Deleted a blob or file!")
        await getFiles()
        setInitFiles(false)
        snackbar.showFeedback({
          message: "Removed file",
          severity: "success",
        })
      })
      .catch(console.error)
  }

  const listenToUploadProgress = (uploadTask: any) => {
    const toastId = uuid()
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.info("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.info("Upload is paused")
            break
          case firebase.storage.TaskState.RUNNING:
            console.info("Upload is running")
            if (!snackbar.isActive(toastId)) {
              snackbar.showFeedback({
                message: "Upload in progress",
                severity: "info",
                toastId,
              })
            }
            break
        }
      },
      (error: any) => {
        snackbar.showFeedback({ message: "Upload failed", severity: "error" })
        console.error(error)
      },
      () => {
        snackbar.showFeedback({
          message: "Upload Complete",
          severity: "success",
        })
        getFiles()
      }
    )
  }

  const handleSubmit = (fileObjects: File[]) => {
    fileObjects.forEach((fileObject: File) => {
      const ref: any = storageRef.child(
        `pua-documents/${firebase?.auth().currentUser?.uid}/${props.applicationId}/${fileObject.name}`
      )
      const file = new Blob([fileObject])
      const metaData = { contentType: fileObject.type }
      const uploadTask = ref.put(file, metaData)
      return listenToUploadProgress(uploadTask)
    })
  }

  return {
    handleSubmit,
    removeFile,
    getFiles,
    files,
  }
}

export default useFileUpload
