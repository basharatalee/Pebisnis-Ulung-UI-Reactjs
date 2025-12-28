
import React from "react";
import RatingCard from "../components/RatingCard";
import Whyleft from "../components/Whyleft";
import Whyright from "../components/Whyright";

const WhyChoose = () => {
  return (
    <section className="relative bg-[#282C4B] overflow-hidden mr-3 ml-3 max-h-[90vh] rounded-3xl">
      <img className="absolute top-0 right-0 z-0 hidden md:block" src="./right-rect.png" alt="" />
      <img className="absolute bottom-0 left-0 z-0 hidden md:block" src="./left-rect.png" alt="" />
      <div className="max-w-full  mx-auto py-20 lg:px-10 z-10" >
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-[40px] min-h-[90vh] gap-40 justify-between"> */}



    

      <div className="grid grid-cols-1 lg:grid-cols-2   items-center px-0 sm:px-6 lg:px-[40px]   lg:gap-40 justify-between">
       <Whyleft /> 
       <Whyright />
        
      </div>        

              



    




            {/* LEFT CONTENT */}
         

        
      </div>
    </section>
  );
};

export default WhyChoose;
