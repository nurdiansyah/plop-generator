import React from 'react'

import AppBarMenu from '.'

export default {
  title: 'AppBarMenu',
  component: AppBarMenu,
}

export const NavMenuStyled = () => (
  <AppBarMenu label={'Features'} menuItems={[{label: 'PWA'}, { label: 'Mobile' }]} />
)
