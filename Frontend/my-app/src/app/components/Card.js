import { SquareText } from "lucide-react"

export function Card({title,tech,hover,color}){
  return (
    <div>
        <div className={` dark:bg-transparent bg-light min-w-full  backdrop-blur-2xl
        border dark:border-white/10 border-graphite shadow transition-colors rounded-2xl p-6 ${hover} `} >
    <div className=" mb-4 ">

        <SquareText className={`${color}`} />
    </div>
            <h2 className=" text-lg font-syne dark:text-white text-charcoal " >
               {title}
            </h2>
            <p className="max-w-2xl text-slate-400 text-xs mt-1.5  font-light leading-relaxed mb-10" >
           {tech}
            </p>
        </div>
    </div>
  )
}
