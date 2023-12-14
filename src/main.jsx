import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
// import theme from './theme.jsx'
import { Provider } from 'react-redux'
import Store from './App/Store.js'
import theme from './theme.jsx'
// import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={Store}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <App />
      </ThemeProvider>
      </Provider>
  </React.StrictMode>,
)
