import List from '@material-ui/core/List'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import DrawerMenuItem from '../drawer-menu-item/DrawerMenuItem'
import { MenuItem } from '../nav-drawer/NavDrawer'

const drawerWidth = 240

const useStyles = makeStyles(() =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export interface DrawerMenuProps {
  menus: MenuItem[]
  onClick: any // TODO: add type
}

const AppMenu: React.FC<DrawerMenuProps> = (props) => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {props.menus?.map((item: any, index) => (
        <DrawerMenuItem onClick={props.onClick} {...item} key={index} />
      ))}
    </List>
  )
}

export default AppMenu
