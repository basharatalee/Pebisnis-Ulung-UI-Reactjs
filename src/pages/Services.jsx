import React from "react";



const Services = () => {
  return (
    // <section className="bg-white py-20 lg:px-20">
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-20">



{/* <div className="px-[90px] max-w-full  grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] "> */}
  <div className="px-0 sm:px-6 lg:px-[90px] max-w-full grid grid-cols-1 lg:grid-cols-[1.2fr_2fr]">



        {/* Left Content */}
        <div>
        


          <span className="block text-orange-500 font-semibold text-sm tracking-widest text-center lg:text-left">
  SERVICES
</span>

<h2 className="mt-3 text-4xl font-bold text-[#1f2544] text-center lg:text-left">
  Our Capabilities
</h2>

<p className="mt-4 max-w-80 text-[#747582] text-[20px] leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
  We will bring the breadth of our experience and industry knowledge
  to help you succeed
</p>


          <img
            src="./curved-arrow.png"
            alt="Curved arrow"
            className="lg:ml-[50%] ml:90  w-32"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="rounded-2xl bg-transparent p-8 hover:bg-white-50 hover:p-12 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img src="./shop.png" alt="Market Forecast" className="w-10 mb-4" />
            <h4 className="text-lg font-semibold text-[#1f2544] mb-2">
              Market Forest
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Leverage agile framework to provide a robust high level synopsis
              overviews
            </p>
          </div>

          <div className="rounded-2xl bg-transparent p-8 hover:bg-white-50 hover:p-12 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img src="./cards.png" alt="Fund Raising" className="w-10 mb-4" />
            <h4 className="text-lg font-semibold text-[#1f2544] mb-2">
              Fund Raising
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bring to the table survival strategies to ensure proactive
              domination
            </p>
          </div>

          <div className="rounded-2xl bg-transparent hover:bg-white-50 p-8 hover:p-12 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <img src="./chart.png" alt="Cash Flow" className="w-10 mb-4" />
            <h4 className="text-lg font-semibold text-[#1f2544] mb-2">
              Cash Flow
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Grow the holistic world view of disruptive innovation workspace
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
