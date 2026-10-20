import { Card } from "./Card";


export function Stack(){
  const skills = [
    {
      title: "Frontend Architectures",
      tech: "React, Next.js (App Router), TypeScript, Tailwind CSS, Vite",
      level: "Expert",
      mastery: 96,
      hover: "hover:border-violet-400/50 hover:bg-violet-500/5",
      color:"text-violet"
    },
    {
      title: "Backends & Distributed Services",
      tech: "Node.js, Redis, MySQl,MongoDb",
      level: "Staff",
      mastery: 92,
      hover: "hover:border-cyan-400/50 hover:bg-cyan-500/5",
      color:"text-cyan-400/50"
    },
    {
      title: "DevOps, Cloud & SRE",
      tech: " Docker, Kubernetes,CI/CD, Prometheus & Grafana",
      level: "Expert",
      mastery: 94,
      hover: "hover:border-emerald-400/50 hover:bg-emerald-500/5",
      color:"text-emerald-400/50"
    },
  ];
  return (
    <section id="stack" className="  border-t py-24 border-white/5 max-w-6xl mx-auto px-6  ">
        <div>
        <div className=" mb-5 " >
                    <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-3 block " >
                    // Technical Depth
                    </span>
                    <h2 className=" dark:text-white text-charcoal font-bold font-syne leading-12 text-2xl md:text-4xl tracking-wide" >
                    Tech Stack
                    </h2>
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-6  " >
                       {
                        skills.map((skill)=>{
                          return<Card color={skill.color} title={skill.title} tech={skill.tech} hover={skill.hover} key={skill.mastery} />
                        })
                       }
                    </div>
        </div>
        </div>

    </section>
  )
}
