import React from 'react'
import { render } from '@testing-library/react'
import Hero from '.'

describe('Hero', () => {
  it('should render the Hero component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<Hero { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
