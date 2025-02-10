import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2BCFC3]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl pl-4 sm:pl-0 font-bold">
              I'm farhan, nice to meet you. please take a look around
            </p>
          </div>
          <div>
            <p className="pl-4 sm:pl-0 pt-1">
              I am a Graphic Designer with over two years of freelance
              experience specializing in digital design. My expertise includes
              creating logos, typography, wordmark logos, banners, and UI/UX
              designs. I adeptly utilize Adobe Illustrator, Adobe Photoshop, and
              Figma to transform design concepts into polished visuals. I
              consistently deliver high-quality designs that are aligned with
              brand strategies. Additionally, I am knowledgeable in modern web
              technologies, including React JS and Tailwind CSS, and possess
              some experience with Express.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
