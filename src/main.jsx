import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/authContext'
import { theme } from '@chakra-ui/pro-theme'
import { CartState } from './context/cart/cartState';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChakraProvider theme={theme}>
      <CartState>
        <Router>
          <App />
        </Router>
      </CartState>
    </ChakraProvider>
  </AuthContextProvider>
)
