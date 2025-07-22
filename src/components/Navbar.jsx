import React, { useEffect, useRef, useState } from "react";
import {
  easeIn,
  motion,
  MotionConfig,
  useAnimationControls,
} from "motion/react";
import { HamItem } from "./HamItem";

const Navbar = () => {
  // ----------------HAMBURGER MENU---------------
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transition = `all 1s ease`;
    sideMenuRef.current.style.transform = `translateX(-100%)`;
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transition = `all 1.5s ease`;
    sideMenuRef.current.style.transform = `translateX(100%)`;
  };
  const [handleOnHam, setHandleOnHam] = useState(false);

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
        className={` max-w-[1600px] mx-auto  container fixed px-4 lg:px-8 xl:px-[12%] py-4 flex justify-between  overflow-x-hidden items-center z-50 transition duration-500   ${
          isScroll ? " bg-white shadow-sm" : ""
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
        <div className="flex items-center  gap-4 z-30">
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

          <button
            className="block md:hidden ml-3 absolute right-5  cursor-pointer"
            onClick={() => {
              setHandleOnHam(true);
              // setTimeout(() => openMenu(), 1000);
              openMenu();
            }}
          >
            <img src="/assets/menu-black.png" alt="" className="w-6" />
          </button>
        </div>

        {/* -- --------mobile menu -------- -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col py-20 px-10 fixed translate-x-[100%] w-screen top-0 right-0 bottom-0 z-50 h-screen  bg-[#f0fdf4]  "
        >
          <div
            className="w-5 cursor-pointer absolute right-6 top-6"
            onClick={() => {
              closeMenu(sideMenuRef);
              setTimeout(() => setHandleOnHam(false), 1500);
            }}
          >
            <img src="/assets/close-black.png" alt="" className="w-full" />
          </div>
          {hamBurger.map((item, index) => (
            <HamItem item={item} key={index} closeMenu={closeMenu} />
          ))}
        </ul>
      </nav>
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

const hamBurger = ["Home", "About me", "My work", "Contact me"];
