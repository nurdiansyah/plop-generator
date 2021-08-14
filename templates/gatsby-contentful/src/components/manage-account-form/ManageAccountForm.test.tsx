import React from 'react'
import { render } from '@testing-library/react'
import ManageAccountForm from '.'

describe('ManageAccountForm', () => {
  it('should render the ManageAccountForm component', () => {
    const props = {} as any
    const { container } = render(<ManageAccountForm { ...props } />)
    expect(container).toBeTruthy()
  })
})
