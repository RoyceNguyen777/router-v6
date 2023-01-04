import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AboutProdiver } from './context/AboutContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutProdiver>
        <App />
      </AboutProdiver>
    </BrowserRouter>
  </React.StrictMode>
)

