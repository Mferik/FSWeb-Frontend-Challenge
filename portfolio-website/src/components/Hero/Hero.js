import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import heroImage from '../../assets/aboutme/profile.jpg'
export const Hero = () => {
  return (
    <div className="px-5 gap-y-2 pt-[18%] w-full flex flex-col items-center lg:pt-0 lg:px-0 lg:flex-row lg:items-end lg:w-[960px] lg:mx-auto">
      <div className="flex flex-col gap-y-9">
        <h1 className="text-[54px] text-[#CBF281] font-bold text-center leading-[110%] lg:text-left">I am a Frontend Developer...</h1>
     
      <p className="text-[24px] text-white font-light text-center lg:text-left">
        ...who likes to craft solid and scalable frontend <br/> products with great
        user experiences.
      </p>
      <div className="flex gap-x-3 mx-auto lg:mx-0">
      <a href="https://github.com/Mferik" target="_blank" className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]">
        <SiGithub size={30} />
        <p className="text-[18px] font-medium">GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/fatih-erik-472b12214/"
        target="_blank"
        className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]"
      >
        <SiLinkedin  size={30}/>
        <p className="text-[18px] font-medium">LinkedIn</p>
      </a>
      </div>
    </div>
    <img src={heroImage} alt="" className="w-1/2 lg:w-[350px] rounded-3xl" />
    </div>
  );
};
