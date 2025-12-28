
import React from "react";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Cosmetic Forcest Marketing", image: "./cosmetics.png" },
    { id: 2, title: "Sales Analytic", image: "./salesana.png" },
    { id: 3, title: "Fashion Store Mobile Apps", image: "./mobile.png" },
    { id: 4, title: "Laura's Clore Branding Identity", image: "./brandingl.png" },
    { id: 5, title: "SEO Marketing 4.0", image: "./seom.png" },
  ];

  return (
    <section className="bg-white py-26 sm:px-20 px-6 md:px-20 font-sans">
      <div className="max-w-full sm:px-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-start">





        {/* Project Cards */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group cursor-pointer
              transition-transform duration-300
              hover:scale-[1.04]  hover:shadow-xl group-hover:shadow-xl
             "
          >
            {/* Card container */}
            <div
              className="
                relative overflow-hidden rounded-sm
                border-2 border-transparent
                group-hover:border-white
                transition-all duration-300
                shadow-sm 
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title (scales together with card) */}
            <h3
              className="
                mt-4 text-center
                text-[#1e2640]
                font-bold text-lg
              "
            >
              {project.title}
            </h3>
          </div>
        ))}

        {/* CTA Section */}
        {/* <div className="flex flex-col justify-center h-full pt-10 md:pt-0">
          <span className="text-[#ff8a3d] font-bold tracking-wider text-sm mb-2">
            PROJECTS
          </span>

          <h2 className="text-[#1e2640] text-4xl md:text-4xl font-extrabold leading-tight mb-8">
            Selected Works <br /> From Us
          </h2>

          <div>
            <button className="
              border border-pink-200
              text-[#1e2640]
              px-10 py-3 rounded-full
              font-semibold
              hover:bg-pink-50
              transition-colors
              shadow-sm
            ">
              See More
            </button>
          </div>
        </div> */}

  
          <div className="flex flex-col justify-center h-full pt-10 md:pt-0 items-center md:items-start text-center md:text-left">
  
  <span className="text-[#ff8a3d] font-bold tracking-wider text-sm mb-2">
    PROJECTS
  </span>

  <h2 className="text-[#1e2640] text-4xl md:text-4xl font-extrabold leading-tight mb-8">
    Selected Works <br /> From Us
  </h2>

  <div>
    <button
      className="
        border border-pink-200
        text-[#1e2640]
        px-10 py-3 rounded-full
        font-semibold
        hover:bg-pink-50
        transition-colors
        shadow-sm
      "
    >
      See More
    </button>
  </div>

</div>

  
  
  
  
  
  
  
      </div>
    </section>
  );
};

export default Portfolio;
