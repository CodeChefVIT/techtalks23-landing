import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import cclogo from "../assets/cclogo.svg";
import gotoportal from "../assets/gotoportal.svg";
import comingsoon from "../assets/comingsoon.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";

const RegisterNow = () => {
  const isMobile = useMediaQuery("(max-width:639px)");
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const portalVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="h-[100vh] w-[100vw] md:hidden text-grey relative bg-[#060606]">
      <div className="h-full w-full flex justify-center items-center">
        <motion.div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="flex flex-col justify-center items-center w-full h-[400px] z-10"
        >
          <Image src={cclogo} quality={100} width={100} alt="CCLogo" />
          {isMobile ? (
            <Link href="/landing">
              <motion.button
                whileTap={{ scale: 1.2 }}
                variants={portalVariants}
                animate="visible"
              >
                <Image
                  className="my-14"
                  src={gotoportal}
                  quality={100}
                  alt="Portal"
                />
              </motion.button>
            </Link>
          ) : (
            <Link href="/landing">
              <motion.button
                whileTap={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                variants={portalVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
              >
                <Image
                  className="my-14"
                  src={comingsoon}
                  quality={100}
                  alt="Portal"
                />
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterNow;
