'use client';
import { ProjectCard } from "./ProjectCard";
// import projects from "../data/ProjectData";
import { useState, useEffect } from "react";
import { FolderOpen } from "lucide-react";
import { ProjectDetails } from "./ProjectDetails";
import axios from "axios";
import Loader from "./Loader";
export function Projects() {
  const [viewProject, setViewProject] = useState(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
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
        const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`;

        console.log("API URL:", apiUrl);

        const response = await axios.get(apiUrl, { withCredentials: true });

        console.log("Projects data:", response.data.data);

        setProjects(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching projects:",
          error.response?.data || error.message
        );
      }
      finally {
        setLoading(false)
      }
    };

    fetchProject();
  }, []);
  console.log(projects)

  return (
    <section id="projects" className="  border-t py-24 px-8 border-white/5  md:max-w-6xl mx-auto  ">
      <div>
        <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-6 block " >
                    // Project
        </span>
        <div className=" grid grid-cols-1 relative  md:grid-cols-2 gap-6" >
          {loading ? <Loader /> :
            projects.length > 0 ? (
              projects.map((data, index) =>

                <ProjectCard
                  onView={() => handleOpen(data)}
                  key={index}
                  image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.project_image}`}
                  title={data.project_name}
                  tools={data.tech_stack}
                  description={data.short_description}
                />)) : (
              <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center">

                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <FolderOpen
                    size={26}
                    className="text-violet-400"
                    strokeWidth={1.6}
                  />
                </div>

                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Nothing to showcase — yet.
                </h2>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-400">
                  The next great project could go here. Check back soon to
                  explore what we’re building.
                </p>

                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-500">
                  <span className="size-1.5 rounded-full bg-violet-400" />
                  Portfolio currently empty
                </span>
              </div>
            )


          }

        </div>
        <ProjectDetails project={viewProject} isOpen={open} onClose={handleClose} />

      </div>
    </section>
  )
}
