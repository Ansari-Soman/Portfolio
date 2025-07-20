"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import TechStack from "./TechStack";

export function ThreeDCardDemo({ item }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card  border-gray-300 w-auto sm:w-[500px] h-[580px] flex flex-col justify-between rounded-xl p-6 shadow-sm border-2">
        {/* Title */}
        <CardItem translateZ="50" className="text-xl font-bold text-gray-800">
          {item.title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-600 text-sm max-w-sm mt-2"
        >
          {item.description}
        </CardItem>

        {/* Thumbnail */}
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={`/assets/${item.image}`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Bottom Section: Stack + Live Demo */}
        <div className="flex justify-between items-start mt-10">
          {/* Technologies Used */}
          <CardItem
            translateZ={20}
            translateX={-40}
            as="div"
            className="text-xs text-gray-700"
          >
            <p className="mb-2 text-[16px] font-medium text-gray-800">
              Technologies Used
            </p>
            <div className="flex gap-3 flex-wrap">
              {item.stack.map((item, index) => (
                <TechStack key={index} stack={item} />
              ))}
            </div>
          </CardItem>

          {/* Live Demo */}
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-xs font-semibold"
          >
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
