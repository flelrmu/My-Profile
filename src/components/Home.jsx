import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-10 sm:pt-0 pt-20">
          <img
            src="profile.JPG"
            alt="my profile"
            className="rounded-3xl mx-auto w-[200px] md:w-[300px]"
          />
        </div>
        <div className="flex flex-col justify-center h-full px-10">
          <p className="text-[#2BCFC3]">Hi, my name is</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            MUHAMMAD FARHAN
          </h2>
          <ReactTyped
            className="hover:animate-pulse text-4xl sm:text-3xl pt-4 font-bold text-[#696565]"
            strings={[
              "ANDALAS UNIVERSITY ",
              "INFORMATION TECHNOLOGY",
              "INFORMATION SYSTEM",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <p className="text-gray-500 pb-4 max-w-md">
            I am a full-stack developer and also a graphic designer. Currently, I
            focusing on developing my skills as a programmer.
          </p>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md border-2 border-[#2BCFC3] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
            >
              View&nbsp;CV
              <span className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : ''}`}>
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
            
            <div 
              className={`absolute mt-1 w-44 bg-gray-800 rounded-md shadow-lg z-10 border border-[#2BCFC3] overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'max-h-24 opacity-100 transform translate-y-0' 
                  : 'max-h-0 opacity-0 transform -translate-y-2 pointer-events-none'
              }`}
            >
              <ul className="py-1">
                <li className="hover:bg-gray-700 transition-colors duration-200">
                  <a
                    href="document/CV ATS - GRAPHIC DESIGNER.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block pr-2 py-2 text-white hover:text-[#2BCFC3] transition-colors duration-200"
                  >
                    Graphic Designer
                  </a>
                </li>
                <li className="hover:bg-gray-700 transition-colors duration-200">
                  <a
                    href="document/CV ATS - FULL STACK DEVELOPER.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block pr-2 py-2 text-white hover:text-[#2BCFC3] transition-colors duration-200"
                  >
                    Web Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;