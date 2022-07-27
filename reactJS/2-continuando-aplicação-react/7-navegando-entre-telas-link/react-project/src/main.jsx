import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from '@/styles/globalStyle'

import Routes from '@/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Routes />
    <GlobalStyle />
  </React.StrictMode>
)
