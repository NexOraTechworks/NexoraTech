
'use client';

import { ChevronRight } from "lucide-react";

export function ProjectCard({ title, description, tools, onView, image }) {
  return (
    <div className="w-full min-w-0 h-full">
      <div className="glass-bento w-full min-w-0 border border-graphite shadow rounded-2xl p-5 sm:p-8 group h-full flex flex-col">

        {/* Project image */}
        <div className="border border-white/10 overflow-hidden rounded-2xl relative h-64 sm:h-96 shrink-0">
          <span className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-onyx px-3 py-1 text-xs font-medium text-violet-300">
            Cloud / System
          </span>

          <img
            alt={title || "Nexora project"}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
          />
        </div>

        {/* Project title */}
        <h2 className="text-2xl font-syne tracking-tight mt-6 line-clamp-2 min-h-16 group-hover:text-emerald transition-all duration-500">
          {title}
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm mt-1.5 font-light leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {description}
        </p>

        {/* Footer */}
        <div className="border-t border-white/10 pt-6 mt-auto">
          <div className="flex md:flex-row flex-col items-center justify-between gap-4">

            <ul className="flex flex-wrap gap-3 text-xs font-mon text-slate-400">
              {(tools || []).slice(0, 3).map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>

            <button
              onClick={onView}
              className="w-full justify-center md:w-max shrink-0 flex items-center gap-1 text-xs font-mon hover:text-emerald transition-all dark:text-white text-charcoal"
            >
              Detailed case
              <ChevronRight size={16} />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
