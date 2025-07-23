import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const EnhancedContactButton = ({ bgColor, forColor, buttonText }) => {
  const [isHover, setIsHover] = useState(false);
  const backgroundControl = useAnimation();
  const textControl = useAnimation();
  const iconControl = useAnimation();
  const sparkleControl = useAnimation();
  const borderControl = useAnimation();

  const handleMouseEnter = () => {
    setIsHover(true);
    backgroundControl.start("expand");
    textControl.start("hover");
    iconControl.start("rotate");
    sparkleControl.start("sparkle");
    borderControl.start("glow");
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    backgroundControl.start("initial");
    textControl.start("initial");
    iconControl.start("initial");
    sparkleControl.start("initial");
    borderControl.start("initial");
  };
  useEffect(() => handleMouseLeave(), []);

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group px-8 py-2.5 border-[.5px] border-gray-800 rounded-full overflow-hidden bg-${forColor} transition-all duration-300 cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background animation */}
      <motion.div
        initial={{ x: "-100%", borderRadius: "50%" }}
        variants={{
          initial: { x: "-100%", borderRadius: "50%" },
          expand: { x: "0%", borderRadius: "0%" },
        }}
        animate={backgroundControl}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`absolute inset-0 bg-${bgColor} origin-left`}
      />

      {/* Border glow */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        variants={{
          initial: { opacity: 0, scale: 1 },
          glow: { opacity: [0, 1, 0], scale: [1, 1.1, 1] },
        }}
        animate={borderControl}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 border-2 border-gray-400 rounded-full"
      />

      {/* Sparkles */}
      <AnimatePresence>
        {isHover &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.cos((i * 60 * Math.PI) / 180) * 40,
                y: Math.sin((i * 60 * Math.PI) / 180) * 40,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full pointer-events-none mix-blend-difference"
            />
          ))}
      </AnimatePresence>

      {/* Button label */}
      <motion.span
        initial={{ color: "#000" }}
        variants={{
          initial: { color: "#fff" },
          hover: { color: "#fff" },
        }}
        animate={textControl}
        transition={{ duration: 0.3 }}
        className="relative z-10 font-medium flex items-center gap-3 mix-blend-difference"
      >
        {buttonText}
        <motion.div
          initial={{ x: 0, rotate: 0 }}
          variants={{
            initial: { x: 0, rotate: 0 },
            rotate: { x: 5, rotate: 45 },
          }}
          animate={iconControl}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Send size={16} />
        </motion.div>
      </motion.span>
    </motion.button>
  );
};

export default EnhancedContactButton;
