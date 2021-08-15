import 'firebaseui/dist/firebaseui.css'

import * as firebaseui from 'firebaseui'
import firebase from 'gatsby-plugin-firebase'
// import { navigate } from 'gatsby'
import { useEffect, useState } from 'react'

// import { TransitionContext, TransitionContextActionType } from '../providers/TransitionProvider'

export default (props: { location: { origin: string, pathname: string }, redirectUrl: string  | '/dashboard' }) => {
  // const { dispatch: updateTransition, state: loadingState } = useContext(TransitionContext)
  const [token, setToken] = useState(typeof window !== 'undefined' && localStorage.token || '') // check fb auth
  const isSignedIn = token && props.location.pathname === "/"

  // useEffect(() => {
  //   if (isSignedIn) {
  //     navigate(props.redirectUrl)
  //   }
  // }, [token])

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase?.auth()) as any || {}
      const uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: (_: any, _redirectUrl: string) => true,
          uiShown: () => {
            // if (!!loadingState.open) {
              // updateTransition({
              //   type: TransitionContextActionType.END
              // })
            // }
          }
        },
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: `${props.location.origin}${props.redirectUrl}`,
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          // firebase.auth.EmailAuthProvider.PROVIDER_ID,
          // 'apple.com',
          // 'microsoft.com',
          // 'yahoo.com'
        ],
        // Terms of service url.
        // tosUrl: '<your-tos-url>',
        // privacyPolicyUrl: ''
      }

      if (!isSignedIn) {
        ui.start('#firebaseui-auth-container', uiConfig)
      }

      firebase.auth().getRedirectResult().then((result: any) => {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const accessToken = result.credential.accessToken
          localStorage.accessToken = accessToken
          setToken(accessToken)
        }
      })

      // if (ui.isPendingRedirect()) {
        // updateTransition({
        //   type: TransitionContextActionType.START
        // })
      // }

      return () => {}
    }, [])
  }

  return {
    isSignedIn,
  }
}
