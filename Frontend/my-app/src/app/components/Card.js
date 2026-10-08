import { SquareText } from "lucide-react"

export function Card({title,tech,hover,color}){
  return (
    <div>
        <div className={` bg-onyx backdrop-blur-2xl
        border border-white/10 transition-colors rounded-2xl p-6 ${hover} `} >
    <div className=" mb-4 ">

        <SquareText className={`${color}`} />
    </div>
            <h2 className=" text-lg font-syne " >
               {title}
            </h2>
            <p className="max-w-2xl text-slate-400 text-xs mt-1.5  font-light leading-relaxed mb-10" >
           {tech}
            </p>
        </div>
    </div>
  )
}
