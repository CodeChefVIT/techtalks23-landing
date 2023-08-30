const BurgerSVG = ({ setIsToggled }) => {
  return (
    <svg
      className="fixed w-14 h-14 top-5 right-5 z-40"
    //   className="absolute w-14 h-14 top-5 left-[26rem] z-40"
      viewBox="0 0 617 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={(e) => {
        setIsToggled(true);
        e.stopPropagation();
      }}
    >
      <circle cx="308.5" cy="308.5" r="308.5" fill="#552BFF" />
      <path
        d="M164 195H453"
        stroke="black"
        stroke-width="40"
        stroke-linecap="round"
      />
      <path
        d="M164 308H453"
        stroke="black"
        stroke-width="40"
        stroke-linecap="round"
      />
      <path
        d="M164 423H453"
        stroke="black"
        stroke-width="40"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default BurgerSVG;
