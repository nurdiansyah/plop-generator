import ListItem from '@material-ui/core/ListItem'
import React from 'react'

export interface DrawerMenuItemProps {
  className?: string
  link?: string | null // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  className, onClick, children
}) => (
  <ListItem
    button
    className={className}
    children={children}
    onClick={onClick}
  />
)

export default DrawerMenuItem
