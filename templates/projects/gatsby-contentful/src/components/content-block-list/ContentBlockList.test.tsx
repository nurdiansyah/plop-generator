import React from 'react'
import { render } from '@testing-library/react'
import ContentBlockList from '.'

describe('ContentBlockList', () => {
  it('should render the ContentBlockList component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<ContentBlockList { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
