import React from 'react'
import projectsData from '../../data/projectsData'


export const Projects = () => {
  const projects = projectsData.map((project,index) => {
    const tools = project.tools.map((tool,index) => (
      <span key={index} className='py-2 px-[18px] bg-[#4731D3] text-white rounded-[23px]' >{tool}</span>
    ))
    return (
      <div
      key={index}
      className="bg-white flex flex-col gap-x-4 lg:flex-row rounded-xl shadow-2xl"
    >
      <img
        src={project.img}
        alt=""
        className="rounded-t-xl object-cover lg:w-[360px] lg:rounded-none lg:rounded-l-xl"
      />
      <div className="py-8 px-8 gap-6 flex flex-col lg:py-[56.5px]">
        <h4 className="text-[32px] text-[#4338CA] font-bold">
          {project.project}
        </h4>
        <p className="text-[16px] text-[#383838] leading-tight">
          {project.body}
        </p>
        <div className="flex flex-wrap gap-[6px]">{tools}</div>
        <div className="flex gap-x-9">
          <a
            href={project.live}
            target="_blank"
            className="text-[16px] text-[#120B39] font-medium underline hover:text-[#17086e] hover:ease-in-out hover:font-bold"
          >
            View Site
          </a>
          <a
            href={project.github}
            target="_blank"
            className="text-[16px] text-[#120B39] font-medium underline hover:text-[#17086e] hover:ease-in-out hover:font-bold"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
    )
  })

  return (
    <div className=" px-5 pt-16 pb-16 flex flex-col gap-y-7 lg:p-0 lg:w-[960px] lg:mx-auto">
      <h2 className="text-[48px] text-[#4731D3] font-bold">Projects</h2>
      <div className="flex flex-col gap-y-9">{projects}</div>
    </div>
  )
}
