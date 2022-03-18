import React from 'react'
import ReactDOM from 'react-dom'
import Route from '@app/routes'
import { GlobalStyles } from '@app/styles/globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
)
