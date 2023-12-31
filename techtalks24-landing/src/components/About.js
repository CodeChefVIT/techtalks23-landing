"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const About = () => {
  return (
    <div className="h-[100vh] w-[100vw] relative cursor-default " id="about">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[12px] mx-[13%] md:mx-[10%] text-[#B7AB98] mt-32 mb-10 tracking-[7px]"
      >
        About Event
      </div>
      <div className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-grey">
        <p
          id="proxima"
          className="text-justify text-4xl tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          Tech Talk is <span className="text-orange">CodeChef VIT</span>’s discussion session where speakers from
          various technical industries are willing to interact with the tech
          enthusiasts and share their experiences working in the industry. The
          event would give the inside view of the tech industry and speakers
          will give suggestions to the participants
        </p>
      </div>
    </div>
  );
};

export default About;
