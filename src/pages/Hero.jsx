




import React from "react";
import RatingCard from "../components/RatingCard";

const Hero = () => {
  return (


<section className="relative bg-transparent pt-20 pb-10 mr-3 ml-3 md:pb-0 md:pt-0 md:min-h-[100vh] overflow-hidden ">
  {/* Background Shapes */}
  
  <div className="absolute inset-0 z-0 bottom-0 ">

      <img
    className="absolute bottom-0 md:top-0 right-0 z-0 "
    src="./right-rect.png"
    alt=""
  />
  <img
    className="absolute  bottom-0 left-0 z-0 "
    src="./left-rect.png"
    alt=""
  />

  



  </div>
  


  {/* <div className="relative z-10 max-w-full   px-20 sm:px-6 lg:px-40 "> */}
    <div className="relative z-10 max-w-full   px-4 sm:px-6 lg:px-40 -lg:mt-[35px]">



    <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:min-h-[90vh]  gap-10 lg:gap-0">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">
        {/* Badge */}
        <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-[#F17216] mb-6">
          <img src="./verify.png" className="w-6 h-6" alt="" />
          Best Business Platform – World Record 2021
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl xl:text-[3.2rem] font-bold text-gray-900 leading-tight">
          Reach Your{" "}
          <span className="relative inline-block">
            Business
            <svg
              className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-full scale-x-110"
              height="15"
              viewBox="0 0 120 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 10 C30 2, 90 2, 118 10"
                stroke="#FB7185"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          Goals in Record Time
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 max-w-md mx-auto lg:mx-0">
          Support small business and join the nationwide movement to encourage
          commercial support for the millions of minority owned businesses
          helping world economy.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
          <button className="px-8 py-4 rounded-full bg-[linear-gradient(97.32deg,_#FF698D_-3.47%,_#FB3F6C_108.43%)] text-white font-semibold hover:bg-pink-600 transition">
            Get Started
          </button>

          <button className="flex items-center gap-3 text-gray-700 font-medium hover:text-gray-900 transition ">
            <span className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
              <img src="./video-circle.png" alt="" className="w-7 h-7" />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative flex justify-center lg:justify-end items-end -mr-13  hidden lg:flex">
        <img
          src="./girl.png"
          alt="Business Woman"
          className="relative z-10 w-[280px] sm:w-[360px] lg:w-[480px]"
        />

        {/* Rating Card */}
        <div className="absolute bottom-0 right-4 sm:right-8 z-20">
          <RatingCard />
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Hero;
