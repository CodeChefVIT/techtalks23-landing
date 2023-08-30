import React from "react";
import ChefCapSVG from "./ChefCapSVG";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import TraingleSVG from "./TraingleSVG";
import Image from "next/image";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import githubmark from "../../public/githubmark.svg";
import twitter from "../../public/twitter.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
const Socials = () => {
  const isMobile = useMediaQuery("(max-width:639px)");

  return (
    <div
      className="flex mx-[13%] md:mx-[10%] py-10 border-t-2 border-grey h-[330px] gap-[7vw] mdl:ml-20 sm:ml-5 sm:justify-between sm:px-5"
      id="socials"
    >
      {/* <div className="flex ml-40 py-10 border-t-2 border-grey h-[57vh] gap-20 "> */}

      <div className="flex flex-col justify-center lg:hidden">
        <ChefCapSVG />
      </div>
      <div className="flex flex-col justify-between py-20 items-center lg:py-2 sm:hidden">
        <div className="text-lg font-normal tracking-[6px] mdl:tracking-[2px] text-grey ">
          CODECHEF VIT
        </div>
        <div className="text-lg font-normal tracking-[7px] mdl:tracking-[2px] text-grey ">
          COOKOFF 8.0
        </div>
        <div className="z-10">
          <Link to="welcome" spy={true} smooth={true} offset={-5}>
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

        {isMobile && (
          <div className="flex items-center gap-3 mt-[5vh]">
            <a href="https://github.com/CodeChefVIT">
              <Image src={githubmark} alt="img" className="h-10 w-10" />
            </a>
            <a href="https://www.instagram.com/codechefvit/T">
              <Image src={insta} alt="img" className="h-10 w-10" />
            </a>
            <a href="https://twitter.com/codechefvit">
              <Image src={twitter} alt="img" className="h-10 w-10" />
            </a>
            <a href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/">
              <Image src={linkedin} alt="img" className="h-10 w-10" />
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-col py-20 lg:py-2">
        <div className="text-lg font-normal tracking-[7px] text-grey mdl:tracking-[2px]">
          NAVIGATION
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link to="welcome" spy={true} smooth={true} offset={-5}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              Portal
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link to="about" spy={true} smooth={true} offset={-5}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              About
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link to="timeline" spy={true} smooth={true} offset={-5}>
            <p className="text-4xl text-grey font-bold hover:text-orange hover:duration-100 xl:text-2xl">
              Timeline
            </p>
          </Link>
        </div>
        <div className="flex pt-5 items-center gap-5 z-10">
          <TraingleSVG />
          <Link to="faqs" spy={true} smooth={true} offset={-5}>
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
