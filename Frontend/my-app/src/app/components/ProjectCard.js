
'use client';

import { ChevronRight } from "lucide-react";

export function ProjectCard({ title, description, tools, onView, image }) {
  return (
    <div className="w-full min-w-0 h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.09] via-[#12141A]/95 to-indigo-500/[0.05] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_0_35px_rgba(119,99,249,0.13)]">

        {/* Project image */}
        <div className="relative h-64 sm:h-72 shrink-0 overflow-hidden">

          <span className="absolute left-5 top-5 z-20 rounded-full border border-violet-400/20 bg-[#08090C]/80 px-3 py-1 text-xs font-medium text-violet-300 backdrop-blur-md">
            Cloud / System
          </span>

          <img
            alt={title || "Nexora project"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={image||null}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-violet-500/[0.05]" />
        </div>

        {/* Project content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">

          <h2 className="mt-1 line-clamp-2 min-h-16 font-syne text-2xl tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300">
            {title}
          </h2>

          <p className="mt-1.5 line-clamp-3 min-h-[4.5rem] text-sm font-light leading-relaxed text-slate-400">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-auto border-t border-violet-500/10 pt-5">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

              <ul className="flex flex-wrap gap-3 font-mon text-xs text-slate-400">
                {(tools || []).slice(0, 3).map((data, index) => (
                  <li
                    key={index}
                    className="rounded-full border border-violet-500/15 bg-violet-500/[0.06] px-3 py-1.5"
                  >
                    {data}
                  </li>
                ))}
              </ul>

              <button
                onClick={onView}
                className="flex w-full shrink-0 items-center justify-center gap-1 text-xs font-mon text-white transition-colors duration-300 hover:text-violet-300 md:w-max"
              >
                Detailed case
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
