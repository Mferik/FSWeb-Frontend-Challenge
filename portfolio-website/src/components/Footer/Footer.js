import React from "react";
import { CgInstagram } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import { DiCodepen } from "react-icons/di";
import { MdAlternateEmail } from "react-icons/md";
export const Footer = () => {
  return (
    <section
          id="footer"
          className="w-full bg-[#F9F9F9] lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24 dark:bg-[#252128]"
        >
    <div className="px-5 pt-16 pb-16 flex flex-col items-center text-center gap-y-6 lg:p-0 lg:w-[500px] lg:mx-auto">
      <h4 className="text-[48px] text-[#4731D3] font-bold dark:text-[#8F88FF]">
        Send me a message!
      </h4>
      <p className="text-[24px] text-[#120B39] leading-normal dark:text-[#FFFFFF]">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <div className="flex flex-col gap-y-4">
        <a
          href="mailto:mfatiherikk@gmail.com"
          className="text-[20px] text-[#4731D3] font-medium underline cursor-pointer hover:text-[#0a0558] hover:no-underline dark:text-[#8F88FF]"
        >
          mfatiherikk@gmail.com
        </a>
      </div>
      <div className="flex gap-x-6 text-[#4731D3]  dark:text-[#8F88FF]">
        <a href="https://twitter.com/_mfedev" target="_blank">
          <FiTwitter className="cursor-pointer hover:text-[#0a0558]" size={35} />
        </a>

        <a href="https://codepen.io/mferikk" target="_blank">
          <DiCodepen className="cursor-pointer hover:text-[#0a0558]" size={35} />
        </a>
        <a href="mailto:mfatiherikk@gmail.com">
          <MdAlternateEmail className="cursor-pointer hover:text-[#0a0558]" size={35} />
        </a>

        <a href="https://www.instagram.com/fatiheriik/" target="_blank">
          <CgInstagram className="cursor-pointer hover:text-[#0a0558]" size={35} />
        </a>
      </div>
    </div>
    </section>
  );
};
