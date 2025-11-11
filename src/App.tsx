import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import './App.css'
import { CartProvider } from './Context/CartContext'

function App() {
  
  return (
    <CartProvider>
      <RouterProvider router={Router()} />
    </CartProvider>
  )
}

export default App
