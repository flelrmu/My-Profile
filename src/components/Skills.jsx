import React, { useEffect } from "react";
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="skills"
      className="w-full justify-center items-center h-screen bg-gradient-to-b  from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#2BCFC3] ">
            Skills
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="html.png" alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="css.png" alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="javascript.png"
              alt="HTML icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="react.png" alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="tailwind.png" alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="node.png" alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
           <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="express.png" alt="HTML icon" />
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="figma.png" alt="HTML icon" />
            <p className="my-4">FIGMA</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="ai.png" alt="HTML icon" />
            <p className="my-4">ADOBE ILLUSTRATOR</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="ap.png" alt="HTML icon" />
            <p className="my-4">ADOBE PHOTOSHOP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
