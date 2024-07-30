import React from "react";

import { BookOpenCheck, CheckCircle2, GraduationCap } from "lucide-react";

function AboutSection() {
  return (
    <>
      <div
        className=" flex flex-col items-center"
        id="about"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-500 mt-10 lg:mt-20">
          About
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-wide ">
          About Me
        </h1>
        <p className="my-10 text-neutral-400">
          I'm a passionate MERN Stack developer dedicated to creating seamless
          and engaging user experiences. With a love for clean code and
          innovative design, I bring web applications to life through a
          thoughtful and user-centric approach. I thrive in collaborative
          environments where I can continually learn and push the boundaries of
          what's possible. Committed to excellence and continuous improvement, I
          aim to craft dynamic and responsive interfaces that delight users and
          drive success for businesses.
        </p>
      </div>
      <div className="flex flex-col items-start lg:items-center text-xl text-orange-500">
        <GraduationCap />
        <p className=" mb-1">Career</p>
      </div>
      <div className="container mx-auto px-6 relative flex flex-col space-y-8">
        <div className="absolute z-0 w-[1px] h-full bg-neutral-400 left-20 inset-0 md:mx-auto md:right-0 md:left-0 "></div>

        <div className="relative z-10">
          <CheckCircle2 className="text-green-400  bg-black  rounded-full ms-11 xs:absolute md:mx-auto md:right-0 md:left-0" />
          <div
            className="relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 mr-auto md:pr-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className=" absolute inset-0  left-12 pt h-4 w-4 transform rotate-45 bg-neutral-400 xs:top-1 xs:left-19   md:left-auto  md:right-5 -z-10 "
              aria-hidden="true"
            ></div>
            <div className="bg-neutral-800 p-6 rounded-md ">
              <p className="text-xl text-orange-500 mb-2">Luminar Technolab</p>
              <div className="flex flex-wrap justify-between text-neutral-500 italic text-sm">
                <p>MERN Stack - Internship</p>
                <p>2024 Jan - Present</p>
              </div>
              <p className="mt-1 text-neutral-300 text-sm">
                Interning as a MERN stack developer, focusing on developing and
                maintaining web applications using MongoDB, Express.js, React,
                and Node.js. Engaging in hands-on experience to enhance skills
                in full-stack development and deliver robust web solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <CheckCircle2 className="text-green-400 bg-black  rounded-full ms-11 xs:absolute md:mx-auto md:right-0 md:left-0" />
          <div
            className="relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 ml-auto md:pl-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className=" absolute inset-0  left-12 pt h-4 w-4 transform rotate-45 bg-neutral-400 xs:top-1 xs:left-19   md:left-5 -z-10 "
              aria-hidden="true"
            ></div>
            <div className="bg-neutral-800 p-6 rounded-md ">
              <p className="text-xl text-orange-500 mb-2">Quest Global</p>
              <div className="flex flex-wrap justify-between text-neutral-500 italic text-sm">
                <p>Internship</p>
                <p>2023 Mar - 2023 Apr</p>
              </div>
              <p className="mt-1 text-neutral-300 text-sm">
                Completed a campus-placed internship, gaining practical
                experience and skills relevant to my field. Contributed to
                various projects and collaborated with a professional team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-center text-xl text-orange-500 mb-1 mt-3">
        <BookOpenCheck />
        <p>Education</p>
      </div>
      <div className="container mx-auto px-6 relative flex flex-col space-y-8">
        <div className="absolute z-0 w-[1px] h-full bg-neutral-400 left-20 inset-0 md:mx-auto md:right-0 md:left-0 "></div>

        <div className="relative z-10">
          <CheckCircle2 className="text-green-400  bg-black  rounded-full ms-11 xs:absolute md:mx-auto md:right-0 md:left-0" />
          <div
            className="relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 mr-auto md:pr-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className=" absolute inset-0  left-12 pt h-4 w-4 transform rotate-45 bg-neutral-400 xs:top-1 xs:left-19   md:left-auto  md:right-5 -z-10 "
              aria-hidden="true"
            ></div>
            <div className="bg-neutral-800 p-6 rounded-md ">
              <p className="text-xl text-orange-500 mb-2">Degree</p>
              <p className="text-neutral-300">
                LBS College of Engineering Kasargod
              </p>
              <p className="mt-1 text-neutral-300">
                Bachelor of Technology in Computer Science & Engineering
              </p>
              <div className="flex justify-between mt-1 text-neutral-300">
                <p>2019 - 2023</p>
                <p className="italic text-xs">Percentage - 84%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <CheckCircle2 className="text-green-400 bg-black  rounded-full ms-11 xs:absolute md:mx-auto md:right-0 md:left-0" />
          <div
            className="relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 ml-auto md:pl-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className=" absolute inset-0  left-12 pt h-4 w-4 transform rotate-45 bg-neutral-400 xs:top-1 xs:left-19   md:left-5 -z-10 "
              aria-hidden="true"
            ></div>
            <div className="bg-neutral-800 p-6 rounded-md ">
              <p className="text-xl text-orange-500 mb-2 ">Higher Secondary</p>
              <p className="text-neutral-300">GHSS Vaniyambalam</p>
              <p className="mt-1 text-neutral-300">Bio-Science</p>
              <div className="flex justify-between mt-1 text-neutral-300">
                <p>2017 - 2019</p>
                <p className="italic text-xs">Percentage - 93%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <CheckCircle2 className="text-green-400 bg-black  rounded-full ms-11 xs:absolute md:mx-auto md:right-0 md:left-0" />
          <div
            className="relative pt-2 xs:pl-20 xs:pt-0 md:w-1/2 mr-auto md:pr-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className=" absolute inset-0  left-12 pt h-4 w-4 transform rotate-45 bg-neutral-400 xs:top-1 xs:left-19   md:left-auto  md:right-5 -z-10 "
              aria-hidden="true"
            ></div>
            <div className="bg-neutral-800 p-6 rounded-md ">
              <p className="text-xl text-orange-500 mb-2 ">SSLC</p>
              <p className="text-neutral-300">THSS Perinthalmanna</p>
              <p className="mt-1 text-neutral-300">THSLC Examination</p>
              <div className="flex justify-between mt-1 text-neutral-300">
                <p>2016 - 2017</p>
                <p className="italic text-xs">Percentage - 98%</p>
              </div>
            </div>
          </div>
        </div>
        <p id="skills"></p>
      </div>
    </>
  );
}

export default AboutSection;
