import Button from '@material-ui/core/Button'
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { navigate } from 'gatsby'
import { AuthContext } from 'providers/AuthProvider'
import React, { FunctionComponent, useContext } from 'react'
import ROUTES from 'src/routes'

interface SignOutButtonProps {
  signInButtonLabel: string
  signOutButtonLabel: string
}

const SignOutButton: FunctionComponent<SignOutButtonProps> = (props) => {
  const { signOut, user } = useContext(AuthContext)
  const signInHandler = async () => navigate(ROUTES.LOGIN)

  return (
    <Button
      color="inherit"
      onClick={user ? signOut : signInHandler}
      endIcon={user && <ExitToAppIcon />}
      data-testid={'sign-in-out-button'}
    >
      {user ? props.signOutButtonLabel : props.signInButtonLabel}
    </Button>
  )
}

export default SignOutButton
