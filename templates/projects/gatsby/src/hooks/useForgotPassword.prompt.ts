import { navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { SnackBarContext } from "providers/SnackbarProvider"
import { useContext, useState } from "react"
import ROUTES from "src/routes"

export default () => {
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

  const handleSubmit = (): Promise<void> =>
    firebase
      .auth()
      .sendPasswordResetEmail(state.email)
      .then(() => {
        snackbar.showFeedback({ message: "Reset Password Link Sent!" })
        return navigate(ROUTES.LOGIN)
      })
      .catch((error: Error) => {
        const errorMessage = error.message
        snackbar.showFeedback({ message: errorMessage, severity: "error" })
      })

  return {
    handleSubmit,
    handleChange,
    email: state.email,
  }
}
