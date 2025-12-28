import React from 'react';

const Contactform = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20 px-6 font-sans">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="mb-10">
          {/* <span className="text-[#ff8a3d] font-bold tracking-widest text-sm uppercase">
            CONTACT US
          </span>
          <h2 className="text-[#1e2640] text-4xl md:text-5xl font-extrabold mt-3">
            Let's Collaborate Now!
          </h2> */}



          <span className="block text-[#ff8a3d] font-bold tracking-widest text-sm uppercase text-center md:text-left">
  CONTACT US
</span>

<h2 className="text-[#1e2640] text-4xl md:text-5xl font-extrabold mt-3 text-center md:text-left">
  Let's Collaborate Now!
</h2>

        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-[#1e2640] font-bold text-lg mb-3">Full Name</label>
            <input 
              type="text" 
              placeholder="Input Your Name"
              className="bg-[#fffafa] border-none rounded-sm p-5 text-gray-500 placeholder-gray-400 focus:ring-1 focus:ring-pink-200 outline-none transition-all"
            />
          </div>

          {/* Email and Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-[#1e2640] font-bold text-lg mb-3">Email</label>
              <input 
                type="email" 
                placeholder="Input Your Email"
                className="bg-[#fffafa] border-none rounded-sm p-5 text-gray-500 placeholder-gray-400 focus:ring-1 focus:ring-pink-200 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[#1e2640] font-bold text-lg mb-3">Date</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Select Date"
                  className="w-full bg-[#fffafa] border-none rounded-sm p-5 pl-12 text-gray-500 placeholder-gray-400 focus:ring-1 focus:ring-pink-200 outline-none transition-all"
                />
                {/* Calendar Icon Placeholder */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-[#1e2640] font-bold text-lg mb-3">Message</label>
            <textarea 
              rows="4"
              placeholder="Write Message..."
              className="bg-[#fffafa] border-none rounded-sm p-5 text-gray-500 placeholder-gray-400 focus:ring-1 focus:ring-pink-200 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            {/* <button 
              type="submit" 
              className="bg-[#ff5a7e] hover:bg-[#ff4066] text-white font-bold py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(255,90,126,0.3)] transition-all transform hover:-translate-y-1"
            >
              Send Message
            </button> */}



            <div className="flex justify-center md:justify-start">
  <button 
    type="submit" 
    className="bg-[#ff5a7e] hover:bg-[#ff4066] text-white font-bold py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(255,90,126,0.3)] transition-all transform hover:-translate-y-1"
  >
    Send Message
  </button>
</div>

          </div>
          
        </form>
      </div>
    </section>
  );
};

export default Contactform;