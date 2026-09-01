import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UplinkLoader = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState("corners"); // "corners" -> "drawing" -> "counting" -> "expanding"
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState("UPLINK_CARRIER: ACQUIRING SIGNAL...");

  useEffect(() => {
    // Step 1: Show 4 corners, then start border drawing after 250ms
    const t1 = setTimeout(() => setPhase("drawing"), 250);

    // Step 2: After border finishes drawing (900ms), start progress counter
    const t2 = setTimeout(() => {
      setPhase("counting");

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Step 3: At 100%, trigger the full-screen expansion!
            setPhase("expanding");
            setTimeout(() => {
              if (onLoadingComplete) onLoadingComplete();
            }, 700); // Wait for full-screen expansion animation to finish
            return 100;
          }

          const next = prev + 1;
          if (next === 30) setStatusLog("CARRIER_LOCK: SECURED // HARDWARE [OK]");
          if (next === 65) setStatusLog("COMPILING_SHADERS // WEBGL [ACTIVE]");
          if (next === 90) setStatusLog("PROTOCOL_READY // INITIALIZING_UI");
          return next;
        });
      }, 30); // Fast, fluid tick and update progree tick speed
    }, 1400); //drawing speed

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  
  }, [onLoadingComplete])


    
    const isDark = phase === "counting" || phase === "expanding";
    const isExpanding = phase === "expanding";

    return (
    <div className="fixed inset-0 z-100 bg-card-surface flex items-center justify-center overflow-hidden select-none">
      
      {/* Central Container (Starts Transparent -> Fills with Dark Noir -> Expands Fullscreen) */}
      <motion.div
        initial={{ width: "90%", maxWidth: "700px", height: "360px", borderRadius: "16px" }}
        animate={{
          width: isExpanding ? "100vw" : "90%",
          maxWidth: isExpanding ? "100vw" : "700px",
          height: isExpanding ? "100vh" : "360px",
          borderRadius: isExpanding ? "0px" : "16px",
          backgroundColor: isDark ? "#070709" : "rgba(255, 255, 255, 0)", // Starts completely transparent!
        }}
        transition={{
          duration: isExpanding ? 0.9 : 0.4, //control background speed
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex flex-col justify-between p-8 overflow-hidden z-10"
      >
        
        {/* 1. Animated SVG Border Line (Draws around the perimeter on white background) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="16"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)" // Black line on white, then subtle glass line on dark
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: phase !== "corners" ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} //border line speed control
          />
        </svg>
        {/* 2. The 4 Corner Crosshairs [+] */}
        {["top-3 left-4", "top-3 right-4", "bottom-3 left-4", "bottom-3 right-4"].map((pos, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className={`absolute ${pos} font-mono text-xs font-bold pointer-events-none text-zinc-500`}
          >
            +
          </motion.span>
        ))}
        {/* 3. Interior Telemetry Content (Appears only after border finishes drawing!) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isDark && !isExpanding ? 1 : 0, // Fades in on dark phase, dissolves on expand
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between h-full gap-6 relative z-10"
        >
          {/* Top Header Bar */}
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-kage-cyan animate-pulse" />
              <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                RPB_ARCHITECT // SECURE_UPLINK
              </span>
            </div>
            <span className="font-mono text-xs text-kage-cyan">
              LATENCY: 0.8ms
            </span>
          </div>
          {/* Stepped Progress Bar */}
          <div className="flex flex-col gap-2 my-auto">
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-zinc-400">// BUFFER_ALLOCATION</span>
              <span className="text-kage-orange font-bold text-sm">{progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-[#141620] border border-white/10 rounded-sm overflow-hidden p-0.5 relative">
              <motion.div
                className="h-full bg-linear-to-r from-kage-orange to-kage-cyan rounded-sm shadow-[0_0_12px_rgba(255,106,0,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="bg-[#08080c] border border-white/5 p-3 rounded font-mono text-xs flex items-center justify-between mt-2">
              <span className="text-zinc-300 truncate font-mono">
                {`> ${statusLog}`}
              </span>
              <span className="text-kage-orange animate-ping font-bold ml-2">_</span>
            </div>
          </div>
          {/* Footer Metadata */}
          <div className="flex justify-between items-center font-mono text-[10px] text-zinc-500 pt-1 border-t border-white/5">
            <span>HOST: RPB_PORTFOLIO_NODE</span>
            <span>ENC: AES_256_GCM</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );

  
};

export default UplinkLoader;