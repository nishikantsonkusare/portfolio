import { Typography, Box, AppBar, Toolbar } from '@mui/material';
import Particle from './Particle';
import "../assets/css/main.css"
import { makeStyles } from "@mui/styles";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import Skills from "../pages/Skills";
import AboutMe from "../pages/AboutMe";
import Navbar from './Navbar';
import { Outlet, Link } from 'react-router-dom';

const useStyles = makeStyles({
  links: {
    fontSize: "1.1em",
    padding: "4px 10px 5px 10px",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#87CEEB",
      fontWeight: "bolder",
      color: "black",
    }
  }
});

function Layout(props) {

  const classes = useStyles();

  return (
    <Box sx={{ height: "100vh" }}>
      <div className='particle_background'><Particle /></div>
          <AppBar position='fixed' sx={{ backgroundColor: "maroon", px: {xs: 0, md: 10} }}>
            <Toolbar variant='dense'>
              <Typography fontStyle="italic" fontSize={20} fontWeight="bold"><Link to="/" style={{ color: "white", textDecoration: "none", }}>.Portfolio</Link></Typography>
              <Box sx={{ ml: "auto"}}>
                <Link to="/" className={classes.links}>Home</Link>
                <Link to="Skills" className={classes.links}>Skills</Link>
                <Link to='My-Work' className={classes.links}>My Work</Link>
                <Link to='About-Me' className={classes.links}>About Me</Link>
              </Box>
            </Toolbar>
          </AppBar>
          
          <Outlet />
         
    </Box>
  );
}

export default Layout;

