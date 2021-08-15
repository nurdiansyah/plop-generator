import { SetStateAction, useState } from 'react'

export interface UseNavigationDrawer {
  handleDrawerOpen: () => void
  handleDrawerClose: () => void
  open: boolean
  setOpen: SetStateAction<boolean>
}

export default (): UseNavigationDrawer => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return {
    handleDrawerOpen,
    handleDrawerClose,
    open,
    setOpen
  }
}
