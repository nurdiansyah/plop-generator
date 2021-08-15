import { render } from '@testing-library/react'
import React from 'react'

import ForgotPasswordForm from '.'

describe('ForgotPasswordForm', () => {
  it('should render the ForgotPasswordForm component', () => {
    const props = {} as any
    const {
      container,
      // debug,
    } = render(<ForgotPasswordForm { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
