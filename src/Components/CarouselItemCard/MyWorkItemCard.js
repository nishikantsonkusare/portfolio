import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import ImageModal from '../ImageModal';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
    gitButton: {
        position: "absolute !important",
        bottom: "3%",
        right: "5%"
    }
})

const MyWorkItemCard = (props) => {

    const classes = useStyles();

    const [imageModal, setImageModal] = useState(false);

    const showImageModal = () => {
        setImageModal(true);
    }

    const hideImageModal = (status) => {
        setImageModal(status);
    }

  return(
        <Card sx={{ position: "relative", height: "60vh", mx: 2, mb: 1 }}>
            <Box sx={{ p: 1 }}>
                <CardMedia
                    component="img"
                    height="50%"
                    image={props.image}
                    alt="React Image"
                    onClick={showImageModal}
                    sx={{ cursor: "pointer" }}
                />
            </Box>
            <ImageModal onShow={imageModal} image={props.image} onClose={hideImageModal} />
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight="bold">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            {/* <CardActions> */}
                <Button href={props.gitLink} target="_blank" className={classes.gitButton} size="small" variant='outlined' startIcon={<GitHubIcon />}>GitHub</Button>
            {/* </CardActions> */}
        </Card>        
    );
};

export default MyWorkItemCard;
