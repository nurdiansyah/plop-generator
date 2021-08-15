import React from 'react'

import NavMenu from '.'

export default {
  title: 'NavMenu',
  component: NavMenu,
}

export const NavMenuStyled = () => (
  <NavMenu label={'Features'} menuItems={[{label: 'PWA'}, { label: 'Mobile' }]} />
)
