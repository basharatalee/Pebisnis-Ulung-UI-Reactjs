

import React from "react";

const Partners = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-full mx-auto px-28">
        <div className="flex items-center justify-between gap-0">
          
          {/* Slack */}
                    <div className="px-8 py-3  hover:bg-white-100 transition hover:shadow-xl">
            <img
              src="./slack.png"
              alt="Slack"
              className="w-40 object-contain opacity-100 hover:opacity-100 transition"
            />
          </div>

          {/* Prudential */}
                    <div className="px-8 py-3  hover:bg-white-100 transition hover:shadow-xl">
            <img
              src="./prud.png"
              alt="Prudential"
              className="w-40 object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>

          {/* Microsoft (Highlighted by default like image) */}
          {/* <div className="px-8 py-4 hover:shadow-sm"> */}
                    <div className="px-8 py-3  hover:bg-white-100 transition hover:shadow-xl">

            <img
              src="./micro.png"
              alt="Microsoft"
              className="w-40 object-contain"
            />
          </div>

          {/* Zoover */}
                    <div className="px-8 py-3  hover:bg-white-100 transition hover:shadow-xl">
            <img
              src="./zoov.png"
              alt="Zoover"
              className="w-40 object-contain opacity-70 hover:opacity-100 transition"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Partners;
