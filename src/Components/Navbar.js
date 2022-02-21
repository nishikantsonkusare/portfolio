import React from 'react';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

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

const Navbar = () => {

    const classes = useStyles();

  return (
    <AppBar position='fixed' sx={{ backgroundColor: "maroon", px: {xs: 0, md: 10} }}>
        <Toolbar variant='dense'>
        <Typography fontStyle="italic" fontSize={20} fontWeight="bold"><Link href='#home' color="#fff" underline='none'>.Portfolio</Link></Typography>
        <Box sx={{ ml: "auto"}}>
            <Link to="/">Home</Link>
            <Link to="Skills" >Skills</Link>
            <Link to='My-Work' >My Work</Link>
            <Link to='About-Me' >About Me</Link>
        </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;


// underline='none' color="#fff" className={classes.links}
// underline='none' color="#fff" className={classes.links}
// underline='none' color="#fff" className={classes.links}