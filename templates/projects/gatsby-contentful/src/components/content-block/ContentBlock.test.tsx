import React from 'react'
import { render } from '@testing-library/react'
import ContentBlock from '.'

describe('ContentBlock', () => {
  it('should render the ContentBlock component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<ContentBlock { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
