import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'
import Cart from './Cart'
import Product from './Product'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>
      <Product />
      <Cart />
    </div>
  </React.StrictMode>,
)
