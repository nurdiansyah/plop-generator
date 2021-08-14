import { Collapse } from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ErrorIcon from "@material-ui/icons/Error"
import InfoIcon from "@material-ui/icons/Info"
import WarningIcon from "@material-ui/icons/Warning"
import { Alert, AlertTitle } from "@material-ui/lab"
import React, { forwardRef } from "react"

export type AlertSeverity = "error" | "warning" | "info" | "success"

export type AlertVariant = "filled" | "outlined" | "standard"

export interface AlertProps {
  severity?: AlertSeverity
  variant?: AlertVariant
  title?: string | JSX.Element
  message?: string | JSX.Element
  isOpen?: boolean
  icon?: JSX.Element
  onClose?: () => any
}
const style = { alignItems: 'center' }

const Alerts = forwardRef<HTMLElement, AlertProps>((props, ref) => {
  const iconMapping = {
    success: props.icon || <CheckCircleIcon fontSize="inherit" />,
    error: props.icon || <ErrorIcon fontSize="inherit" />,
    warning: props.icon || <WarningIcon fontSize="inherit" />,
    info: props.icon || <InfoIcon fontSize="inherit" />,
  }

  return (
    <Collapse in={props.isOpen}>
      <Alert
        style={style}
        onClose={props?.onClose}
        ref={ref}
        severity={props.severity}
        variant={props.variant}
        iconMapping={iconMapping}
      >
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
  </Collapse>
  )
})
export default Alerts
