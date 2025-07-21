"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/use-outside-click";
import TechStack from "./TechStack";
import { projectData } from "../../public/assets/assets";
// import { cards } from "../../public/assets/assets";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0   grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" max-w-[500px]   h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex sm:justify-between sm:flex-row flex-col sm:pb-4 pb-0 items-start p-4 ">
                  <div className="">
                    <motion.h3
                      style={{ fontFamily: "/Ovo" }}
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      style={{ fontFamily: "/Ovo" }}
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 sm:py-3 py-2 sm:mt-0 mt-2 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className=" space-y-6 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col sm:flex-row sm:justify-between  sm:items-center hover:bg-neutral-800 rounded-xl cursor-pointer border bg-white   hover:shadow-2xs hover:-translate-y-3 transition duration-500"
          >
            <div className="flex gap-4 flex-col sm:flex-row  ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-[300px] w-full sm:h-36 sm:w-36 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="sm:ml-10">
                <motion.h3
                  style={{ fontFamily: "/Ovo" }}
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-lg sm:text-xl mix-blend-difference text-neutral-200 text-center sm:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.div
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white   sm:text-left sm:justify-start justify-center flex gap-5 mt-3 "
                >
                  {card.stack.map((item, index) => (
                    <TechStack key={index} stack={item} />
                  ))}
                </motion.div>
              </div>
            </div>
            <motion.a
              target="_blank"
              href={card.ctaLink}
              layoutId={`button-${card.title}-${id}`}
              className="px-4 sm:py-2 text-sm rounded-full font-bold text-center py-3 bg-gray-100 hover:bg-gray-400 mix-blend-difference  hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.a>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Weather App",
    description: "Real-time weather info via public API.",
    src: "/assets/weather.png",
    ctaText: "Live Demo",
    ctaLink: "https://weather-application-omega-fawn.vercel.app/",
    stack: ["HTML", "CSS", "JS"],
    content: () => {
      return (
        <p>
          {" "}
          A simple and responsive weather application built using HTML, CSS, and
          JavaScript. Users can enter any city name and instantly fetch current
          weather data including temperature, humidity, and general conditions.
          The data is pulled from a public API and updated in real time. This
          app features a clean UI, fast response, and is ideal for learning API
          integration and responsive layouts.
        </p>
      );
    },
  },

  {
    title: "Super Food Template",
    description: "Modern recipe page with smooth animations.",
    src: "/assets/super-food.png",
    ctaText: "Live Demo",
    ctaLink: "https://super-food-template.vercel.app/",
    stack: ["HTML", "CSS", "JS", "Tailwind"],
    content: () => {
      return (
        <p>
          This landing page template is designed for showcasing food recipes
          with a modern layout and engaging visual appeal. The interface is
          built with responsiveness in mind, ensuring a seamless user experience
          across devices. Smooth scroll animations and vibrant sections enhance
          the browsing experience. Ideal for food bloggers or restaurant
          promotion websites.
        </p>
      );
    },
  },

  {
    title: "Student Management System",
    description: "CRUD app to manage student records.",
    src: "/assets/student-managment-system.png",
    ctaText: "Live Demo",
    ctaLink: "https://student-management-system-teal.vercel.app/",
    stack: ["HTML", "CSS", "JS"],
    content: () => {
      return (
        <p>
          This is a CRUD-based student management system designed using HTML,
          CSS, and JavaScript. It allows you to add, edit, and delete student
          details such as name, roll number, and department. The system is built
          with a mobile-first design and is fully responsive across screen
          sizes. It is an ideal mini-project for understanding client-side data
          handling and form validation in JavaScript.
        </p>
      );
    },
  },
  {
    title: "Sushi-Themed Landing Page",
    description: "Elegant layout for food-themed landing.",
    src: "/assets/shushi.png",
    ctaText: "Live Demo",
    ctaLink: "https://sushi-themed-landing-page.vercel.app/",
    stack: ["HTML", "CSS", "JS"],
    content: () => {
      return (
        <p>
          A sushi-themed landing page showcasing a clean, elegant, and
          responsive design. Built with a mobile-first approach, it features
          smooth transitions and a clear call-to-action layout. Perfect for
          restaurants, food businesses, or anyone looking to create a visually
          appealing one-page website. Includes sections for product display,
          about, and contact.
        </p>
      );
    },
  },
];
