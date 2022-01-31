import Typewriter from "typewriter-effect";

const TypingText = () => {
    return(
        <Typewriter
            options={{
                strings : ["Developer", "React Developer", "Front-End Developer"],
                autoStart: true,
                loop: true
            }}
       />
    )
};

export default TypingText;