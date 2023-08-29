import React, { useState } from "react";
import { motion } from "framer-motion";
import Awards from "./PrizesComps/Awards";

const Prizes = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div className="h-[100vh] sm:h-[67vh] w-[100vw] text-grey flex flex-col items-start justify-between gap-[3.1rem] py-16">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey pt-2"
      >
        PRIZES
      </div>
      <div>
        <Awards
          title="FIRST"
          content="You’ll get like 1.5 Lakhs in cash, damm that's a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="SECOND"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="THIRD"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <Awards
          title="FRESHERS"
          content="You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money. What
            are you going to do with all? I’m gonna buy myself some doge."
        />
        <div className="parent container relative">
          <div className="text h-full w-[100vw] flex justify-between items-center">
            <p className="flex mx-[13%] md:mx-[10%] sm:mx-[0] text-8xl font-bold tracking-wide cursor-pointer md:text-xl lg:text-6xl text-center md:pl-10 justify-self-start">
              WOMEN
            </p>
            <div className="flex items-center h-full sm:h-[80px] w-[30%] sm:w-[40%] mr-[13%] md:mr-[10%] text-lg tracking-wide text-black md:text-xs xl:text-sm md:tracking-tighter ">
              <p className="flex">
                You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money.
                What are you going to do with all? I’m gonna buy myself some
                doge.
              </p>
            </div>
          </div>
          <div className="overlay transition-all absolute top-0 bg-orange w-[100vw] flex justify-between items-center">
            <p className="text-8xl mx-[13%] md:mx-[10%] font-bold tracking-wide cursor-pointer md:text-xl lg:text-6xl text-center md:pl-10 justify-self-start text-orange">
              WOMEN
            </p>
            {/* <p className="mx-[13%] md:mx-[10%] px-36 h-20 w-[45vw] lg:w-[55vw] text-lg tracking-wide text-orange md:text-xs md:px-0 xl:text-sm md:tracking-tight ">
              You’ll get like 1.5 Lakhs in cash, damm that’s a lot of money.
              What are you going to do with all? I’m gonna buy myself some doge.
            </p> */}
          </div>
          <div className="flex w-full justify-center">
            <div className="flex border-b-[2px] border-[#AA9E8B] opacity-50 w-[75%] md:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
