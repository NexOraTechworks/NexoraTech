import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="  border-t py-24 border-white/5 max-w-6xl mx-auto  ">
        <div>
        <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-3 block " >
                    // Technical Depth
        </span>
        <div className=" grid grid-cols-2 gap-6" >
            <ProjectCard/>
            <ProjectCard/>
        </div>
        </div>
    </section>
  )
}
