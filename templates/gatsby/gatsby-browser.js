/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// require('typeface-roboto')
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import "firebase/analytics"
import "react-toastify/dist/ReactToastify.css"

import CssBaseline from "@material-ui/core/CssBaseline"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import * as firebase from "firebase/app"
import React from "react"
import { Helmet } from "react-helmet"
import { I18nextProvider } from "react-i18next"

import Toast from "./src/components/toast"
import i18next from "./src/i18n"
import AuthProvider from "./src/providers/AuthProvider"
import { TransitionProvider } from "./src/providers/TransitionProvider"
import theme from "./src/themes/theme-light"

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, '')
  })
}

export const onRouteUpdate = () => {
  if (!!window.IDBIndex) {
    firebase.analytics()
  }
};

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="preconnect"
        />
        <body style="overflow:auto" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TransitionProvider>
          <I18nextProvider i18n={i18next}>
            <AuthProvider>
              {element}
            </AuthProvider>
          </I18nextProvider>
        </TransitionProvider>
        <Toast />
      </ThemeProvider>
    </React.Fragment>
  )
}
