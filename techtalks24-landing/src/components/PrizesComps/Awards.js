import React from "react";

const Awards = (props) => {
  return (
    <div>
      {" "}
      <div className="parent container relative">
        <div className="mx-[13%] md:mx-[10%] w-[100vw]">
          <div className="text w-[100vw] flex justify-start items-center">
            <p className="text-8xl font-bold tracking-wide lg:text-6xl cursor-pointer md:text-xl w-[30%] justify-self-start">
              {props.title}
            </p>
            <p className="h-full w-[30%] sm:w-[40%] mx-[13%] md:mx-[10%] pl-3 text-lg tracking-wide items-center text-black md:text-xs xl:text-sm md:tracking-tighter ">
              {props.content}
            </p>
          </div>
          <div className="overlay transition-all absolute top-0 bg-orange flex items-center">
            <div className="mx-[13%] md:mx-[10%] w-full flex">
              <p className="text-8xl font-bold tracking-wide lg:text-6xl w-full cursor-pointer md:text-xl justify-self-start text-orange ">
                {props.title}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex border-b-[2px] border-[#AA9E8B] opacity-50 w-[75%] md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
