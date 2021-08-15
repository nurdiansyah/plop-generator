import { graphql, navigate, useStaticQuery } from "gatsby"
import { useEffect } from "react"
import { LandingPageQueryQuery } from "src/../graphql-types"
import ROUTES from "src/routes"

export default () => {
  const data: LandingPageQueryQuery = useStaticQuery(graphql`
    query LandingPageQuery {
      allContentfulPage(filter: { slug: { eq: "/" } }) {
        edges {
          node {
            title
            slug
            appBarTitle
            additionalProperties {
              headerLabel
              headerLine2Label
              heroCopy
              subHeaderLabel
            }
            headerCtAs {
              isExternalLink
              label
              url
            }
            heroImages {
              fluid(
                maxWidth: 1180
                maxHeight: 480
                resizingBehavior: SCALE
                background: "rgb:000000"
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            content {
              content
              childMarkdownRemark {
                html
              }
            }
            cards {
              title
              url
              contentBody {
                contentBody
                childMarkdownRemark {
                  html
                }
              }
              cardImage {
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
                title
              }
            }
            contentBlocks {
              imageURL
              subHeader {
                subHeader
              }
              header
            }
          }
        }
      }
    }
  `)

  const pageText = data.allContentfulPage?.edges?.[0]?.node?.content?.content
  const node = data.allContentfulPage?.edges[0]?.node
  const heroData = {
    name: "",
    ...node,
    heroImage: data.allContentfulPage?.edges[0]?.node?.heroImages?.[1],
  }
  const contentBlocks = data.allContentfulPage?.edges?.[0]?.node?.contentBlocks?.map?.(
    (contentBlock) => ({
      image: contentBlock?.imageURL,
      subHeader: contentBlock?.subHeader?.subHeader,
      header: contentBlock?.header,
    })
  )

  useEffect(() => {
    navigate(ROUTES.LOGIN)
  }, [])

  return {
    pageText,
    heroData,
    data: node,
    cards: node.cards,
    contentBlocks,
  }
}
