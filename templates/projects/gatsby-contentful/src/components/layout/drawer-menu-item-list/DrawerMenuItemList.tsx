import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import DrawerMenuItemComponent from 'components/layout/drawer-menu-item/DrawerMenuItem'
import { handleMenuClick } from 'components/layout/nav-drawer/NavDrawer'
import { IMenuItem } from 'hooks/useLayout'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.elementType,
  menuItems: PropTypes.array,
  onClick: PropTypes.any
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  menuItems?: IMenuItem[]
}

const DrawerMenuItemList: React.FC<AppMenuItemProps> = props => {
  const { label, url, icon: Icon, menuItems = [], onClick = handleMenuClick } = props
  const classes = useStyles()
  const isExpandable = menuItems && menuItems.length > 0
  const [ open, setOpen ] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
    onClick(props)
  }

  const MenuItemRoot = (
    <DrawerMenuItemComponent
      className={classes.menuItem}
      link={url}
      onClick={handleClick}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={label} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </DrawerMenuItemComponent>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {menuItems.map((item: IMenuItem, index: number) => (
          <DrawerMenuItemList {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

export default DrawerMenuItemList
