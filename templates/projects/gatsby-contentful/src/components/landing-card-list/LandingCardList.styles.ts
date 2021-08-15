import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      marginTop: "5em",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: '1em',
      width: '100%',
      padding: '2em',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      }
    },
    content: {
      margin: '1em 2em',
      width: '100%',
    }
  })
)

export default useStyles
