import { render } from '@testing-library/react'
import React from 'react'

import SignInSide from '.'

describe('SignInSide', () => {
  it('should render the SignIn component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<SignInSide { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
