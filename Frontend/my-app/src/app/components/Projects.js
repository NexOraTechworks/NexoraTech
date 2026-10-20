'use client';
import { ProjectCard } from "./ProjectCard";
import projects from "../data/ProjectData";
import { useState } from "react";
import { ProjectDetails } from "./ProjectDetails";
export function Projects() {
  const [viewProject,setViewProject] = useState(null)
  const [open,setOpen] = useState(false)
  const handleOpen = (projects) => {
    setViewProject(projects);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="projects" className="  border-t py-24 px-8 border-white/5  md:max-w-6xl mx-auto  ">
        <div>
        <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-6 block " >
                    // Technical Depth
        </span>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6" >
            {
              projects.map((data)=>
                  <ProjectCard onView={()=>handleOpen(data)}  key={ data.title }  title={data.title} tools={data.tools} description={data.description} />
              )
            }
            
        </div>
        <ProjectDetails project={viewProject} isOpen={open} onClose={handleClose} />
        
        </div>
    </section>
  )
}
