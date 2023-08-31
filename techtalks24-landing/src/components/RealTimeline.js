import { color, motion, easeInOut } from "framer-motion";

const RealTimeline = () => {
  const events = [
    { time: "2PM-3PM", event: "TO BE ANNOUNCED!" },
    { time: "3PM-4PM", event: "TO BE ANNOUNCED!" },
    { time: "4PM-5PM", event: "TO BE ANNOUNCED!" },
    { time: "5PM-6PM", event: "TO BE ANNOUNCED!" },
    { time: "6PM-7PM", event: "TO BE ANNOUNCED!" },
  ];
  // console.log(100 / events.length);
  return (
    <div className="h-[100vh] w-[100vw] relative" id="timeline">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey pt-2"
      >
        TIMELINE
      </div>
      <div id="proximaBold" className="flex flex-col h-[85%] mt-10">
        {events.map((e, index) => {
          return (
            <motion.div
              key={index}
              // className={`flex ml-40 h-[20%]`}
              className={`flex justify-between mx-auto sm:ml-2 sm:gap-[20vw] xs:text-xl h-[${
                100 / events.length
              }%] border-b-[2px] border-neutral-600 w-[75%] md:w-full gap-44 text-grey text-3xl font-semibold z-20 px-10`}
              whileHover={{
                backgroundColor: "#552BFF",
                color: "rgb(13,13,13)",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className=" flex flex-col justify-center">{e.time}</div>
              <div className="flex flex-col justify-center pr-10">
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

export default RealTimeline;
