import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#1e2640] text-white py-10   md:px-40 font-sans">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between  gap-10">
        
        {/* Logo and Copyright Section */}
        <div className="flex flex-col md:flex-row items-center gap-5 space-x-6">
          <h1 className="font-ubuntu font-bold italic text-[22px] sm:text-[24px] lg:text-[26px]">
          <span className="text-[#fb3f6c]">PEBISNIS </span>
          <span>ULUNG.</span>
        </h1>
          
          {/* Vertical Divider (visible on desktop) */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-500"></div>
          
          <p className="text-gray-400 text-sm">
            © Copyright Pebisnis Ulung. All right reserved
          </p>
        </div>

        {/* Links and Social Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8 text-sm text-gray-300">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <span className="text-gray-300">Get in Touch</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white rounded-lg text-[#ff5a7e] hover:bg-gray-100 transition-colors">
              <FaFacebookF size={18} />
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white rounded-lg text-[#ff5a7e] hover:bg-gray-100 transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            
            {/* Instagram */}
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white rounded-lg text-[#ff5a7e] hover:bg-gray-100 transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;