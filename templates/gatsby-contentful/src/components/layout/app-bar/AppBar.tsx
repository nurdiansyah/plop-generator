import MuiAppBar from '@material-ui/core/AppBar'
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import AppBarMenu from 'components/layout/app-bar-menu/AppBarMenu'
import useStyles from 'components/layout/Layout.styles'
import SignOutButton from 'components/sign-out-button/SignOutButton'
import Img from "gatsby-image"
import { IMenuItem } from 'hooks/useLayout'
import React, { FunctionComponent } from 'react'
import theme from "themes/theme-light"

export interface AppBarProps {
  title?: string
  file?: any
  signInButtonLabel?: string
  signOutButtonLabel?: string
  handleDrawerOpen?: () => void
  handleDrawerClose?: () => void
  menus: IMenuItem[]
  open?: boolean
}

export const AppBar: FunctionComponent<AppBarProps> = (props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  const {
    file,
    signInButtonLabel,
    signOutButtonLabel,
    menus,
    open,
    handleDrawerOpen,
    handleDrawerClose,
  } = props
  const placeholderStyle = { visibility: "hidden" }

  return (
    <MuiAppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp>
          {!open
            ? <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            : <IconButton
              color="inherit"
              aria-label="close drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButton, !open)}
            >
              <CloseIcon />
            </IconButton>
          }
        </Hidden>
        <Hidden smDown={true}>
          <div className={classes.image}>
            <Img
              loading="eager"
              fixed={file?.childImageSharp?.fixed as any}
              placeholderStyle={placeholderStyle}
            />
          </div>
        </Hidden>
        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>
        <Grid item className={classes.menu}>
          {!isMobile && menus?.map((menu, index: number) => (
            <AppBarMenu key={`${menu.label}-${index}`} {...menu} />
          ))}
          <SignOutButton {...{ signInButtonLabel, signOutButtonLabel } as any} />
        </Grid>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
