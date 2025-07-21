import React from "react";

const HamburgerMenu = ({ sideMenuRef, closeMenu, setHandleOnHam }) => {
  return (
    <div>
      {" "}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col py-20 px-10 fixed translate-x-[100%] top-0 right-0 bottom-0 w-64 z-50 h-screen bg-rose-50  "
      >
        <div
          className="w-5 cursor-pointer absolute right-6 top-6"
          onClick={() => {
            closeMenu();
            setTimeout(() => setHandleOnHam(false), 1500);
          }}
        >
          <img src="/assets/close-black.png" alt="" className="w-full" />
        </div>
        <li className="border min-w-[30px] hover:bg-gray-200 px-10 py-4 my-2 rounded-2xl text-center">
          <a style={{ fontFamily: "Ovo" }} href="#top" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="border min-w-[30px] hover:bg-gray-200 px-10 py-4 my-2 rounded-2xl text-center">
          <a style={{ fontFamily: "Ovo" }} href="#about" onClick={closeMenu}>
            About me
          </a>
        </li>
        <li className="border min-w-[30px] hover:bg-gray-200 px-10 py-4 my-2 rounded-2xl text-center">
          <a style={{ fontFamily: "Ovo" }} href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li className="border min-w-[30px] hover:bg-gray-200 px-10 py-4 my-2 rounded-2xl text-center">
          <a style={{ fontFamily: "Ovo" }} href="#work" onClick={closeMenu}>
            My Work
          </a>
        </li>
        <li className="border min-w-[30px] hover:bg-gray-200 px-10 py-4 my-2 rounded-2xl text-center">
          <a style={{ fontFamily: "Ovo" }} href="#contact" onClick={closeMenu}>
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
