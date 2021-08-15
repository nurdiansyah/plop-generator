import { navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { useContext, useState } from "react"

import { SnackBarContext } from "../../providers/SnackbarProvider"
import ROUTES from "../../routes"

export default ({ redirect = ROUTES.LOGIN }) => {
  const snackbar = useContext(SnackBarContext)
  const [state, setState] = useState({
    email: "",
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

  const handleSubmit = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(state.email)
      .then(() => {
        snackbar.showFeedback({ message: "Reset Password Link Sent!" })
        return navigate(redirect)
      })
      .catch((error: any) => {
        const errorMessage = error.message
        snackbar.showFeedback({ message: errorMessage, severity: "error" })
      })
  }

  return {
    handleSubmit,
    handleChange,
    email: state.email,
  }
}
