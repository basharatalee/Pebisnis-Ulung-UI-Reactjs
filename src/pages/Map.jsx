
import React from "react";

const Map = () => {
  return (
    <section className="relative w-full bg-white font-sans py-10 sm:py-20 sm:mb-20 px-4 sm:px-6 lg:px-20 max-h-[80vh]">
      {/* Header Section */}
      <div className="w-full max-w-6xl mx-auto mb-10">
        {/* <span className="text-[#D98E5E] font-semibold tracking-widest text-xs sm:text-sm uppercase">
          Testimonial
        </span>

        <h2 className="text-[#1E2640] text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
          What Our <br className="hidden sm:block" /> Customer’s Say
        </h2> */}


<span className="block text-[#D98E5E] font-semibold tracking-widest text-xs sm:text-sm uppercase text-center sm:text-left">
  Testimonial
</span>

<h2 className="text-[#1E2640] text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight text-center sm:text-left">
  What Our <br className="hidden sm:block" /> Customer’s Say
</h2>



        </div>

      {/* Main Content Area */}
      <div className="relative w-full max-w-full mx-auto flex flex-col sm:flex-row justify-center items-center">
        {/* Map Image */}
        <img
          src="./map.png"
          alt="Global Map"
          className="w-full h-[105vh] object-contain hidden sm:block opacity-100 sm:px-20"
        />

        {/* Floating Testimonial Card */}
        <div
          className="
            relative
            sm:absolute
            sm:top-28
            sm:right-0
            md:right-10
            sm:-translate-y-1/2
            z-10
            bg-white
            p-6 sm:p-8 md:p-10
            shadow-2xl
            rounded-sm
            max-w-md
            border border-gray-50
            mt-10 sm:mt-0
          "
        >
          {/* Quote */}
          <img src="./qoute.png" alt="Quote Icon" className="w-8 mb-4" />

          {/* Text */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            I really like the team for example, a relationship-focused
            performance expectation might be that the employee sustain collegial
            working relationships with her peers, subordinates and customers.
          </p>

          {/* User */}
          <div className="flex items-center gap-4">
            <img
              src="./girlcircle.png"
              alt="Gloria Jessica"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-[#1E2640] font-bold text-lg">
              Gloria Jessica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;











