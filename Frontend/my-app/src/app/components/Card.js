import Image from "next/image";
import React from "react";

export function Card({
  title,
  description,
  pills = [],
  tech,
  icon,
  iconBoxClass = "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  borderAccent = "border-l-emerald-500",
  hoverGlow = "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
}) {
  // Support both an array of pills or a comma-separated tech string
  const pillList =
    Array.isArray(pills) && pills.length > 0
      ? pills
      : typeof tech === "string"
        ? tech.split(",").map((t) => t.trim()).filter(Boolean)
        : [];

  return (
    <div className="h-full min-w-0">
      <div
        className={`group relative flex h-full max-w-lg  flex-col  overflow-hidden rounded-2xl  border-white/[0.08] bg-violet/15 shadow-lg  dark:bg-gradient-to-br from-[#0F1423]/95 via-[#0A0D17]/95 ${borderAccent} to-[#080B12] py-4 px-6 backdrop-blur-xl transition-all duration-300 ${hoverGlow}`}
      >
        {/* Top: Icon + Title & Description */}
        <div className="flex items-start gap-4">
          {/* Icon Box */}
          <div
            className={`flex size-15 shrink-0 items-center justify-center rounded-2xl border p-2.5 transition-transform duration-300 group-hover:scale-105 ${iconBoxClass}`}
          >
            <Image width={25} height={25} alt="myimg" src={icon}/>
            {/* <img  src="https://zonalogo.com/assets/docker-logo.webp?asset=1349&w=320" /> */}
          </div>

          {/* Title & Description */}
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="font-syne text-base font-semibold tracking-tight text-charcoal dark:text-white transition-colors duration-200">
              {title}
            </h3>
            {description && (
              <p className="mt-1 text-xs font-light leading-relaxed text-slate-400">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Bottom: Tech Pills */}
        <div className="mt-6 flex items-center   gap-2 pt-2">
          {pillList.map((tool, index) => (
            <span
              key={index}
              className="rounded-full border border-white/[0.08] bg-violet/50   dark:bg-[#111625] px-2 py-1.5 font-mono text-xs font-medium text-white dark:text-slate-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}