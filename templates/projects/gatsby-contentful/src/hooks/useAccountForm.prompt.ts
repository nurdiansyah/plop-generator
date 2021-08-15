import firebase from "gatsby-plugin-firebase"
import { SnackBarContext } from "providers/SnackbarProvider"
import { useContext, useState } from "react"
import storage from "util/storage"

export default () => {
  const snackbar = useContext(SnackBarContext)
  const user = storage.load("user")

  const [state, setState] = useState({
    email: user?.email || "",
    password: "",
    confirmPassword: "",
    currentPassword: "",
    displayName: user?.displayName || "",
    photoUrl: user?.photoUrl || "",
    providerId: user?.providerData?.[0]?.providerId,
  })

  const handleChange = (event: any) => {
    event?.persist?.()
    if (event?.target?.name) {
      setState((s) => ({
        ...s,
        [event.target.name]: event.target.value,
      }))
    }
  }

  const updateProfile = (): Promise<any> => {
    const user: any = firebase.auth().currentUser
    const profile = {
      email: state.email,
      displayName: state.displayName,
      photoUrl: state.photoUrl,
    }
    return user.updateProfile(profile)
  }

  const updatePassword = async (
    password = state.password
  ): Promise<any | void> => {
    if (
      state.providerId === "password" &&
      !!password &&
      !!state.currentPassword
    ) {
      const user: any = firebase.auth().currentUser
      await user.reauthenticateWithCredential(state.currentPassword)
      return user.updatePassword(password)
    }
    return Promise.resolve()
  }

  const updateEmail = (email = state.email): Promise<any> => {
    if (email && email !== user.email) {
      const user: any = firebase.auth().currentUser
      return user.updateEmail(email).then(() => {
        setState((state) => ({
          ...state,
          email,
        }))
        return Promise.resolve()
      })
    }
    return Promise.resolve()
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      await Promise.all([updateProfile(), updateEmail(), updatePassword()])
      snackbar.showFeedback({ message: "Saved" })
    } catch (error) {
      console.error(error)
      snackbar.showFeedback({
        message: "Failed to update account",
        severity: "error",
      })
    }
  }

  return {
    handleSubmit,
    handleChange,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
    displayName: state.displayName,
    providerId: state.providerId,
    currentPassword: state.currentPassword,
  }
}
