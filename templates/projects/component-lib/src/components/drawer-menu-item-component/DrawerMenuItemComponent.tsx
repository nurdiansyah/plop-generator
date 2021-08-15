import ListItem from '@material-ui/core/ListItem'
import React from 'react'

export interface AppMenuItemComponentProps {
  className?: string
  link?: string | null // because the InferProps props allows alows null value
  slug?: string | null
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = props => {
  const { className, onClick, children } = props

    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )

}

export default AppMenuItemComponent
