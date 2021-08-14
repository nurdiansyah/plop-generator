import React from 'react'
import { render } from '@testing-library/react'
import SignOutButton from '.'

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key:any) => key }),  
}));

describe('SignOutButton', () => {
  it('should render the SignOutButton component', () => {
    const props = {}
    const {
      container,
      // debug,
    } = render(<SignOutButton { ...props } />)
    // debug()
    expect(container).toBeTruthy()
  })
})
