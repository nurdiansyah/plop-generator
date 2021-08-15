import { graphql, useStaticQuery } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { NavQueryQuery } from '../../graphql-types'
import useVersion from "./useVersion"

export interface IMenuItem {
  label: string
  url?: string
  isExternal?: boolean
  icon?: any
  menuItems: this[]
}

export default () => {
  useVersion()
  const { t } = useTranslation()
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
    }
  `)

  return {
    menus: [] as IMenuItem[],
    file: data.file,
    signInButtonLabel: t('auth.signInButtonLabel'),
    signOutButtonLabel: t('auth.signOutButtonLabel'),
  }
}
