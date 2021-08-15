import React from 'react'
import { render } from '@testing-library/react'
import AppBar from '.'

describe('AppBar', () => {
  it('should render the AppBar component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<AppBar { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
