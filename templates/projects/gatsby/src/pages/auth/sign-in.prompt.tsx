import { Grid } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import React from "react"
import { isIE } from "react-device-detect"
import { useTranslation } from "react-i18next"

import Alerts from "../../components/alerts/Alerts"
import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo/SEO"
import SignInSide from "../../components/sign-in-side/SignInSide"
import theme from "../../themes/theme-light"

const LandingPage = (props: {
  location: { origin: string; pathname: string }
}): JSX.Element => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const childProps = { ...props, redirectUrl: "/dashboard" }
  const gridStyle: any = {
    display: "flex",
    marginTop: "-1.7em",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "-2em",
    width: "100%",
  }
  if (!isMobile) {
    gridStyle.overflow = 'hidden'
  }

  return (
    <Layout title={"App Login"}>
      <SEO title={t("landing.title")} />
      <Grid container={true} direction="row" style={gridStyle}>
        <SignInSide {...childProps} />
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

export default LandingPage
