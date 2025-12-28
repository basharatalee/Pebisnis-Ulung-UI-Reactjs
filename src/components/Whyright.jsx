

import React from "react";

const Whyright = () => {
  return (
    <div className="w-full text-white flex justify-center sm:justify-start">
      <div className="w-full max-w-full px-4 sm:px-0">

        {/* Badge */}
        <span className="
          inline-block text-sm font-medium text-[#F17216]
          mb-4
          text-center sm:text-left
        ">
          WHY CHOOSE US
        </span>

        {/* Heading */}
        <h1 className="
          font-ubuntu font-semibold leading-tight
          text-[26px]
          sm:text-[32px]
          lg:text-[42px]
          xl:text-[56px]
          mb-6
          text-center sm:text-left
        ">
          Take on any Challenge of the Digital World
        </h1>

        {/* Points */}
        <div className="space-y-4">
          {Array(3).fill("").map((_, i) => (
            <div
              key={i}
              className="
                flex items-start gap-3
                justify-center sm:justify-start
              "
            >
              <img
                src="./whitetick.png"
                className="w-5 h-5 mt-1 shrink-0"
                alt=""
              />
              <span className="text-sm sm:text-base">
                Best Business Platform – World Record 2021
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
          <button className="
            px-8 py-4 rounded-full
            bg-[linear-gradient(97.32deg,_#FF698D_-3.47%,_#FB3F6C_108.43%)] text-white font-semibold
            hover:bg-pink-600 transition
            w-auto sm:w-auto
          ">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Whyright;
