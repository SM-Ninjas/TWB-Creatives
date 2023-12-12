import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "styled-components"

import App from './App.tsx'
import theme from './theme/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.default}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
