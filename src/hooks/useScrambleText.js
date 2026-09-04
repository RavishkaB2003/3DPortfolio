import { useState, useRef, useEffect } from "react";

const CYBER_GLYPHS = "!@#$%^&*<>[]_{}/~\\01";

const useScrambleText = (originalText) => {
   const [displayText, setDisplayText] = useState(originalText);
   const intervalRef = useRef(null);

   // Cleanup timer on component unmount
   useEffect(() => {
       return () => clearInterval(intervalRef.current);
   }, []);

   const triggerScramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(() => originalText.split("").map((char, index) => {
                 // If the character is space or slash, keep it
                if (char === " " || char === "/") return char;

                // Once iteration reaches this letter's index, lock the original letter
                if (index < iteration) { return originalText[index]; }

                // Otherwise, pick a random glyph from our cyber pool
                return CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
            })
            .join(""));

            // Finish scrambling when all letters are resolved
            if (iteration >= originalText.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1/2; // Scramble speed factor
        }, 25); // Ticks every 25ms
   };

   return { displayText, triggerScramble };
};

export default useScrambleText;