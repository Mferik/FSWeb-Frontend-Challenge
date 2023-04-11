import React,{ useState }  from 'react'
import darkmode from '../../assets/nightmode.png'
export const Changes = () => {
   
  return (
    <div className=' flex justify-evenly ml-96 w-138 h-18 left-851 top-35' >
    <button>
    {" "}
    <p className="font-bold  text-base leading-18 tracking-wide text-[#CAF181]">
      TÜRKÇE'<span className="text-[#D9D9D9]">YE GEÇ</span>
    </p>
  </button>
  <button  className=''>
   <img src={darkmode} alt="" />
  </button>
  </div>
  )
}
