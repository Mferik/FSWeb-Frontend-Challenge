import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import {LanguageContext} from '../../context/languageContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css";
export const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  console.log(theme)


  const { handleLanguage, language } = useContext(LanguageContext);
  console.log(language)
 
  return (
    <section
      id={theme}
      className="w-full pb-16 bg-[#4731D3]  lg:relative lg:min-h-max lg:flex lg:flex-col lg:gap-y-10 lg:pt-9 lg:pb-36 lg:bg-transparent  "
    >
      <div
        id={theme}
        className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[30%] lg:bg-[#CBF281]  
        dark:bg-[#1A210B] lg:top-0 lg:right-0 -z-10 "
      ></div>
      <div
        id={theme}
        className="hidden lg:block lg:absolute lg:h-[671px] lg:w-[70%] lg:bg-[#4731D3] lg:top-0 lg:left-0 -z-10 dark:lg:bg-[#171043] "
      ></div>
      <button onClick={handleLanguage}>
       {
        language !== "tr" ? (
          <p className=" tr text-[#CAF181] dark:text-[#BAB2E7]">
          TÜRKÇE'<span className="dark:text-[#777777] text-[#D9D9D9]">YE GEÇ</span>
        </p>
        ) : (
          <p className=" tr text-[#CAF181] dark:text-[#BAB2E7]">
          FOR<span className="dark:text-[#777777] text-[#D9D9D9]"> ENGLISH</span>
        </p>
        )
       }
      </button>
      <button className="darkmode">
  <input
    id={theme}
    onChange={() => handleTheme()}
    type="checkbox"
    className="toggle "
  />
  {language === "tr" &&
    (theme === "light" ? (
      <span className="dark:text-[#D9D9D9]">GECE MODU</span>
    ) : (
      <span className="dark:text-[#D9D9D9]">
        <span className="hidden">GECE MODU</span>
        AÇIK TEMA
      </span>
    ))}
  {language !== "tr" &&
    (theme === "light" ? (
      <span className="dark:text-[#D9D9D9]">DARK MODE</span>
    ) : (
      <span className="dark:text-[#D9D9D9]">
        <span className="hidden">DARK MODE</span>
        LIGHT MODE
      </span>
    ))}
</button>

      <div className="w-full sm:flex sm:justify-center md:flex md:justify-center  bg-[#4731D3] lg:static lg:bg-transparent lg:w-[960px] lg:mx-auto lg:justify-start flex items-center ">
        <p className="px-5 py-3 text-[32px] text-[#CBF281] font-bold lg:px-0 lg:py-5 ">
          Fatih Erik
        </p>
      </div>
     <ToastContainer/>

    </section>
  );
 
};
