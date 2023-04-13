import React from "react";
import skillsDatas from "../../data/skillsData";
import "./Skills.css";

export const Skills = () => {
  const skillItem = skillsDatas.map((item, index) => {
    return (
      <div key={index} className=" flex items-center gap-x-4 ">
        <img src={item.img} alt="" />
        <p className=" flex text-[24px] text-[#777777] font-medium uppercase">
          {item.skill}
        </p>
      </div>
    );
  });

  return (
    <section
      id="skills"
      className="w-full bg-white lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24 dark:bg-[#252128]"
    >
      <div className="px-5 pt-16 pb-16 flex flex-col gap-y-3 lg:p-0 lg:h-[436px] lg:flex-row lg:gap-x-[15%] lg:w-[960px] lg:mx-auto ">
        <h2 className="text-[48px] text-[#4832D3] font-bold dark:text-[#CBF281]">Skills</h2>
        <div className="flex flex-col flex-wrap gap-y-9 lg:gap-x-[20%]  ">
          {skillItem}
        </div>
      </div>
    </section>
  );
};
