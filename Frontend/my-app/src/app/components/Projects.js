
'use client';

import { ProjectCard } from "./ProjectCard";
import { useState, useEffect, useCallback } from "react";
import { FolderOpen } from "lucide-react";
import { ProjectDetails } from "./ProjectDetails";
import axios from "axios";
import Loader from "./Loader";
import FetchError from "./fetchError";

export function Projects() {
  const [viewProject, setViewProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [projects, setProjects] = useState([]);

  const handleOpen = (project) => {
    setViewProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  if (errorMessage) {
    return (
      <FetchError
        message={errorMessage}
        onRetry={fetchProject}
        isLoading={loading}
      />
    );
  }

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl overflow-hidden border-t border-white/[0.05] px-6 py-24 md:px-8"
    >
      {/* Subtle purple background glow */}
      {/* <div className="pointer-events-none absolute -left-40 top-20 size-[400px] rounded-full  blur-[130px]" /> */}

      <div className="relative ">

        {/* Section heading */}
        <div className="mb-12">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
            // Selected Work
          </span>

          <h1 className="font-syne text-3xl font-semibold tracking-tight text-charcoal dark:text-white sm:text-4xl">
            Projects that reflect{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              our expertise.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm font-light leading-7 text-slate-400">
            A collection of engineering projects focused on building
            scalable applications, cloud infrastructure and modern
            development solutions.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid relative grid-cols-1 gap-6 md:grid-cols-2">

          {loading ? (
            <Loader />
          ) : projects.length > 0 ? (
            projects.map((data) => (
              <ProjectCard
                onView={() => handleOpen(data)}
                key={data.id ?? data._id}
                image={
                  data.project_image?.startsWith("http://") ||
                  data.project_image?.startsWith("https://")
                    ? data.project_image
                    : data.project_image
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.project_image}`
                    : undefined
                }                
                title={data.project_name}
                tools={data.tech_stack}
                description={data.short_description}
              />
            ))
          ) : (
            <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-violet-500/20 bg-gradient-to-br from-violet-500/[0.05] to-[#12141A]/80 px-6 py-12 text-center">

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
                The next great project could go here. Check back soon
                to explore what we're building.
              </p>

              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-500/15 bg-violet-500/[0.05] px-3 py-1.5 text-xs text-gray-400">
                <span className="size-1.5 rounded-full bg-violet-400" />
                Portfolio currently empty
              </span>
            </div>
          )}
        </div>

        <ProjectDetails
          project={viewProject}
          isOpen={open}
          onClose={handleClose}
        />

      </div>
    </section>
  );
}
