import { Typography, Box } from '@mui/material';
import React from 'react';
import CarouselCard from '../Components/CarouselCard';
import MyWorkItemCard from '../Components/CarouselItemCard/MyWorkItemCard';
import ecartImage from "../assets/img/Ecart.PNG";
import hmsImage from "../assets/img/hms.PNG";
import blogImage from "../assets/img/blog.PNG";
import expansesImage from "../assets/img/expanses.png";
import foodImage from "../assets/img/foodapp.png";

const data = [
    {
        title: "E-Cart",
        description: "E-Cart is an e-commerce website. In this website user interface is very simple and user friendly. Easy to understand and easy to navigate with different category. For payment option RazerPay is used as a payment gateway with different option for payment methods.",
        image: ecartImage,
        gitLink: "https://github.com/nishikantsonkusare/ecart"
    },
    {
        title: "Hospital Management System",
        description: "Hospital Management System is management project where multiple role are present in HMS. Every role have it's different operator. Roles like Administrator, Doctors, Receiptionist and Patient. Patient can also sign himself with portal made a appointment with his doctor.",
        image: hmsImage,
        gitLink: "https://github.com/nishikantsonkusare/hospital-management",
    },
    {
        title: "Blog",
        description: "This is React JS based Blog. Where it show basic interface with user and simple to navigate with various post. There are also some category user can easily navigation for that category post like to read it.",
        image: blogImage,
        gitLink: "https://github.com/nishikantsonkusare/react-blog"
    },
    {
        title: "Expanses Tracker",
        description: "Expanses Tracker is utility website. Where user can track his expanses data over a period of year. UI is very user friendly and easy to understand. User can add his expanses in website and track his expanses.",
        image: expansesImage,
        gitLink: "https://github.com/nishikantsonkusare/ExpansesTracker"
    },
    {
        title: "Food App",
        description: "Food App is based on food delivery application. Where user can make his faviourite food on this website. Simple user interface to interact with food application. UI is made up with React JS and Material UI which make more attractive.",
        image: foodImage,
        gitLink: "https://github.com/nishikantsonkusare"
    }
]

const MyWork = () => {
  return(
      <Box sx={{ px: 4 }}>
            <Typography align='center' fontSize="3em" color="white" fontWeight="bold" py={2} mb={4}>
                My Work
            </Typography>
            <CarouselCard>
                {
                    data.map( (item, index) => <MyWorkItemCard key={index} title={item.title} description={item.description} image={item.image} gitLink={item.gitLink} />)
                }
            </CarouselCard>
      </Box>
    );
};

export default MyWork;
