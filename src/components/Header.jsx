import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#143F3A] text-white w-full py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[900px] mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/newwhitelogo.png"
            alt="Personal Injury Max"
            className="h-auto max-h-12 w-auto object-contain"
          />
        </div>

        <button
          className="md:hidden block focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        <nav
          className={`md:flex md:items-center md:space-x-10 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#143F3A] md:bg-transparent transition-all duration-300 ${
            menuOpen ? "block py-4" : "hidden md:flex"
          }`}
        >
          <ul className="md:flex md:items-center md:space-x-10 text-center pl-3">
            <li>
              <button
                onClick={() => handleScroll("form")}
                className="block py-2 md:inline-block relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-1/2 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                Form
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("what-you-should-know")}
                className="block py-2 md:inline-block relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-1/2 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                What You Should Know
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("faq")}
                className="block py-2 md:inline-block relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-1/2 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
