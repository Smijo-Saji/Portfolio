import React from "react";

import "./HeroSection.css";
import {
  Contact,
  FileDown,
  GithubIcon,
  Linkedin,
  MailPlus,
} from "lucide-react";

function HeroSection() {
  return (
    <div className="flex  flex-wrap items-center min-h-[700px] mt-10 lg:mt-0">
      <div className="w-full lg:w-1/2 flex justify-center">
        <div
          className="rounding-sec"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="big-circle">
            <a className="icon-block" href="https://github.com/Smijo-Saji">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHDQ_CU0W38ktREqnPwdVlGCdA_e4xbaDK9NrjFOpD2AqdcajDV3c9_R3vp034nrC9eyvMThwY8ifNpmH3_8GMg_SzAsLKcWQeSskaVl8HjVtLWilhcBNwfep0yRxq-Z_klBXoYTVX0BaE39VwJ2a-drZup5i8owkdaZF0-KhCaodrtN2Rii9HPZrdlk/s1600/github.png"
                alt=""
              />
            </a>
            <a
              className="icon-block"
              href="https://www.instagram.com/smijo_saji?igsh=Z2NzdHJudjg5bWNj"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoPvxJtYJq2-7BDn6LGcQ6QsT3Bo0vxkKu8WAOZnqsHIiTtGJqsHHHWlqqYN4iQFlVaqTaq7AFkWbY5Wrqxvk9Se1Wc_rjA7UKZoXHoxqSWXyaTg9aL9RC37H78NTnT4TwePdwqEYwVw8VxtjPoy6eG-f7RTJhX0JCa0lPmpfaz69hJ1ZHI9seBrUuvf4/s64/instagram.png"
                alt=""
              />
            </a>
            <a className="icon-block" href="https://t.me/Smijo_Saji ">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-WWnXxgKNxwqarx8Vr_xpaCcwOQbv7bpFxWXy1o7DCq7jZNiT3CFdAo52AvJol-C-3InAzj6B4isdJVwVCAlUY9jxqgM43wDXrmfsqL4PGr-fsBG0YjcOzwAHFscoDXg3EGlhupxjKRwrMe7Y2bX9VzTc-RY95A03bV1avKnjwJZjh0HKbGZDEa73mPU/s1600/telegram.png"
                alt=""
              />
            </a>
            <a className="icon-block" href="https://www.youtube.com/">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiejpFbnjtnjhErKo-66_ATecAMmYtSrLzQYdIRMRAxLHtgMUZKnA6jGJQsTMnrniZmMhTZydWkR-l2cpZcGEBGlI4Ptl9ogR-NSPF2wNO5FQdMlL_xaGHQfPnSRIh0Lg4JX0PJLjg9p-tAL9Y8qFbbuGIW3YoolXiMja2qujyDjcFPYGzsPu-RyHle2Jc/s1600/youtube.png"
                alt=""
              />
            </a>
          </div>
          <div className="images">
            <img
              src="https://i.postimg.cc/V5y3QHSX/portfolio.jpg"
              alt=""
              className="img-w"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h4
          className="text-3xl text-center lg:text-start mb-3 text-neutral-500 mt-10 lg:mt-1"
          data-aos="fade-up"
        >
          Hello I'm
        </h4>
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl tracking-wide mt-1  lg:mt-1 lg:text-start text-center"
          data-aos="fade-up"
        >
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
            Smijo Saji
          </span>
        </h1>
        <p
          className="text-neutral-500 mt-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          "Experienced Front-End Developer specializing in creating sleek,
          responsive web applications. Let's bring your ideas to life!"
        </p>
        <div className="flex flex-wrap mt-6 gap-3 justify-center lg:justify-start">
          <a
            target="blank"
            href="https://drive.google.com/file/d/1_QSUuWRNvRfm4BmP7awGUq1jCQc4bNhR/view?usp=sharing"
            className="bg-gradient-to-r from-orange-500 to-orange-800  px-4 py-2 rounded-md flex gap-2"
            data-aos="fade-up"
          >
            <FileDown /> Download Cv
          </a>
          <a
            className="border border-neutral rounded-md px-4 py-2 flex gap-2 "
            href="#contact"
            data-aos="fade-up"
            onClick={() => handleLinkClick("#contact")}
          >
            <Contact />
            Contact Info
          </a>
        </div>
        <div className="flex flex-wrap space-x-5 mt-7 justify-center lg:justify-start">
          <a
            target="blank"
            href="https://www.linkedin.com/in/smijo-saji-29b8ab244"
            className=" bg-neutral-800 rounded-full p-3 hover:bg-orange-500"
            data-aos="fade-up"
          >
            <Linkedin />
          </a>
          <a
            target="blank"
            href="mailto:smijosaji.2@gmail.com"
            className=" bg-neutral-800 rounded-full p-3 hover:bg-orange-500"
            data-aos="fade-up"
          >
            <MailPlus />
          </a>
          <a
            target="blank"
            href="https://github.com/Smijo-Saji"
            className=" bg-neutral-800 rounded-full p-3 hover:bg-orange-500"
            data-aos="fade-up"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
