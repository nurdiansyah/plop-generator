import { Grid } from "@material-ui/core"
import React from "react"

import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo/SEO"
import SignUp from "../../components/sign-up/SignUp"
import useStyles from '../../styles/sign-up.styles'

const SignUpPage = (props: {
  location: { origin: string; pathname: string }
}): JSX.Element => {
  const classes = useStyles()
  const childProps = { ...props, redirectUrl: "/dashboard" }

  return (
    <Layout title={"Contentful CMS Demo - Registration"}>
      <SEO title={'Contentful CMS Demo'} />
      <Grid container={true} direction="row" className={classes.container}>
        <SignUp {...childProps} />
      </Grid>
    </Layout>
  )
}

export default SignUpPage
