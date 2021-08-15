import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      // marginTop: "2em",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 100,
      width: '100%',
      // padding: '2em'
    },
    content: {
      // margin: '1em 2em',
      width: '100%',
    }
  })
)

export default useStyles
