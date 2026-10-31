'use client';
import { ProjectCard } from "./ProjectCard";
// import projects from "../data/ProjectData";
import { useState, useEffect,useCallback } from "react";
import { FolderOpen } from "lucide-react";
import { ProjectDetails } from "./ProjectDetails";
import axios from "axios";
import Loader from "./Loader";
import FetchError from "./fetchError";
export function Projects() {
  const [viewProject, setViewProject] = useState(null)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errorMessage,setErrorMessage] = useState("")
  const handleOpen = (projects) => {
    setViewProject(projects);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [projects, setProjects] = useState([]);


const fetchProject = useCallback(async () => {
  setErrorMessage("");
  setLoading(true);

  try {
    const response = await axios.get("/api/auth/projects");

    setProjects(response.data.data);
  } catch (error) {
    console.log("Error fetching projects:", error);

    setErrorMessage(
      error.response?.data?.message ||
      error.message ||
      "Unable to fetch projects. Please try again."
    );
  } finally {
    setLoading(false);
  }
}, []);

useEffect(() => {
  fetchProject();
}, [fetchProject]);

  console.log(projects)
  if(errorMessage){
    return(
      <FetchError  message={errorMessage}
      onRetry={fetchProject}
      isLoading={loading}/>
    )
  }

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
              <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed dark:border-white/10 border-white/5 dark:shadow-none shadow bg-light dark:bg-white/[0.02] px-6 py-12 text-center">

                <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <FolderOpen
                    size={26}
                    className="text-violet-400"
                    strokeWidth={1.6}
                  />
                </div>

                <h2 className="text-lg font-semibold tracking-tight text-black dark:text-white">
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
