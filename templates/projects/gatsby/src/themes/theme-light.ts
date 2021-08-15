import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

// A custom mainTheme for this app
const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      // fontSize: 12,
      // htmlFontSize: 10,
    },
    palette: {
      primary: {
        main: "#222222",
      },
      secondary: {
        main: "#007a61",
      },
      error: {
        main: "#f44336",
      },
      background: {
        default: "#f7f7f7",
      },
    },
  })
)

export default theme
