import { render } from '@testing-library/react'
import React from 'react'

import AppBarMenu from '.'

describe('AppBarMenu', () => {
  it('should render the AppBarMenu component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<AppBarMenu { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
