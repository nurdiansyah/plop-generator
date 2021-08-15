import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    editBox: { margin: '20px 0', padding: 30, backgroundColor: 'white', borderRadius: 5 },
    container: { margin: '8px 3em' },
    date: { display: 'block' },
    heroStyle: { maxHeight: '30em' },
  })
)

export default useStyles
