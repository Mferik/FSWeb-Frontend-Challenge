import React, { useContext } from "react";
import { SiGithub } from "react-icons/si";
import {FaLinkedinIn} from 'react-icons/fa'
import heroImage from "../../assets/aboutme/profile.jpg";
import { ThemeContext } from "../../context/themeContext";
export const Hero = () => {
  const { handleTheme, theme } = useContext(ThemeContext);
  return (
    <section
      id="hero"
      className="w-full pb-16 bg-[#4731D3]  lg:relative lg:min-h-max lg:flex lg:flex-col lg:gap-y-10 lg:pt-9 lg:pb-36 lg:bg-transparent dark:bg-[#171043]"
    >
      <div
        id={theme}
        className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[30%] lg:bg-[#CBF281]  
        dark:lg:bg-[#1A210B] lg:top-0 lg:right-0 -z-10"
      ></div>
      <div className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[70%] lg:bg-[#4731D3]  lg:top-0 lg:left-0 -z-10 dark:bg-[#171043]"></div>
      <div className="px-5 gap-y-2 pt-[18%] w-full flex flex-col items-center lg:pt-0 lg:px-0 lg:flex-row lg:items-end lg:w-[960px] lg:mx-auto">
        <div className="flex flex-col gap-y-9">
          <h1 className="text-[54px] text-[#CBF281] font-bold text-center leading-[110%] lg:text-left">
            I am a Frontend Developer...
          </h1>

          <p className="text-[24px] text-white font-light text-center lg:text-left">
            ...who likes to craft solid and scalable frontend <br /> products
            with great user experiences.
          </p>
          <div className="flex gap-x-3 mx-auto lg:mx-0">
            <a
              href="https://github.com/Mferik"
              target="_blank"
              className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558] dark:bg-[#252128] dark:text-[#FFFFFF]"
            >
              <SiGithub size={30} />
              <p className="text-[18px] font-medium">GitHub</p>
            </a>
            <a
              href="https://www.linkedin.com/in/fatih-erik-472b12214/"
              target="_blank"
              className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558] dark:bg-[#252128] dark:text-[#FFFFFF]"
            >
              <FaLinkedinIn size={30} />
              <p className="text-[18px] font-medium">LinkedIn</p>
            </a>
          </div>
        </div>
        <img
          src={heroImage}
          alt=""
          className="w-1/2 lg:w-[350px] rounded-3xl"
        />
      </div>
    </section>
  );
};
