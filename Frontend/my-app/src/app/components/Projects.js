import { ProjectCard } from "./ProjectCard";
import projects from "../data/ProjectData";
export function Projects() {
  return (
    <section id="projects" className="  border-t py-24 border-white/5 max-w-6xl mx-auto  ">
        <div>
        <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-6 block " >
                    // Technical Depth
        </span>
        <div className=" grid grid-cols-2 gap-6" >
            {
              projects.map((data)=>
                  <ProjectCard  key={ data.title } title={data.title} tools={data.tools} description={data.description} />
              )
            }
        </div>
        </div>
    </section>
  )
}
