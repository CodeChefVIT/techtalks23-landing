import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const Countdown = () => {
  const timeOfEvent = new Date(2023, 8, 24, 7, 0);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };
  useEffect(() => {
    const calculateCountdown = () => {
      const currentTime = new Date();
      const timeDifference = timeOfEvent - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setCountdown({ days, hours, minutes });
      }
    };

    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="h-[90vh] md:h-[70vh] w-[80vw] relative">
      <div
        id="proxima"
        className="uppercase text-[16px] md:text-[10px] mx-[17%] md:mx-[10%] text-[#B7AB98] mt-28 mb-10 tracking-[7px]"
      >
        Countdown
      </div>
      <div
        id="proximaBold"
        className="flex justify-evenly sm:justify-around items-center h-full w-full sm:flex-col mx-[13%] md:mx-[10%] -mt-10 relative"
      >
        {/* <div className="flex gap-96 ml-16 sm:ml-2 sm:flex-col md:gap-16 justify-items-center"> */}
        <motion.div
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
          className="flex flex-col justify-center items-center w-[220px] lg:w-[180px] mx-7"
        >
          <div
            className={`flex justify-center text-center pr-5 sm:pl-8 text-9xl lg:text-8xl md:text-7xl sm:text-7xl relative ${
              isHovered1
                ? `text-[#552BFF] duration-300`
                : `text-grey duration-300`
            }`}
          >
            {countdown.days}
          </div>
          <div
            className={`w-[200px] text-[28px] text-center sm:pl-10 -mt-16 md:-mt-10 md:text-xl sm:text-2xl tracking-[30px] lg:tracking-[20px] relative ${
              isHovered1
                ? `text-grey duration-300`
                : `text-[#552BFF] duration-300`
            }`}
          >
            DAYS
          </div>
        </motion.div>
        <motion.div
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          className="flex flex-col justify-center items-center w-[220px] lg:w-[180px] mx-7 relative"
        >
          <div
            className={`flex justify-center text-center pl-2 md:pr-1 text-9xl lg:text-8xl md:text-7xl sm:text-7xl relative ${
              isHovered2
                ? `text-[#552BFF] duration-300`
                : `text-grey duration-300`
            }`}
          >
            {countdown.hours}
          </div>
          <div
            className={`w-[200px] text-[28px] text-center sm:pl-6 -mt-16 md:-mt-10 md:text-xl sm:text-2xl tracking-[30px] lg:tracking-[20px] relative ${
              isHovered2
                ? `text-grey duration-300`
                : `text-[#552BFF] duration-300`
            }`}
          >
            HOURS
          </div>
        </motion.div>
        <motion.div
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
          className="flex flex-col items-center w-[220px] lg:w-[180px] mx-7 relative"
        >
          <div
            className={`flex justify-center text-center pl-20 md:pl-2 text-9xl lg:text-8xl md:text-7xl sm:text-7xl relative ${
              isHovered3
                ? `text-[#552BFF] duration-300`
                : `text-grey duration-300`
            }`}
          >
            {countdown.days}
          </div>
          <div
            className={`w-[200px] text-[28px] text-center sm:pl-0 -mt-16 md:-mt-10 md:text-xl sm:text-2xl tracking-[30px] relative lg:tracking-[20px] ${
              isHovered3
                ? `text-grey duration-300`
                : `text-[#552BFF] duration-300`
            }`}
          >
            MINUTES
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
