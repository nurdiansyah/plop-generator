import React from 'react'
import { render } from '@testing-library/react'
import PostCard from '.'

describe('PostCard', () => {
  it('should render the PostCard component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<PostCard { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
