import React from "react";
import { projectData, workData } from "../../public/assets/assets";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
import ClaudeButtons from "./ClaudeButtons";
const Work = () => {
  return (
    <div
      id="my"
      className="w-full overflow-x-hidden  py-10 scroll-mt-20  max-w-[1600px] mx-auto  container  px-4 lg:px-8 xl:px-[12%]"
    >
      <h4
        data-aos="zoom"
        className="text-center text-lg mb-2"
        style={{ fontFamily: "Ovo" }}
      >
        My Portfolio
      </h4>
      <h2
        data-aos="zoom"
        className="text-center text-5xl"
        style={{ fontFamily: "Ovo" }}
      >
        My latest work
      </h2>
      <p
        data-aos="zoom"
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        style={{ fontFamily: "Ovo" }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>

      <div className="  my-10 gap-5 ">
        <ExpandableCardDemo />
      </div>

      <a
        data-aos="fade-up"
        href=""
        className="w-max flex  text-gray-700  mx-auto my-20 "
      >
        <ClaudeButtons
          bgColor={"black"}
          forColor={"white"}
          buttonText={"Show more"}
        ></ClaudeButtons>

        {/* <img src="/assets/right-arrow-bold.png" alt="" className="w-4" /> */}
      </a>
      {/* <a data-aos="zoom" href=""></a> */}
    </div>
  );
};

export default Work;
