import React from 'react'
import { render } from '@testing-library/react'
import DrawerMenu from '.'

describe('DrawerMenu', () => {
  it('should render the DrawerMenu component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<DrawerMenu { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
