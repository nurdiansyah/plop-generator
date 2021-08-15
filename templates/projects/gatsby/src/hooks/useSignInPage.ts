import { graphql, navigate, useStaticQuery } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { useSiteMetadata } from "hooks/useSiteMetadata"
import { SnackBarContext } from "providers/SnackbarProvider"
import { useContext, useState } from "react"
import { SignInPageQueryQuery } from "src/../graphql-types"
import ROUTES from "src/routes"

export interface DefaultFormValue {
  value: string
  error: null | string | Error
}

export interface MSignIn {
  email: DefaultFormValue
  password: DefaultFormValue
}

export default (redirectUrl = ROUTES.APP_PICKER) => {
  const snackbar = useContext(SnackBarContext)
  const siteData = useSiteMetadata()
  const data: SignInPageQueryQuery = useStaticQuery(graphql`
    query SignInPageQuery {
      allContentfulPage(filter: { slug: { eq: "sign-in" } }) {
        edges {
          node {
            appBarTitle
            additionalProperties {
              backgroundImageUrl
            }
            title
            heroImages {
              title
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState({
    email: { value: "", error: null },
    password: { value: "", error: null },
  } as MSignIn)

  const handleChange = (event: {
    persist: () => void
    target: { name: string | number; value: any }
  }): void => {
    event?.persist?.()
    if (event?.target?.name) {
      setState((s: any) => ({
        ...s,
        [event.target.name]: {
          ...s[event.target.name],
          value: event.target.value,
        },
      }))
    }
  }

  const handleSubmit = (): Promise<void> =>
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email.value, state.password.value)
      .then(() => {
        snackbar.showFeedback({ message: "Sign In Successful" })
        return navigate(redirectUrl)
      })
      .catch((error: Error) => {
        const errorMessage = error.message
        snackbar.showFeedback({ message: errorMessage, severity: "error" })
      })

  return {
    siteTitle: siteData?.site?.siteMetadata?.title,
    appBarTitle: data.allContentfulPage?.edges?.[0]?.node?.appBarTitle,
    // @ts-ignore
    headerLabel:
      data.allContentfulPage?.edges?.[0]?.node?.additionalProperties
        ?.headerLabel,
    // @ts-ignore
    contentBodyLabel:
      data.allContentfulPage?.edges?.[0]?.node?.additionalProperties
        ?.contentBodyLabel,
    data: data.allContentfulPage?.edges?.[0]?.node,
    formState: state,
    handleChange,
    handleSubmit,
  }
}
