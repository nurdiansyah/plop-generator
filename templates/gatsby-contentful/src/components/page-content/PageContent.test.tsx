import React from 'react'
import { render } from '@testing-library/react'
import PageContent from '.'

describe('PageContent', () => {
  it('should render the PageContent component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<PageContent { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
