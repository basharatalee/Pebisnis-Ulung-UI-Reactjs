

import React from 'react'
import Contactleft from '../components/Contactleft'
import Contactform from '../components/Contactform'

const ContactPage = () => {
  return (
    // min-h-screen ensures the background covers the full page height
    // items-center centers the content vertically
    <div className="min-h-screen bg-white flex items-center justify-center sm:mt-40 sm:mb-0 sm:pt-40 px-4 sm:px-6 lg:px-8">
      
      {/* - max-w-7xl limits the width so it doesn't stretch too far on huge monitors
          - flex-col for mobile (stacked), flex-row for desktop (side-by-side)
          - items-stretch ensures both halves have equal height
      */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
        
        {/* Left Side: Information/Visuals */}
        <div className="w-full lg:w-1/2 flex items-center">
          <Contactleft />
        </div>

        {/* Right Side: The Form */}
        <div className="w-full lg:w-1/2">
          <Contactform />
        </div>

      </div>
    </div>
  )
}

export default ContactPage 