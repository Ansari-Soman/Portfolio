import React from "react";
import { Link } from "react-router-dom";
import ClaudeButtons from "./ClaudeButtons";
import { Contact } from "lucide-react";
const Header = () => {
  return (
    <div
      id="home"
      className="container overflow-x-hidden
        max-w-[1600px] w-full  text-center mx-auto h-[85vh]  flex flex-col items-center justify-center gap-4 pt-16  px-4 -z-10"
    >
      {/* --------------PROFILE PIC ROUNDED------------- */}
      {/* <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
        <img
          src="/assets/profile-img.png"
          alt=""
          className="rounded-full w-32"
        />
      </div> */}

      {/* ------------------SOME TEXT------------------- */}
      <h3
        data-aos="zoom-in"
        data-aos-anchor-placement="bottm-top"
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        style={{ fontFamily: "Ovo" }}
      >
        Hi! I'm Ansari Soman
      </h3>

      <h1
        data-aos="fade-up"
        style={{ fontFamily: "Ovo" }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-semibold text-gray-900"
      >
        Frontend Web Developer
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="max-w-2xl mx-auto"
        style={{ fontFamily: "Ovo" }}
      >
        I enjoy turning ideas into real-world applications using web
        technologies.
      </p>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="-200"
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        {/* <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 transition duration-500 hover:bg-black/80"
        >
          Contact me
          <img
            src="/assets/right-arrow-white.png"
            alt="arrow"
            className="w-4"
          />
        </a> */}
        <a href="#contact" className="cursor-pointer">
          <ClaudeButtons
            bgColor={"white"}
            forColor={"black"}
            buttonText={"Contact me"}
          />
        </a>
        <Link
          to="/Soman-resume.pdf"
          target="_blank"
          download
          className="px-10 py-3 border
        rounded-full border-gray-500 flex items-center gap-2 transition duration-500 hover:bg-gray-200"
        >
          my resume
          <img src="/assets/download-icon.png" alt="arrow" className="w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
