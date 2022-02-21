import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CarouselItemCard = (props) => {
  return(
        <Card sx={{ height: "60vh", mx: 2, mb: 1 }}>
            <CardMedia
                component="img"
                height="50%"
                image={props.image}
                alt="React Image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight="bold">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>        
    );
};

export default CarouselItemCard;
