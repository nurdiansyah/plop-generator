import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0
    padding: 0
    background: ${(props: any) => props.theme.colors.darkblue}
    color: white
    overflow: auto
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  }
`

export { GlobalStyles }
