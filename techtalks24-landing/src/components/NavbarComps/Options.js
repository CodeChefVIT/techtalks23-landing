import Link from "next/link";
import React from "react";

const Options = () => {
  return (
    <div
      id="proxima"
      className=" flex flex-col text-[#AA9E8B] text-sm font-bold tracking-wider gap-2 items-end"
    >
      <div className="group transition ease-in-out">
        <Link
          href="#about"
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </Link>
        <Link
          href="#about"
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          ABOUT EVENT
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          href="#timeline"
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </Link>
        <Link
          href="#timeline"
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          TIMELINE
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          href="#prizes"
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          PRIZES
        </Link>
        <Link
          href="#prizes"
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          PRIZES
        </Link>
      </div>
      <div className="group transition ease-in-out">
        <Link
          href="#faqs"
          className=" absolute origin-top transition-transform duration-200 ease-in-out group-hover:scale-y-0"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </Link>
        <Link
          href="#faqs"
          className=" origin-bottom transition-transform duration-200 ease-in-out scale-y-0 group-hover:scale-y-100"
          style={{ transitionDelay: "1ms" }}
        >
          FAQs
        </Link>
      </div>
    </div>
  );
};

export default Options;
