import React from "react";
import ChefCapSVG from "./ChefCapSVG";
import Link from "next/link";
import { motion } from "framer-motion";
import TraingleSVG from "./TraingleSVG";

const Socials = () => {
  return (
    <div className="flex mx-[13%] md:mx-[10%] py-10 border-t-2 border-grey h-[330px] gap-[7vw] mdl:ml-20 sm:ml-5 sm:justify-between sm:px-5">
      {/* <div className="flex ml-40 py-10 border-t-2 border-grey h-[57vh] gap-20 "> */}

      <div className="flex flex-col justify-center lg:hidden">
        <ChefCapSVG />
      </div>
      <div className="flex flex-col justify-between py-20 items-center lg:py-2 sm:hidden">
        <div className="text-lg font-normal tracking-[7px] mdl:tracking-[2px] text-grey ">
          CODECHEF VIT
        </div>
        <div className="text-lg font-normal tracking-[7px] mdl:tracking-[2px] text-grey ">
          COOKOFF 8.0
        </div>
        <div className="z-10">
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
      <div className="flex flex-col py-20 lg:py-2">
        <div className="text-lg font-normal tracking-[7px] text-grey mdl:tracking-[2px]">
          OTHER EVENTS
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              Tech Talks 4.0
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              ClueMinati
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col py-20 lg:py-2">
        <div className="text-lg font-normal tracking-[7px] text-grey mdl:tracking-[2px]">
          NAVIGATION
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              Portal
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              About
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              Timeline
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link href={"/landing"}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              FAQ&apos;s
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
