export { GlobalStyles } from "./global-styles"

import "modern-css-reset/dist/reset.min.css"

import { useContext } from "react"
import { DefaultTheme, ThemeContext } from "styled-components"
import media from "use-media"

import themeObject from "./theme"

type DefaultThemeObject = Omit<typeof themeObject, "screens"> & {
  screens: {
    [key: string]: number
  }
}

const theme = (): DefaultTheme => {
  const { screens, ...themeValues }: DefaultThemeObject = themeObject
  const breakpointSizes = Object.keys(screens).reduce((accum, key: string) => {
    const mediaStyle = { maxWidth: screens[key] }
    const value = media(mediaStyle)
    return {
      ...accum,
      [key]: value,
    }
  }, {})
  return {
    ...themeValues,
    screens: breakpointSizes,
  }
}

const useTheme = () => useContext(ThemeContext)

export { theme, useTheme }
