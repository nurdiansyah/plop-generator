import React from 'react'
import { render } from '@testing-library/react'
import DrawerMenuItemComponent from '.'

describe('DrawerMenuItemComponent', () => {
  it('should render the DrawerMenuItemComponent component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<DrawerMenuItemComponent { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
