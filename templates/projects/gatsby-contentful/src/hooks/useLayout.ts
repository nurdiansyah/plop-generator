import { graphql, useStaticQuery } from "gatsby"
import useVersion from "hooks/useVersion"
import { NavQueryQuery } from "src/../graphql-types"

export interface IMenuItem {
  label: string
  url?: string
  icon?: any
  isExternal?: boolean
  menuItems: this[]
}

export default () => {
  useVersion()
  const data: NavQueryQuery = useStaticQuery(graphql`
    query NavQuery {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 58, height: 38) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allContentfulNavigationListSortOrder {
        edges {
          node {
            id
            title
            signInButtonLabel
            signOutButtonLabel
            sortOrder {
              label
              slug
              url
              isExternalLink
              menuItems: subMenuLinks {
                ... on ContentfulBlogPost {
                  slug
                  label: title
                  url
                }
                ... on ContentfulLink {
                  slug
                  url
                  label
                  isExternalLink
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    sortOrder: menus,
    signInButtonLabel,
    signOutButtonLabel,
  } = data.allContentfulNavigationListSortOrder?.edges?.[0]?.node

  return {
    menus,
    file: data.file,
    signInButtonLabel,
    signOutButtonLabel,
  }
}
