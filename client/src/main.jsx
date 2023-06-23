import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Contexts/Products.jsx'
import { CartProvider } from './Contexts/CartI.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
