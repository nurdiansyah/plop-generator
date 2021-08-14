import { Grid } from "@material-ui/core"
import React from "react"
import { isIE } from "react-device-detect"
import { useTranslation } from "react-i18next"

import Alerts from "../../components/alerts/Alerts"
import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo/SEO"
import SignUp from "../../components/sign-up/SignUp"

const SignUpPage = (props: {
  location: { origin: string; pathname: string }
}): JSX.Element => {
  const { t } = useTranslation()
  const childProps = { ...props, redirectUrl: "/dashboard" }
  const gridStyle = {
    display: "flex",
    marginTop: "-1.7em",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // overflow: 'hidden',
    width: "100%",
  }

  return (
    <Layout title={"App Registration"}>
      <SEO title={t("landing.title")} />
      <Grid container={true} direction="row" style={gridStyle}>
        <SignUp {...childProps} />
        {isIE ? (
          <Alerts
            title={t("landing.warning")}
            severity={"warning"}
            isOpen={true}
          />
        ) : null}
      </Grid>
    </Layout>
  )
}

export default SignUpPage
