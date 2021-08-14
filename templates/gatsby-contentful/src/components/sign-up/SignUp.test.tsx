import React from 'react'
import { render } from '@testing-library/react'
import SignUp from '.'

describe('SignUp', () => {
  it('should render the SignUp component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<SignUp { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
