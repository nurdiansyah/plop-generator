import React from "react"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"

const StyledToastContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
    box-shadow: none !important
    background: none !important
  }
  .Toastify__toast-default {
    box-shadow: none !important
    background: none !important
  }
  .Toastify__toast {
    box-shadow: none
    background: none !important
  }
  .Toastify__toast--error {
    box-shadow: none
  }
  .Toastify__toast--warning {
    box-shadow: none
  }
  .Toastify__toast--success {
    box-shadow: none
  }
  .Toastify__toast-body {
    box-shadow: none
  }
  .Toastify__progress-bar {
    box-shadow: none
  }
`

export default () => <StyledToastContainer />
