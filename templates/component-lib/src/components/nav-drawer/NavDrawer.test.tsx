import React from 'react'
import { render } from '@testing-library/react'
import NavDrawer from '.'

describe('NavDrawer', () => {
  it('should render the NavDrawer component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<NavDrawer { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
