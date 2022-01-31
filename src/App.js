import Layout from "./Components/Layout";
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

function App() {

 return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
