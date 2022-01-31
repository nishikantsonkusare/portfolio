import { Typography, Box } from "@mui/material";
import TypingText from "../Components/TypingText";

const Home = () => {
    return(
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100%", width: "100vw", flexDirection: "column" }}>
            <Box style={{ cursor: "pointer" }}>
                <Typography color="white" fontSize={32} fontWeight="bold">Hello, my name is</Typography>
                <Typography fontSize={56} fontWeight={700} color="maroon" letterSpacing={1.5}>Nishikant Sonkusare</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Typography color="white" fontSize={32} fontWeight="bold">And I'm a </Typography>
                    <Box ml={1} color="maroon" fontSize={40} fontWeight="bold"><TypingText /></Box>
                </Box>
            </Box>
        </Box>
    )
};

export default Home;