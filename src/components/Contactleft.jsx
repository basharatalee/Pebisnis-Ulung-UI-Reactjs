
import React from "react";

const Contactleft = () => {
  return (
    <div className="relative w-full h-full flex items-center  justify-center">

      {/* White paint splash */}
      {/* <img
        src="./contactimagel.png"
        alt="white splash"
        className="
          absolute z-[5]
          w-12 top-5 right-[20px]
          sm:w-33 sm:top-20 sm:right-18
        "
      /> */}

      {/* Main girl image */}
      <img
        src="./contactimagel.png"
        alt="student"
        className="
          relative z-[0]
          w-full
          sm:w-full
        "
      />

      {/* Blue arrow */}
      {/* <img
        src="./bluearrow.png"
        alt="arrow"
        className="
          absolute z-[4]
          w-8 bottom-4 right-[15%]
          sm:w-22 sm:bottom-[12%] sm:right-29
        "
      /> */}
    </div>
  );
};

export default Contactleft;
