import React from 'react';
import CarouselCard from '../Components/CarouselCard';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SkillsItemCard from '../Components/CarouselItemCard/SkillsItemCard';
import reactImage from "../assets/img/react-js.jpg";
import muiImage from "../assets/img/mui.png";
import javaScriptImage from "../assets/img/javaScript.jpg";
import djangoImage from "../assets/img/django.png";
import cssImage from "../assets/img/css.png";
import bootstrapImage from "../assets/img/bootstrap.png";
import "../assets/css/main.css"

const data = [
    {
        title: "React JS",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
        image: reactImage
    },
    {
        title: "Material UI",
        description: "MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.",
        image: muiImage
    },
    {
        title: "JavaScript",
        description: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
        image: javaScriptImage
    },
    {
        title: "Django",
        description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.",
        image: djangoImage
    },
    {
        title: "SASS + CSS",
        description: `Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml.`,
        image: cssImage
    },
    {
        title: "Bootstrap 5",
        description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        image: bootstrapImage
    },
]

export const Skills = () => {
    // px: 4, pt: "8vh"
  return (
    <Box className="backgroundSkill" sx={{ height: "100vh"}}>
        <Box sx={{ px: 4,pt: "8vh" }}>
            <Typography color="black" align="center" fontSize="3em" fontWeight="bold" py={3}>Skills</Typography>
            <CarouselCard>
                {
                    data.map( (item, index) => <SkillsItemCard key={index} title={item.title} description={item.description} image={item.image} />)
                }
            </CarouselCard>
        </Box>
    </Box>
  )
};

export default Skills;
