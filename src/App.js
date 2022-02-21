import Layout from "./Components/Layout";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import MyWork from "./pages/MyWork";
import AboutMe from "./pages/AboutMe";

// const theme = createTheme({
//   components: {
//     MuiTypography : {
//       styleOverrides : {
//         root : {
//           fontFamily: "'Ubuntu', sans-serif !important",
//         } 
//       }
//     }
//   }
// });

function App() {

 return (
    // <ThemeProvider theme={theme}>      
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="My-Work" element={<MyWork />} />
            <Route path="About-Me" element={<AboutMe />} />
          </Route>
        </Routes>
    </BrowserRouter>
      
    // </ThemeProvider>
  );
}

export default App;