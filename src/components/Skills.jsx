import React, { useEffect } from "react";
import AOS from "aos";

const abilities = [
  {
    id: 1,
    name: "HTML",
    image: "html.png",
  },
  {
    id: 2,
    name: "CSS",
    image: "css.png",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    image: "javascript.png",
  },
  {
    id: 4,
    name: "REACT",
    image: "react.png",
  },
  {
    id: 5,
    name: "TAILWIND",
    image: "tailwind.png",
  },
  {
    id: 6,
    name: "NODE JS",
    image: "node.png",
  },
  {
    id: 7,
    name: "EXPRESS JS",
    image: "express.png",
  },
  {
    id: 8,
    name: "FIGMA",
    image: "figma.png",
  },
  {
    id: 9,
    name: "ADOBE ILLUSTRATOR",
    image: "ai.png",
  },
  {
    id: 10,
    name: "ADOBE PHOTOSHOP",
    image: "ap.png",
  },
];

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
          {abilities.map((ability) => (
            <div
              key={ability.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={ability.image} />
              <p className="my-4">{ability.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
