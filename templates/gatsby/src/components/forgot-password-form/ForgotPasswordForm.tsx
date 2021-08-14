import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { Theme, makeStyles } from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { Link } from "gatsby"
import React from "react"
import { useTranslation } from 'react-i18next'
import ROUTES from "src/routes"

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  gridStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  }
}))

interface ForgotPasswordProps {
  email?: string
  handleChange?: (event: any) => void
  handleSubmit?: () => any
}

export default function ForgotPassword(props: ForgotPasswordProps) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography color={"primary"} component="h1" variant="h5">
          Reset Password
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required={true}
          fullWidth={true}
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus={true}
          onChange={props.handleChange}
        />
        <Button
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.handleSubmit}
        >
          {t('Send Reset Link')}
        </Button>
        <Grid
          container={true}
          className={classes.gridStyle}
        >
          <Grid item={true}>
            <Link to={ROUTES.LOGIN}>{t('Back to Sign in')}</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
