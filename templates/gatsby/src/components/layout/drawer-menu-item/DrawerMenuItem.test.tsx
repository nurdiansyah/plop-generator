import { render } from '@testing-library/react'
import React from 'react'

import DrawerMenuItem from '.'

describe('DrawerMenuItem', () => {
  it('should render the DrawerMenuItem component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<DrawerMenuItem { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
