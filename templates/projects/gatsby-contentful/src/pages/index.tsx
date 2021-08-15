import { Grid } from "@material-ui/core"
import ContentBlockList from "components/content-block-list"
import Hero from "components/hero/Hero"
import LandingCardList from 'components/landing-card-list'
import Layout from "components/layout"
import PageContent from 'components/page-content'
import SEO from "components/seo"
import useLandingPage from 'hooks/useLandingPage'
import React from "react"
import { useTranslation } from "react-i18next"
import useStyles from 'styles/landing.styles'

const LandingPage = () => {
  const classes = useStyles()
  const { pageText, heroData, data, cards = [], contentBlocks: blocks = [] } = useLandingPage()
  const { t } = useTranslation()

  return (
    <Layout title={data.appBarTitle || t("landing.title")}>
      <SEO title={data.title || t("landing.title")} />
      <Hero data={heroData} />
      <Grid
        container
        direction="column"
        // spacing={3}
        className={classes.container}
      >
        <ContentBlockList blocks={blocks} />
        <LandingCardList cards={cards as any[]} />
        <PageContent pageText={pageText} />
      </Grid>
    </Layout>
  )
}

export default LandingPage
