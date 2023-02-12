import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './context/authContext'
import { theme } from '@chakra-ui/pro-theme'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
