import { render } from '@testing-library/react'
import React from 'react'

import Backdrop from "./Backdrop"

describe('Backdrop', () => {
  it('should render the Backdrop component', () => {
    const props = {} as any
    const {
      container,
      // debug,
    } = render(<Backdrop {...props}/>)
    // debug()
    expect(container).toBeTruthy()
  })
})
