import { graphql, useStaticQuery } from "gatsby"
import { useSiteMetadata } from "hooks/useSiteMetadata"
import { NewsIndexQueryQuery } from "src/../graphql-types"

export default () => {
  const siteData = useSiteMetadata()
  const data: NewsIndexQueryQuery = useStaticQuery(graphql`
    query NewsIndexQuery {
      allContentfulPage(filter: { slug: { eq: "news" } }) {
        edges {
          node {
            title
            slug
            appBarTitle
            additionalProperties {
              headerLabel
              contentBodyLabel
            }
          }
        }
      }
      allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            tags
            heroImage {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  return {
    siteTitle: siteData?.site?.siteMetadata?.title,
    posts: data.allContentfulBlogPost.edges,
    appBarTitle: data.allContentfulPage?.edges?.[0]?.node?.appBarTitle,
    headerLabel:
      data.allContentfulPage?.edges?.[0]?.node?.additionalProperties
        ?.headerLabel,
    contentBodylabel:
      data.allContentfulPage?.edges?.[0]?.node?.additionalProperties
        ?.contentBodyLabel,
  }
}
