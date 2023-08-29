import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import TitleSVG from "./TitleSVG";
import TitleSVGMobile from "./TitleSVGMobile";
import Link from "next/link";

const Welcome = () => {
  const isMid = useMediaQuery("(max-width:1012px)");
  console.log("isMid" + isMid);

  return (
    <div className="h-[100vh] w-[100vw] cursor-default flex flex-col justify-center">
      {isMid && <TitleSVGMobile />}
      {!isMid && <TitleSVG />}
      <div className="flex justify-center z-10">
        <Link href={"/landing"}>
          <motion.button
            className="rounded-[4px] w-[200px] py-2 px-12 bg-orange sm:bg-orange text-black sm:font-semibold font-bold sm:border-dark-grey hover:text-[#fff] text-[18px] md:text-[13px] hover:font-semibold"
            whileTap={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            Register
          </motion.button>
        </Link>
      </div>
    </div>
    // <div className="h-[100vh] w-[100vw] cursor-default flex flex-col justify-center">
    //   <motion.div
    //     className="flex justify-center text-grey text-9xl font-semibold z-50 "
    //     whileHover={{ scale: 1.2 }}
    //   >
    //     COOK
    //     <span className="mx-[0.5ch] text-orange">OFF</span>
    //     {/* {isMid && <br />} */}
    //     <span className="relative mx-[0.08ch] before:content-ChefCap before:absolute before:-top-[4.5rem] before:-right-16 before:-z-10">
    //       8.0
    //     </span>
    //   </motion.div>
    // </div>
  );
};

export default Welcome;
