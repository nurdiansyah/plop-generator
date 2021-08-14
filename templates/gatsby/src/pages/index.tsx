import { Grid, Typography } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import React from "react"
import { isIE } from "react-device-detect"
import { useTranslation } from "react-i18next"

import Alerts from "../components/alerts/Alerts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../themes/theme-light"

const LandingPage = () => {
  const { t } = useTranslation()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const mobileStyle = { display: "flex", justifyContent: "center", width: isMobile ? '100%' : '60%', paddingLeft: isMobile ? 0 : 30 }
  const gridStyle = {
    display: "flex",
    marginTop: "2em",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 100
  }

  return (
    <Layout>
      <SEO title={t("landing.title")} />
      <Grid
        container={true}
        direction="row"
        spacing={3}
        style={gridStyle}
      >
        {(isIE) ?
          <Alerts title={t('landing.warning')} severity={'warning'} isOpen={true}/>
          :
          null
        }
        <Grid item>
          <Typography color={"primary"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.</Typography>
        </Grid>
        <Grid item style={mobileStyle}>
          <Typography color={"primary"}>{t("landing.message3")}</Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default LandingPage
