import React from "react";

import { Projects } from "../constants";

import { Github, SquareArrowOutUpRight } from "lucide-react";

function ProjectsSection() {
  return (
    <div className="my-10 lg:mt-20 flex flex-col items-center">
      <p className="text-lg md:text-xl lg:text-2xl text-neutral-500">
        Projects
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-wide ">
        Personal Projects
      </h1>
      <div className="mt-10 lg:mt-20  grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {Projects.map((item) => (
          <div
            className=" group pt-2 bg-neutral-800 rounded-md cursor-default sm:hover:scale-105 sm:hover:shadow-xl group transition duration-500"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="mx-2 flex justify-center items-center overflow-hidden rounded-t-xl">
              <img src={item.image} alt="" className=" w-full" />
            </div>
            <div className="p-3 ">
              <h1 className="text-xl font-light">{item.title}</h1>
              <p className="mt-3 text-neutral-400 text-xs  pb-4 h-32">
                {item.description}
              </p>

              <div className="flex  gap-2">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex px-2 items-center text-xs font-medium justify-center w-full   text-neutral hover:text-white  rounded-md transition duration-300 bg-orange-700 bg-opacity-50 hover:bg-opacity-100"
                >
                  <SquareArrowOutUpRight className="mr-2" /> Live Demo
                </a>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex px-2 items-center text-xs font-medium justify-center py-3 w-full rounded-md transition duration-300   bg-neutral-700 bg-opacity-50 hover:bg-opacity-100"
                >
                  <Github className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p id="contact"></p>
    </div>
  );
}

export default ProjectsSection;
