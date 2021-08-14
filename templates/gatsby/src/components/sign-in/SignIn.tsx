import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { SignInForm } from 'components/sign-in-side/SignInSide'
import useFirebaseAuthUI from 'hooks/useFirebaseAuthUI'
import { MSignIn } from 'hooks/useSignInPage'
import React, { FunctionComponent } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}))

export interface SignInProps {
  location: {
    origin: string
    pathname: string
  }
  redirectUrl: string
  handleChange: (event: React.ChangeEvent) => void
  handleSubmit: () => void
  formState: MSignIn
}

export const SignIn: FunctionComponent<SignInProps> = (props) => {
  const classes = useStyles()
  useFirebaseAuthUI(props)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignInForm classes={classes} />
    </Container>
  )
}

export default SignIn
