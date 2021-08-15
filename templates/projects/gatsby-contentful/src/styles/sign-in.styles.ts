import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      marginTop: "-1.7em",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "-2em",
      width: "100%",
    }
  })
)

export default useStyles
