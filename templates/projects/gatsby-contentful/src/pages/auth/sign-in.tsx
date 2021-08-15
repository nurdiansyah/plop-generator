import { Grid } from "@material-ui/core"
import Layout from "components/layout/Layout"
import SEO from "components/seo/SEO"
import SignInSide from "components/sign-in-side/SignInSide"
import useSignInPage from "hooks/useSignInPage"
import React from "react"
import useStyles from 'styles/sign-in.styles'

const SignInPage = (props: {
  location: { origin: string; pathname: string }
}): JSX.Element => {
  const classes = useStyles()
  const { appBarTitle, siteTitle, data } = useSignInPage()
  const childProps = { ...props, data, redirectUrl: "/dashboard" }

  return (
    <Layout title={appBarTitle || siteTitle}>
      <SEO title={siteTitle} />
      <Grid container direction="row" className={classes.container}>
        <SignInSide {...childProps} />
      </Grid>
    </Layout>
  )
}

export default SignInPage
