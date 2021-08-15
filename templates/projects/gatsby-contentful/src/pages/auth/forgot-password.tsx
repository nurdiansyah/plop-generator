import { Grid } from "@material-ui/core"
import ForgotPassword from "components/forgot-password-form/ForgotPasswordForm"
import Layout from "components/layout/Layout"
import SEO from "components/seo/SEO"
import React from "react"
import useStyles from 'styles/forgot-password.styles'

const ForgotPasswordPage = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Layout title={"{{name}} - Forgot Password"}>
      <SEO title={'{{name}} - Forgot Password'} />
      <Grid container={true} direction="row" className={classes.container}>
        <ForgotPassword />
      </Grid>
    </Layout>
  )
}

export default ForgotPasswordPage
