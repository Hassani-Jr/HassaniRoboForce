import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#004D85", // Dark blue color
      200: "#00A1E0", // Light blue color
      300: "#D9D9D9", // Light grey color
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
