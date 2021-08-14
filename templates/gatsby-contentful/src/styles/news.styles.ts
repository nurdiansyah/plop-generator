import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    wrapper: { margin: '0 3em 1em 3em' },
    item: {
      display: 'flex',
      flexDirection: 'row'
    },
    blogHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '61.8vh',
      maxHeight: '400px',
      background: '#e1e1e1',
      fontSize: '2em',
      overflow: 'hidden'
    },
    heading: {
      display: 'flex',
      margin: '2em',
      justifyContent: 'center'
    }
  })
)

export default useStyles
