import React from 'react'
import { render } from '@testing-library/react'
import LandingCard from '.'

describe('LandingCard', () => {
  it('should render the LandingCard component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<LandingCard { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
