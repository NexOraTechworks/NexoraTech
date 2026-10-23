'use client';
import { ProjectCard } from "./ProjectCard";
// import projects from "../data/ProjectData";
import { useState, useEffect } from "react";
import { ProjectDetails } from "./ProjectDetails";
import axios from "axios";
export function Projects() {
  const [viewProject, setViewProject] = useState(null)
  const [open, setOpen] = useState(false)
  const handleOpen = (projects) => {
    setViewProject(projects);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [projects, setProjects] = useState([]);

useEffect(() => {
  const fetchProject = async () => {
    try {
      const apiUrl =  `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`;

      console.log("API URL:", apiUrl);

      const response = await axios.get(apiUrl);

      console.log("Projects data:", response.data.data);

      setProjects(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching projects:",
        error.response?.data || error.message
      );
    }
  };

  fetchProject();
}, []);
  console.log(projects)

  return (
    <section id="projects" className="  border-t py-24 px-8 border-white/5  md:max-w-6xl mx-auto  ">
      <div>
        <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-6 block " >
                    // Technical Depth
        </span>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6" >
          {
            projects.map((data, index) =>
              <ProjectCard
                onView={() => handleOpen(data)}
                key={index}
                image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.project_image}`}
                title={data.project_name}
                tools={data.tech_stack}
                description={data.short_description}
              />)
          }

        </div>
        <ProjectDetails project={viewProject} isOpen={open} onClose={handleClose} />

      </div>
    </section>
  )
}
