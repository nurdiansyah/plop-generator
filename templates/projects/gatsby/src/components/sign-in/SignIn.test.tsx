import React from 'react'
import { render } from '@testing-library/react'
import SignIn from '.'

describe('SignIn', () => {
  it('should render the SignIn component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<SignIn { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
