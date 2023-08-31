import React from "react";
import { useAppContext } from "@/context/appContext";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

const AboutMask = () => {
  const { setIsHovered, setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="h-[100vh] w-[100vw] relative  cursor-default  text-black bg-orange pt-32">
      <div
        onMouseEnter={() => {
          setIsHoveredOnSmall(true);
        }}
        onMouseLeave={() => {
          setIsHoveredOnSmall(false);
        }}
        className="uppercase text-[16px] md:text-[10px] mx-[13%] md:mx-[10%] mb-10 tracking-[7px] text-black"
      >
        ABOUT EVENT
      </div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="body mx-[13%] md:mx-[10%] flex flex-col justify-center items-stretch gap-[8rem] py-16 h-[100vh] text-dark-grey"
      >
        <p
          id="proxima"
          className="text-justify text-[1.8rem] tracking-wide font-bold leading-relaxed lg:text-2xl lg:tracking-wide lg:font-semibold sm:text-2xl sm:tracking-wide sm:font-semibold"
        >
          Feeling like a <span className="text-white">tech novice</span>? No sweat! This session has got your back.
          Craving some guidance to turbocharge your tech prowess? Look no
          further! Need a touch of professional finesse to amp up your skills?
          We&apos;ve got you covered! Welcome to the ultimate TechTalks experience,
          designed to unravel the mysteries of the ever-evolving tech universe.
          All you need to do is register and show-up. Leave the rest to us!
          <br/>
          <span className="text-white">“Allow yourself to be a beginner. No one starts off being excellent.”-</span>
          Wendy Flynn
        </p>
      </div>
    </div>

    // </motion.div>
  );
};

export default AboutMask;
