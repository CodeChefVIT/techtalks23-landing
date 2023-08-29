import { useAppContext } from "@/context/appContext";

const CountdownMask = () => {
  const { setIsHoveredOnSmall } = useAppContext();
  return (
    <div className="flex h-[60vh] lg:h-[60vh] bg-orange">
      <div className="flex h-[full] items-end mx-[17%] md:mx-[10%]">
        <p
          onMouseEnter={() => {
            setIsHoveredOnSmall(true);
          }}
          onMouseLeave={() => {
            setIsHoveredOnSmall(false);
          }}
          className="text-6xl lg:text-[4xl] font-bold"
        >
          AND AS THE SANDS OF TIME FALL, WE DRAW NEARER TO THE EMBRACE OF
          OBLIVION
        </p>
      </div>
    </div>
  );
};

export default CountdownMask;
