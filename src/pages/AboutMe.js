import { Facebook, LinkedIn } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";
import { Box, Grid, Typography, Paper, Divider, Avatar, Fab } from "@mui/material";
import avatarImage from "../assets/img/avatar.png";
import ContactForm from "../Components/ContactForm";

const AboutMe = () => {
    return (
        <Grid container spacing={2} sx={{ p:4 }}>
            <Grid item xs={12} md={6}>
                <Paper elevation={4} sx={{p: 3}}>
                    <Typography align="center" variant="h3" fontWeight="bold" py={2} >About Me</Typography>
                    <Divider sx={{ borderTopWidth: 2, backgroundColor: "black" }} />
                    <Typography style={{ textIndent: "5em" }} variant="body1" color="text.secondary" mt={2}>Hello! My name is Nishikant Sonkusare, and I'm a Indian from Maharashtra. If I'am not freelancing at some of finest digital agencies, I'm working remotely on projects for clients all over the world.</Typography>
                    <Typography style={{ textIndent: "5em" }} variant="body1" color="text.secondary" mt={2}>I have a diverse set of skills, ranging from design, to HTML + CSS + JavaScript, all the way to Django (Python), React JS, Material UI and Bootstrap and Network Administrator.</Typography>
                    <Box sx={{my: 3, display: "flex", justifyContent: "center" }}><Avatar alt="Nishikant" src={avatarImage} sx={{ width: 200, height: 200 }}/></Box>
                    <Typography align="center">
                        <Fab size="small" color="black" sx={{mx: 0.7}}>
                            <GitHub />
                        </Fab>
                        <Fab size="small" color="primary" sx={{mx: 0.7}}>
                            <Facebook />
                        </Fab>
                        <Fab size="small" color="primary" sx={{mx: 0.7}}>
                            <LinkedIn />
                        </Fab>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={4} sx={{p: 3}}>
                    <Typography align="center" variant="h3" fontWeight="bold" py={2} >Contact Us</Typography>
                    <Divider sx={{ borderTopWidth: 2, backgroundColor: "black" }} />
                    <ContactForm />
                </Paper>
            </Grid>
        </Grid>
    )
};

export default AboutMe;