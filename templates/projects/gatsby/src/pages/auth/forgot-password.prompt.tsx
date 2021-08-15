import { Grid } from "@material-ui/core"
import React from "react"
import { isIE } from "react-device-detect"
import { useTranslation } from "react-i18next"

import Alerts from "../../components/alerts/Alerts"
import ForgotPassword from "../../components/forgot-password-form/ForgotPasswordForm"
import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo/SEO"

const ForgotPasswordPage = (): JSX.Element => {
  const { t } = useTranslation()
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
        <ForgotPassword />
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

export default ForgotPasswordPage
