import React from "react";
import { motion } from "framer-motion";

export const HamItem = ({ item, closeMenu }) => {
  const link = item.split(" ")[0].toLowerCase();

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative border border-gray-300 min-w-[30px] py-3 my-2 rounded-2xl text-center overflow-hidden cursor-pointer"
        animate={{
          backgroundColor: "#ffffff",
          borderColor: "#d1d5db",
        }}
        whileHover={{
          backgroundColor: "#1f2937",
          borderColor: "#374151",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Sliding background */}
        <motion.div
          className="absolute inset-0 bg-gray-800 rounded-2xl"
          initial={{ x: "-100%" }}
          animate={{ x: "-100%" }}
          whileHover={{ x: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        <a
          style={{ fontFamily: "Ovo" }}
          href={`#${link}`}
          onClick={closeMenu}
          className="relative z-10 block font-medium tracking-wide text-white group-hover:text-white transition-colors duration-300 ease-in-out mix-blend-difference"
        >
          {item}
        </a>
      </motion.div>
    </motion.li>
  );
};
