import React from 'react'
import Data  from '../projects.json'
import { FaCode,FaGlobe } from "react-icons/fa";  

const Projects = () => {
  return (
   <section className='text-center flex flex-col  justify-center items-center'>
        <h1 className='text-3xl text-[#D6B69B] font-bold'>Projects</h1>
         <div className="project-container  gap-4 grid grid-cols-3">
         { Data.map((project)=>(       
         <div className="project-card flex relative items-center w-[300px] h-[300px] shadow-[10px_10px_68px_25px_rgba(112,112,80,0.3)]" key={project.id}>
         <div className="project-img h-[100%] w-[100%]">
         <iframe src={project.image} height="100%" width="100%" title={project.id} scrolling='no'></iframe>
         </div>
           
         <div className="project-details absolute flex  flex-col items-center opacity-0 h-[100%] w-[100%]  text-xl hover:opacity-100  hover:bg-gradient-to-t from-transparent to-black hover:text-white  p-5">
         <h2 className='text-4xl leading-12'>{project.name}</h2>
{/*          
            {
               project.skills.map((skills)=>(
                <span className='flex-row me-2 '>
                    {skills}
                </span>
               ))
            } */}
            <div className="project-links flex  justify-around text-3xl">
                <button className='hover:text-[#D6B69B] m-[10%]'><a href={project.github} target="_blank" rel="noreferrer"><i><FaCode/></i></a></button>
                <button className='hover:text-[#D6B69B] m-[10%]'><a href={project.url} target="_blank" rel="noreferrer"><i><FaGlobe/></i></a></button>
            </div>
         {/* <p>{project.description}</p> */}
         </div>
     </div>
    ))}
        </div>
   </section>
  )
}

export default Projects