import React, { useEffect, useRef, useState } from "react";
import {
  easeIn,
  motion,
  MotionConfig,
  useAnimationControls,
} from "motion/react";

const Navbar = () => {
  // ----------------HAMBURGER MENU---------------
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = `translateX(-16rem)`;
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = `translateX(16rem)`;
  };

  // ----------------NAVBAR SCROLL---------------
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  // ----------------NAVBAR ANIMATION---------------
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // -----------------CONTACT ANIMATION-------------
  const control = useAnimationControls();
  const contCol = useAnimationControls();
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ">
        <img
          src="/assets/header-bg-color.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
      <nav
        className={` max-w-[1600px] mx-auto  container sticky px-4 lg:px-8 xl:px-[12%] py-4 flex justify-between inset-0 overflow-x-hidden items-center z-30 transition duration-500  ${
          isScroll ? " bg-white/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="#top">
          <div className="w-16 cursor-pointer">
            <img
              src="/assets/logo-1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </a>
        {/* ---------------------NAV MENU -------------------- */}
        {/* <ul
          className={`relative hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-1 transition duration-500 ${
            isScroll ? "" : " shadow-sm bg-white/50"
          }`}
        >
          <li
            className={`${
              isScroll ? "hover:bg-red-500" : "hover:bg-gray-200"
            } rounded-full py-2 px-4`}
          >
            <a style={{ fontFamily: "Ovo" }} href="#top">
              Home
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "Ovo" }} href="#about">
              About me{" "}
            </a>
          </li>

          <li>
            <a style={{ fontFamily: "Ovo" }} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "Ovo" }} href="#contact">
              Contact me
            </a>
          </li>
        </ul> */}
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className={`relative hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-2 py-1 transition duration-500 bg-white border-[0.5px]        }`}
        >
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>About me</Tab>
          <Tab setPosition={setPosition}>My work</Tab>
          <Tab setPosition={setPosition}>Contact me</Tab>
          {/* ---------------cutome----------- */}
          <Cursor position={position} />
        </ul>
        {/* -------------CONTACT ME BUTTON-------------- */}
        <div className="flex items-center gap-4 z-30">
          <MotionConfig transition={{ duration: 0.5 }}>
            <motion.a
              variants={{
                initial: {
                  color: "#000",
                },
                col: {
                  color: "#fff",
                },
              }}
              style={{ fontFamily: "Ovo" }}
              whileHover={() => {
                control.start("trans");
                contCol.start("col");
                setIsHover(true);
              }}
              animate={contCol}
              onMouseLeave={() => {
                control.start("initial");
                contCol.start("initial");
                setIsHover(false);
              }}
              href="#contact"
              className="relative hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4   overflow-hidden mix-blend-difference "
            >
              <motion.div
                variants={{
                  initial: {
                    y: 52,
                  },
                  trans: {
                    y: -52,
                  },
                }}
                animate={control}
                className=" w-full h-full bg-black  absolute rounded-full -z-10 -translate-x-10 translate-y-[100%]"
              ></motion.div>
              Contact
              <img
                src={
                  isHover
                    ? "/assets/arrow-icon-dark.png"
                    : "/assets/arrow-icon.png"
                }
                alt="arrow_icon"
                className="w-3"
              />
            </motion.a>
          </MotionConfig>

          <button className="block md:hidden ml-3d" onClick={openMenu}>
            <img src="/assets/menu-black.png" alt="" className="w-6" />
          </button>
        </div>

        {/* -- --------mobile menu -------- -- */}
        {/* <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-1000 ease"
        >
          <div
            className="w-5 cursor-pointer absolute right-6 top-6"
            onClick={closeMenu}
          >
            <img src="/assets/close-black.png" alt="" className="w-full" />
          </div>
          <li>
            <a style={{ fontFamily: "Ovo" }} href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "Ovo" }} href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Ovo" }}
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "Ovo" }} href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a
              style={{ fontFamily: "Ovo" }}
              href="#contact"
              onClick={closeMenu}
            >
              Contact me
            </a>
          </li>
        </ul> */}
      </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;

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
