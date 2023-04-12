import React from "react";
import Toggle from "react-styled-toggle";
import darkmode from "../../assets/nightmode.png";
import "../../App.css";
export const Header = () => {
  return (
    <>
      <button>
        <p className=" tr text-[#CAF181]">
          TÜRKÇE'<span className="text-[#D9D9D9]">YE GEÇ</span>
        </p>
      </button>
      <button className="darkmode">
        <Toggle
          backgroundColorChecked="#8F88FF"
          backgroundColorUnchecked="#3A3A3A"
          backgroundColorButton="#FFE86E"
          height={30}
          width={65}
          sliderWidth={24}
          sliderHeight={24}
        />
        <span>DARK MODE</span>
      </button>
      <div className="w-full sm:flex sm:justify-center md:flex md:justify-center  bg-[#4731D3] lg:static lg:bg-transparent lg:w-[960px] lg:mx-auto lg:justify-start flex items-center">
        <p className="px-5 py-3 text-[32px] text-[#CBF281] font-bold lg:px-0 lg:py-5">
          Fatih Erik
        </p>
      </div>
    </>
  );
};
