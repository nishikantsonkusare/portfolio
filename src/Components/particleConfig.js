const particleConfig = {
                        // background: {
                        //     color: {
                        //     value:"#CECECE",
                        //     },
                        // },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                            },
                            modes: {
                            bubble: {
                                distance: 200,
                                duration: 5,
                                opacity: 0.8,
                                size: 500,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            },
                        },
                        particles: {
                            color: {
                            value: "#ffffff",
                            },
                            links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                            },
                            collisions: {
                            enable: true,
                            },
                            move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                            },
                            number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 80,
                            },
                            opacity: {
                            value: 0.5,
                            },
                            shape: {
                            type: "circle",
                            },
                            size: {
                            random: true,
                            value: 5,
                            },
                        },
                        detectRetina: true,
    }


export default particleConfig;