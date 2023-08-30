import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Options from "./NavbarComps/Options";
import cclogo from "../assets/cclogo.svg";
import SocialHandles from "./NavbarComps/SocialHandles";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import BurgerSVG from "./BurgerSVG";
import { Link } from "react-scroll";

const FixedNav = () => {
  const isMobile = useMediaQuery("(max-width:639px)");
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsToggled(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const navVar = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: {
      opacity: 100,
      x: 10,
    },
  };
  if (!isMobile) {
    return (
      // <div className="fixed h-screen w-screen text-orange z-40">
      <>
        {/* <div className="fixed flex justify-between p-12 md:p-6 border-2 border-orange "> */}
        <div className=" fixed h-16 w-auto cursor-pointer logo top-5 left-10 z-10">
          <Image className="h-16 w-auto sm:h-12" src={cclogo} alt="CC Logo" />
        </div>
        <div className="fixed z-40 top-5 right-10">
          <Options />
        </div>
        <div
          className={`fixed z-40 bottom-20 right-10 ${
            isScrolled ? "" : "hidden"
          }`}
        >
          <Link to="welcome" spy={true} smooth={true} offset={-5}>
            <svg
              viewBox="0 0 617 617"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <circle
                cx="308.5"
                cy="308.5"
                r="303.5"
                fill="#552BFF"
                stroke="black"
                stroke-width="10"
              />
              <path
                d="M308 142L221.397 292H394.603L308 142ZM293 277V475H323V277H293Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        {/* </div> */}
        <div className="fixed left-[3.7rem] bottom-40 sm:hidden z-40">
          <SocialHandles />
        </div>
      </>
      // </div>
    );
  }

  return (
    <div>
      {isToggled ? (
        <div
          className="fixed right-0 h-screen w-1/2 bg-gradient-to-r from-red-600 to-orange z-40 flex flex-col items-center justify-evenly"
          ref={navbarRef}
        >
          <Link
            to="welcome"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            About
          </Link>
          <Link
            to="speakers"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            Speakers
          </Link>
          <Link
            to="timeline"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            Timeline
          </Link>
          <Link
            to="faqs"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            FAQ&apos;s
          </Link>
          <Link
            to="socials"
            spy={true}
            smooth={true}
            offset={-5}
            className="text-3xl font-black tracking-widest"
            onClick={() => setIsToggled(false)}
          >
            Socials
          </Link>
        </div>
      ) : (
        <BurgerSVG setIsToggled={setIsToggled} />
      )}
    </div>
  );
};

export default FixedNav;
