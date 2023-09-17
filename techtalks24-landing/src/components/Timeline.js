import { color, motion, easeInOut } from "framer-motion";
import { useState } from "react";

const Timeline = () => {
  const events = [
    { time: "Dr. Murthy Remilla", event: "With 25 years of dynamic cross-functional experience, Dr. Murthy Remilla is a seasoned professional in ISRO. He is Head, Project Management, Human Spaceflight Group, Gaganyaan Programme of India." },
    { time: "Ashish Mishra", event: "As a seasoned Software Engineer at JPMorgan Chase & Co. with over 9 years of experience, Ashish is a dedicated technology enthusiast. With over 25000 followers on LinkedIn, he is one of the top voices in the industry." },
    { time: "Rohit Agarwal", event: "With 16+ years of industry expertise, Rohit is a recognized Data Science leader. Rohit is a renowned international speaker and mentor, mainly focused on Machine Learning and Deep Learning." },
    { time: "Vijaykant Nadadur", event: "An accomplished entrepreneur, computer scientist, and public speaker, Vijay is the Co-Founder & CEO of Stride.AI. Vijay is known for his eloquent speaking skills and specialises in Artificial Intelligence and Natural Language Understanding." },
    { time: "Anirban Nandi", event: "As the Head of AI Products & Analytics at Rakuten India, Anirban has 15+ years of expertise in Machine Learning, Data Science, and Business Analytics, excelling in solving complex challenges and fostering innovation." },
  ];
  // console.log(100 / events.length);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div className="h-[100vh] w-[100vw] relative" id="speakers">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey pt-2"
      >
        SPEAKERS:
        <span className="font-light tracking-wide">
          We&apos;ll be revealing the speakers in stages! Keep a lookout!
        </span>
      </div>
      <div id="proximaBold" className="flex flex-col h-[85%] mt-10">
        {events.map((e, index) => {
          return (
            <motion.div
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              key={index}
              // className={`flex ml-40 h-[20%]`}
              className={` flex gap-60 mx-auto sm:ml-2 sm:gap-[20vw] xs:text-xl h-[${
                100 / events.length
              }%] border-b-[2px] border-neutral-600 w-[75%] md:w-full gap-44 text-grey text-3xl font-semibold z-20 px-10`}
              whileHover={{
                backgroundColor: "#552BFF",
                color: "rgb(13,13,13)",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className=" flex flex-col justify-center">{e.time}</div>
              <div className="flex flex-col text-justify text-lg font-light tracking-tighter justify-center pr-10 xl:text-base lg:text-sm lgg:text-xs lgg:w-[40rem]">
                {e.event}
              </div>
            </motion.div>
          );
        })}
        {/* <motion.div 
            // className={`flex ml-40 h-[20%]`}
            className={`flex ml-40 h-[${100/events.length}%] border-b-2 border-grey gap-44 text-grey text-3xl font-semibold z-20 px-10`}
            whileHover={{
                backgroundColor:"#EB5939",
                color:"rgb(13,13,13)",
            }}
            transition={{duration:0.2,ease: "circInOut"}}
>
            <div className=" flex flex-col justify-center">hh:mm AM</div>
            <div className="flex flex-col justify-center">Place</div>
          </motion.div>         */}
      </div>
    </div>
  );
};

export default Timeline;
