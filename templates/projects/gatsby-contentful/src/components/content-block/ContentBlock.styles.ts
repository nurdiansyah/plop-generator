import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import { ContentBlockProps } from './ContentBlock'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: (props: ContentBlockProps) =>
        props.imgPosition === 'left' ? '#f5edeb' : '#f7f7f7',
      height: '25em',
      padding: '2em 1em',
      [theme.breakpoints.down('sm')]: {
        height: '100%'
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop: '2em',
      display: 'flex'
    },
    container: {
      // padding: '3em 2em'
    },
    item: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: '2em'
    },
    image: {
      padding: theme.spacing(2),
      // textAlign: 'center',
      color: theme.palette.text.secondary,
      // marginTop: '-3em',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    img: {
      boxShadow: '3px 3px 3px'
    }
  }),
);

export default useStyles
