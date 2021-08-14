import { User } from "firebase"
import { navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import React, {
  Context,
  FunctionComponent as FC,
  createContext,
  useEffect,
  useState,
} from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import ROUTES, { PUBLIC_ROUTES } from "../routes"

export interface AuthContext {
  user: User | undefined
  loading: boolean
  error: firebase.auth.Error | undefined
  timeRemaining: number
  signOut: () => any
}

export const AuthContext: Context<AuthContext> = createContext<AuthContext>({
  user: undefined,
  loading: true,
  error: undefined,
  timeRemaining: 0,
  signOut: () => {},
})

export const AuthProvider: FC = ({ children }) => {
  if (!!!process.env.REACT_APP_API_KEY) {
    return (
      <AuthContext.Provider
        value={AuthContext as any}
      >
        {children}
      </AuthContext.Provider>
    )
  }
  const sessionTimeOut = parseInt(process.env.SESSION_TIMEOUT || '1800')
  const [user, loading, error] = useAuthState(firebase.auth && firebase.auth())
  const [timeRemaining, setTimeRemaining] = useState(sessionTimeOut)

  const signOut = async () => {
    localStorage.clear()
    sessionStorage.clear()
    await firebase.auth().signOut()
    await navigate(ROUTES.LOGIN)
    window.location.reload()
  }

  let sessionTimer: number;

  const startTimer = () => {
    sessionTimer = window.setInterval(() => setTimeRemaining(currentTimeRemaining => currentTimeRemaining - 1), 1000)
  }

  const stopTimer = () => {
    window.clearInterval(sessionTimer)
  }

  const resetTimer = () => {
    stopTimer()
    setTimeRemaining(sessionTimeOut)
    startTimer();
  }

  const setupTimers = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    setTimeRemaining(sessionTimeOut)
    startTimer();
  }

  const removeTimers = () => {
    stopTimer()
    document.removeEventListener("mousemove", resetTimer, false);
    document.removeEventListener("mousedown", resetTimer, false);
    document.removeEventListener("keypress", resetTimer, false);
    document.removeEventListener("touchmove", resetTimer, false);
  }

  useEffect(() => {
    if (loading) return

    if (!user) {
      !PUBLIC_ROUTES.includes(location.pathname.replace(/\/$/, '')) && navigate(ROUTES.LOGIN, { replace: true })
      return
    }

    setupTimers()
    return removeTimers
  }, [user, loading])

  useEffect(() => {
    if (timeRemaining < 1) {
      signOut()
    }
  }, [timeRemaining])

  const value = {
    user,
    loading,
    error,
    timeRemaining,
    signOut,
  }

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
