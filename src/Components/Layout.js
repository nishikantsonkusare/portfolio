import { Typography, Box, AppBar, Toolbar, Link } from '@mui/material';
import Particle from './Particle';
import "../assets/css/main.css"
import { makeStyles } from "@mui/styles";
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import MyWork from '../pages/MyWork';
import AboutMe from '../pages/AboutMe';


const useStyles = makeStyles({
  links: {
    fontSize: "1.1em",
    padding: "4px 10px 5px 10px",
    borderRadius: "10px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#87CEEB",
      fontWeight: "bolder",
      color: "black",
    }
  }
});

function Layout() {

  const classes = useStyles();

  return (
    <Box sx={{ height: "100vh" }}>
      <div className='particle_background'><Particle /></div>
        <Box id="home">
          <AppBar position='fixed' sx={{ backgroundColor: "maroon", px: {xs: 0, md: 10} }}>
            <Toolbar variant='dense'>
              <Typography fontStyle="italic" fontSize={20} fontWeight="bold"><Link href='#home' color="#fff" underline='none'>.Portfolio</Link></Typography>
              <Box sx={{ ml: "auto"}}>
                <Link href='#Home' underline='none' color="#fff" className={classes.links}>Home</Link>
                <Link href='#Skills' underline='none' color="#fff" className={classes.links}>Skills</Link>
                <Link href='#My-Work' underline='none' color="#fff" className={classes.links}>My Work</Link>
                <Link href='#About-Me' underline='none' color="#fff" className={classes.links}>About Me</Link>
              </Box>
            </Toolbar>
          </AppBar>
          <section id="Home" className='background_Home' style={{ height: "92vh", paddingTop: "8vh" }}>
            <Home />
          </section>
        </Box>
          <section id='Skills' className='backgroundSkill' style={{ height: "92vh", paddingTop: "8vh" }}>
            <Skills />
          </section>
          <section id='My-Work' className='backgroundWork' style={{ height: "92vh", paddingTop: "8vh" }}>
            <MyWork />
          </section>
          <section id='About-Me' className='backgroundAbout' style={{ height: "92vh", paddingTop: "8vh" }}>
            <AboutMe />
          </section>
    </Box>
  );
}

export default Layout;
