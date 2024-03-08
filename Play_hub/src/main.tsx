import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './Theme.ts'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '../src/index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
