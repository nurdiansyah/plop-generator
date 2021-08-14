import { render } from '@testing-library/react'
import React from 'react'

import Alerts from './Alerts'

  describe('Alerts', () => {
  it('should render the Alerts component', () => {
    const props = {} as any
    const {
      container,
      // debug,
    } = render(<Alerts {...props}/>)
    // debug()
    expect(container).toBeTruthy()
  })
})
