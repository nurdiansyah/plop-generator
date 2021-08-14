import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import SettingsIcon from "@material-ui/icons/SettingsOutlined"
import React from "react"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: { marginTop: '1em' }
}))

export interface ManageAccountFormProps {
  email: string
  password: string
  confirmPassword: string
  currentPassword: string
  displayName: string
  handleChange: (event: any) => void
  handleSubmit: () => any
  providerId: string
}

export default (props: ManageAccountFormProps) => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SettingsIcon />
        </Avatar>
        <Typography color={"primary"} component="h1" variant="h5">
          Manage Account
        </Typography>
        <Grid container={true} spacing={2} className={classes.container}>
          <Grid item={true} xs={12} md={6}>
            <TextField
              autoComplete="name"
              name="displayName"
              variant="outlined"
              required={true}
              fullWidth={true}
              id="displayName"
              label="Display Name"
              autoFocus={true}
              defaultValue={props.displayName}
              onChange={props.handleChange}
            />
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <TextField
              variant="outlined"
              required={true}
              fullWidth={true}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={props.email}
              onChange={props.handleChange}
            />
          </Grid>
          {props.providerId === "password" && (
            <>
              <Grid item={true} xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  name="currentPassword"
                  label="Current Password (required for email/password changes)"
                  type="password"
                  id="curren-passwordt"
                  autoComplete="current-password"
                  defaultValue={props.currentPassword}
                  onChange={props.handleChange}
                />
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  defaultValue={props.password}
                  onChange={props.handleChange}
                />
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  name="confirmPassword"
                  label="Confirm New Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="confirm-password"
                  defaultValue={props.confirmPassword}
                  onChange={props.handleChange}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Button
          type="submit"
          fullWidth={true}
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.handleSubmit}
        >
          Update Account
        </Button>
      </div>
    </Container>
  )
}
