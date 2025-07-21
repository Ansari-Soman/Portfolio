import React from "react";
import { infoList, toolsData } from "../../public/assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1600px] overflow-x-hidden w-full  container px-4 lg:px-8 xl:px-[12%] py-10 mx-auto scroll-mt-20  "
    >
      <h4
        data-aos="fade-down"
        // data-aos-delay="200"
        className="text-center text-lg mb-2"
        style={{ fontFamily: "Ovo" }}
      >
        Introduction
      </h4>
      <h2
        data-aos="fade-down"
        className="text-center text-5xl"
        style={{ fontFamily: "Ovo" }}
      >
        About me
      </h2>

      <div className="flex w-full flex-col justify-center  lg:flex-row items-center gap-20 my-20">
        <div
          data-aos="fade-right"
          data-aos-offset="-100"
          className="w-64 sm:w-80 max-w-none rounded-3xl  "
        >
          <img
            src="/assets/coming-soon.png"
            className="w-full object-cover rounded-3xl h-[400px]"
            alt=""
          />
        </div>

        <div className="flex-1">
          <p
            data-aos="zoom"
            // data-aos-delay="200"
            className="mb-10 w-[100%] lg:text-start  text-center mx-auto text-wrap"
            style={{ fontFamily: "Ovo" }}
          >
            I am a dedicated Frontend Developer with hands-on experience in
            building responsive websites. I enjoy turning ideas into interactive
            user interfaces using modern tools and technologies.
          </p>

          {/* ----------------------------skill------------------------- */}
          <ul
            data-aos="zoom"
            data-aos-delay="300"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500  skill-card "
              >
                <img src={icon} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 ">{title} </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4
            data-aos="fade-up"
            className="my-6 text-gray-700 lg:text-start text-center "
            style={{ fontFamily: "Ovo" }}
          >
            Tech Stack
          </h4>

          <ul
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="-50"
            className="flex items-center lg:justify-start justify-center gap-3 sm:gap-5 lg:flex-nowrap flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 skill-card flex-col"
              >
                <img
                  src={`/assets/${tool}.png`}
                  alt=""
                  className="w-8 sm:w-10 "
                />
                <p className="text-[12px]">{tool}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
