import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Services", "Resources", "Company", "Blog", "Contact Us"];

  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-full mx-auto flex items-center justify-between px-5 lg:px-40 sm:px-6 lg:px-10 py-5">
        
        {/* Logo */}
        <h1 className="font-ubuntu font-bold italic text-[22px] sm:text-[24px] lg:text-[26px]">
          <span className="text-[#fb3f6c]">PEBISNIS </span>
          <span>ULUNG.</span>
        </h1>
        <div className=" flex items-center justify-center gap-25 mr-3" >
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-[70px]">
          {navItems.map((item) => (
            <li
              key={item}
              className="font-ubuntu text-[14px] text-[#747582] cursor-pointer hover:text-black transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="
            hidden md:flex
            w-[140px] h-[50px] lg:h-[55px]
            
             
            items-center justify-center
            font-ubuntu font-bold text-[14px]
            hover:bg-[#fb3f6c] hover:text-white
            transition


            rounded-full
              border border-[#FF698D80]
              font-ubuntu font-bold text-[14px]
              hover:bg-[#fb3f6c] hover:text-white
              transition
          "
        >
          Let’s Talk
        </button>
          </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 sm:px-6 py-6 border-t bg-white">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li
                key={item}
                className="font-ubuntu text-[16px] text-[#747582] cursor-pointer hover:text-black"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            className="
              mt-6 w-full h-[48px]
              rounded-full
              border border-[#FF698D80]
              font-ubuntu font-bold text-[14px]
              hover:bg-[#fb3f6c] hover:text-white
              transition
            "
          >
            Let’s Talk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
