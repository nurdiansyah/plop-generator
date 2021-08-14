import React from 'react'
import { render } from '@testing-library/react'
import NavMenu from '.'

describe('NavMenu', () => {
  it('should render the NavMenu component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<NavMenu { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
