import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { SignInProps } from 'components/sign-in/SignIn'
import { Link } from 'gatsby'
import useFirebaseAuthUI from 'hooks/useFirebaseAuthUI'
import React, { FunctionComponent } from 'react'
import ROUTES from 'src/routes'

function Copyright({ classes }: any) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="#" className={classes.link}>
        Lyfe Apps
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light'
      ? theme.palette.grey[ 50 ]
      : theme.palette.grey[ 900 ],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: 'none',
    borderBottom: 'none',
    color: theme.palette.primary.main,
  }
}))

export const SignInForm = ({ handleChange, handleSubmit, classes }: any) => (
  <div className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <div className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleChange}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        data-testid={'sign-in-button'}
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link to={ROUTES.FORGOT_PASSWORD} className={classes.link}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to={ROUTES.REGISTRATION} className={classes.link}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Grid item id={'firebaseui-auth-container'} />
      <Box mt={5}>
        <Copyright classes={classes} />
      </Box>
    </div>
  </div>
)

export const SignInSide: FunctionComponent<SignInProps> = (props) => {
  const classes = useStyles()
  useFirebaseAuthUI(props)

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <SignInForm {...props} classes={classes} />
      </Grid>
    </Grid>
  )
}

export default SignInSide
