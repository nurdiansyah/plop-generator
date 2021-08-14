import Alert from "@material-ui/lab/Alert"
import { AlertSeverity } from "components/alerts/Alerts"
import React, {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react"
import { toast } from "react-toastify"

interface FeedbackOptions {
  message?: string
  severity?: AlertSeverity
  duration?: number // 0 disable autoClose (need to be close programatically using Id)
  toastId?: string
}

interface SnackBarContext {
  setState: Dispatch<SetStateAction<Context<SnackBarContext>>>
  showFeedback: (options?: FeedbackOptions) => any
  clear: (id?: string) => any
  isActive: (arg: any) => any
}

const SnackbarAlert = (props: { options: FeedbackOptions }) => {
  const style = { width: "100%" }
  return (
    <Alert style={style} severity={props.options.severity}>
      {props.options.message}
    </Alert>
  )
}

export const SnackBarContext: Context<SnackBarContext> = createContext<
  SnackBarContext
>({
  setState: () => { },
  showFeedback: (options?: FeedbackOptions | any) => {
    toast(<SnackbarAlert options={options} />, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: (options?.duration) || 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      toastId: options?.toastId,
    })
  },
  clear: (id?: string) => {
    (id) ? toast.dismiss(id) : toast.dismiss()
  },
  isActive: toast.isActive,
})

export const SnackBarProvider = () => {
  const [ state, setState ] = useState(SnackBarContext)

  const value = {
    ...state,
    setState,
  }

  return <SnackBarContext.Provider value={value as any} />
}

export default SnackBarProvider
