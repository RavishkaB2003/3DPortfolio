
//text variant for kinetic reveal (Article headings and titles)
export const textVariant = (delay = 0) => {
    return {
        hidden: {
            y : -30, //starts 30px above natural position
            opacity: 0, //starts invisible
        },
        show: {
            y : 0, //glides down to its natural position
            opacity: 1, //fades in to full visibility
            transition: {
                type: "spring", //use realistic spring physics
                duration: 1.0,
                delay: delay, //delay before animation starts
            },
        },
    };
};

//Directional Fade-In (For cards, Blocks, and Columns)
export const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) =>{
    return {
        hidden: {
            //If direction is "left", start 60px to the right (+60) so it slides left
            //If direction is "right", start 60px to the left (-60) so it slides right
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
            //If direction is "up", start 60px below (+60) so it slides up
            //If direction is "down", start 60px above (-60) so it slides down
            y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
            opacity: 0, //starts invisible
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1, //fades in to full visibility
            transition: {
                type: type, //use specified transition type (spring or tween)
                duration: duration, //animation duration
                delay: delay, //delay before animation starts
                ease: "easeOut",
            },
        },
    };
};

//stagger container (Coordinates child card delays automatically)
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren, //delay between each child animation
                delayChildren: delayChildren, //initial delay before first child animation
            },
        },
    };
};

//slide-In (for HUD widgets and mobile drawer navigation)
export const slideIn = (direction = "left", type = "tween", delay = 0, duration = 0.6) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
        },
        show : {
            x: 0,
            y: 0,
            transition: {
                type: type,
                duration: duration,
                delay: delay,
                ease: "easeOut",
            },
        },
    };
};


export const zoomIn = (delay = 0, duration = 0.6) => {
    return {
        hidden : {
            scale: 0.9,
            opacity: 0,
        },
        show : {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                duration: duration,
                delay: delay,   
                ease: "easeOut",
            },
        },
    };
};
