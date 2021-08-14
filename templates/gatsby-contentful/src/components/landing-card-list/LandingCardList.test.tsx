import React from 'react'
import { render } from '@testing-library/react'
import LandingCardList from '.'

describe('LandingCardList', () => {
  it('should render the LandingCardList component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<LandingCardList { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
