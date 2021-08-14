import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import DrawerMenu from 'components/layout/drawer-menu/DrawerMenu'
import useStyles from 'components/layout/Layout.styles'
import { navigate } from 'gatsby'
import { IMenuItem } from 'hooks/useLayout'
import React, { FunctionComponent } from 'react'

export interface NavDrawerProps {
  open: boolean
  handleDrawerClose: () => void
  menus: IMenuItem[]
}

export const handleMenuClick = async (menu: IMenuItem) => {
  if (!menu?.isExternal && menu?.url) return navigate(menu.url)
  if (menu?.isExternal && menu?.url) window.open(menu.url, '_blank')
}

const NavDrawer: FunctionComponent<NavDrawerProps> = (props) => {
  const classes = useStyles()
  const { open, handleDrawerClose } = props
  const style = {
    drawerClasses: {
      paper: classes.drawerPaper,
    },
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={style.drawerClasses}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <DrawerMenu menus={props.menus} onClick={handleMenuClick} />
    </Drawer>
  )
}

export default NavDrawer
