import React from 'react'
import { render } from '@testing-library/react'
import MarketplaceCard from '.'

describe('MarketplaceCard', () => {
  it('should render the MarketplaceCard component', () => {
    const props = {} as any
    const { container } = render(<MarketplaceCard { ...props } />)
    expect(container).toBeTruthy()
  })
})
