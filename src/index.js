import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  components: {
    MuiTypography : {
      styleOverrides : {
        root : {
          fontFamily: "'Ubuntu', sans-serif !important",
        } 
      }
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
