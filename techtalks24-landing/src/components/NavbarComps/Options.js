import {Link} from "react-scroll";
import React from "react";

const Options = () => {
  return (
    <div
      id="proxima"
      className=" flex flex-col text-[#AA9E8B] text-sm font-bold tracking-wider gap-2 items-end  z-40 cursor-default" 	
    >
      <div className="group transition ease-in-out">
        <Link
          to="about" spy={true} smooth={true} offset={-5}
          className=" absolute origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </Link>
        <Link
          to="about"
          spy={true} smooth={true} offset={-5}
          className=" origin-bottom transition-transform duration-500 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          to="speakers"
          spy={true} smooth={true} offset={-5}
          className=" absolute origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          SPEAKERS
        </Link>
        <Link
          to="speakers"
          spy={true} smooth={true} offset={-5}
          className=" origin-bottom transition-transform duration-500 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          SPEAKERS
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          to="timeline"
          spy={true} smooth={true} offset={-5}
          className=" absolute origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </Link>
        <Link
          to="timeline"
          spy={true} smooth={true} offset={-5}
          className=" origin-bottom transition-transform duration-500 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          to="faqs"
          spy={true} smooth={true} offset={-5}
          className=" absolute origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </Link>
        <Link
          to="faqs"
          spy={true} smooth={true} offset={-5}
          className=" origin-bottom transition-transform duration-500 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default Options;
