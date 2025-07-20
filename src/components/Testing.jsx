import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
const Testing = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <div className="mb-[1000px] mt-[200px] grid place-items-center bg-red-400 p-10">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className={`relative hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-2 py-1 transition duration-500 bg-white        }`}
      >
        <Tab setPosition={setPosition}>Home</Tab>
        <Tab setPosition={setPosition}>About me</Tab>
        <Tab setPosition={setPosition}>My work</Tab>
        <Tab setPosition={setPosition}>Contact me</Tab>
        {/* ---------------cutome----------- */}
        <Cursor position={position} />
      </ul>
    </div>
  );
};

export default Testing;

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 rounded-full  bg-black h-10 "
    />
  );
};

const Tab = ({ children, setPosition }) => {
  const res = "#" + children.split(" ")[0].toLocaleLowerCase();
  const ref = useRef();
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 text-white mix-blend-difference px-3 py-2 "
    >
      <a href={`${res}`} style={{ fontFamily: "Ovo" }}>
        {children}
      </a>
    </li>
  );
};
