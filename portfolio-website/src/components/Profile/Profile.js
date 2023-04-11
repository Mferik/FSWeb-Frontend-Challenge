import React from 'react'
import profilImg from '../../assets/aboutme/mfeprofile.png'
export const Profile = () => {
  return (
    <div className="px-5 pt-16 pb-16 flex flex-col gap-y-5 lg:p-0 lg:w-[960px] lg:mx-auto lg:gap-8">
      <h2 className="text-[48px] text-[#CBF281] font-bold">Profile</h2>
      <div className="flex flex-col items-center gap-y-8 justify-between lg:flex-row  lg:items-stretch">
        <div className="flex flex-col gap-y-6 justify-between">
          <h3 className="text-[30px] text-white text-center font-normal lg:w-[300px] lg:text-left">
            Basic Information
          </h3>
          <div className="h-[222px] flex flex-col justify-between text-[15px]  leading-[1.5]">
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                Doğum Tarihi
              </p>
              <p className="w-[190px] text-white">26.05.1998</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                İkamet Şehri
              </p>
              <p className="w-[190px] text-white">İstanbul</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281]">
                Eğitim Durumu
              </p>
              <p className="w-[190px] text-white">
              Yildiz Technical Uni. - Metallurgical and Materials Engineering, 2022
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                Tercih Ettiği Rol
              </p>
              <p className="w-[190px] text-white">Frontend, UI</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-y-6  w-[300px]">
          <h3 className="text-[30px] text-white text-center font-normal lg:w-[300px] lg:text-left">
            About Me
          </h3>
          <div className="h-[240px] text-center flex flex-col justify-between text-white text-[18px] leading-[1.5] lg:text-left">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
