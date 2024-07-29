import React from "react";
import { frontEnd, backEnd } from "../constants";
import { MousePointer2 } from "lucide-react";

function SkillsSection() {
  return (
    <div className="my-10 lg:mt-20 flex flex-col items-center ">
      <p className="text-lg md:text-xl lg:text-2xl text-neutral-500">
        Exploye My
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-widest mb-5">
        Skills
      </h1>
      <div className="flex flex-wrap w-full">
        <div className="p-3 w-full md:w-1/2">
          <div
            className="border rounded-md px-3 py-2 flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h3 className="text-2xl my-3 font-medium  bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Front End
            </h3>
            <div className="flex justify-center mt-5">
              <ul className=" grid grid-cols-2 lg:gap-x-24 gap-x-2  gap-y-8 mb-4">
                {frontEnd.map((item, index) => (
                  <div className="flex">
                    <MousePointer2 className="mr-4 mt-1 text-green-400" />
                    <li key={index} className="flex flex-col ">
                      <div className="flex items-center font-semibold text-neutral-100 text-lg">
                        {item.skill}
                      </div>
                      <p className=" text-neutral-400 text-xs">{item.level}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-3 w-full md:w-1/2">
          <div
            className="border rounded-md px-3 py-2 flex flex-col items-center md:h-[382px] lg:h-[382px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h3 className="text-2xl my-3 font-medium  bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              Back End
            </h3>
            <div className="flex justify-center mt-5">
              <ul className=" grid grid-cols-2 lg:gap-x-24 gap-x-2 gap-y-8 mb-4">
                {backEnd.map((item, index) => (
                  <div className="flex">
                    <MousePointer2 className="mr-4 mt-1 text-green-400" />
                    <li key={index} className="flex flex-col ">
                      <div className="flex items-center font-semibold text-neutral-100 text-lg">
                        {item.skill}
                      </div>
                      <p className=" text-neutral-400 text-xs">{item.level}</p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5">
        <div className="w-full md:w-1/2 lg:w-1/3 border  border-neutral-800 rounded-md flex items-center justify-between ps-5  ">
          <div>
            <p className="text-sm text-neutral-500">
              I constantly try to <br />
              improve
            </p>
            <h3 className="text-neutral text-2xl font-semibold">
              My Tech Stack
            </h3>
          </div>
          <div
            className="flex   "
            style={{
              backgroundImage: `url("https://i.postimg.cc/c1Xcc7ys/75c2f842863ae2df6b3ac2d0a4d63026.gif")`,
            }}
          >
            <div className="space-y-10">
              <p className="px-3 py-2 bg-neutral-800 text-neutral-400 rounded-md text-center">
                Tailwind
              </p>
              <p className="px-3 py-2 bg-neutral-800 text-neutral-400 rounded-md text-center">
                JavaScript
              </p>
              <p className="px-3 py-2 bg-neutral-800 text-neutral-400 rounded-md text-center">
                AWS
              </p>
            </div>
            <div className="space-y-10 mt-10">
              <p className="px-3 py-2 bg-neutral-800 text-neutral-400 rounded-md text-center">
                Angular
              </p>
              <p className="px-3 py-2 bg-neutral-800 text-neutral-400 rounded-md text-center">
                React
              </p>
            </div>
          </div>
        </div>
      </div>
      <p id="projects"></p>
    </div>
  );
}

export default SkillsSection;
