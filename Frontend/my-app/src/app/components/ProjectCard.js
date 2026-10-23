'use client';
import axios from "axios";
import { ChevronRight } from "lucide-react"
import Image from "next/image";
import { useEffect, useState } from "react";
export function ProjectCard({title,description,tools,onView,image}) {
  
  return (
    <div>
      <div className=" glass-bento  border border-graphite shadow  rounded-2xl p-8 group " >
        <div className=" border border-white/10  overflow-hidden rounded-2xl relative" >
        <span className={`absolute left-5 top-5 z-20 items-center rounded-full border border-white/10 bg-onyx px-3 py-1 text-xs font-medium text-violet-300 `} > 
        Cloud / System 
        </span>

        <Image
  alt="Nexora"
  width={40}
  height={40}
  priority
  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 rounded-2xl"
  src={image}
/>        </div>

        <h2 className=" text-2xl font-syne tracking-tight mt-6 group-hover:text-emerald transition-all duration-500  " >
         {title}
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm mt-1.5  font-light leading-relaxed mb-10 ">
          {description}
        </p>
        <div className=" border-t border-white/10 pt-6 ">
          <div className=" flex md:flex-row flex-col items-center justify-between gap-4 md:gap-0  " >
            <ul className=" flex gap-3 text-xs font-mon text-slate-400  ">
              {
               tools.slice(0,3).map((data,index)=>
                <li key={index} className="  ">{data}</li>
              )
              }
            </ul>
            <button onClick={onView} className=" w-full justify-center  md:w-max    flex items-center gap-1 text-xs font-mon hover:text-emerald transition-all dark:text-white text-charcoal   " >
              Detailed case 
              <ChevronRight size="16px" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
