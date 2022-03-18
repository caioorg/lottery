import React from 'react'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { GlobalStyles } from '@app/styles/globalStyles'

const ProvidersWithRoute: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export const renderComponent = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: ProvidersWithRoute, ...options })