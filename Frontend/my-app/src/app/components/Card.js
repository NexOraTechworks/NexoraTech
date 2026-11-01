
import { SquareText } from "lucide-react";

export function Card({ title, tech, hover, color }) {
  return (
    <div className="h-full min-w-0">
      <div
        className={`h-full min-h-[220px] dark:bg-transparent bg-light
        backdrop-blur-2xl border dark:border-white/10 border-graphite
        shadow transition-colors rounded-2xl p-6 flex flex-col ${hover}`}
      >
        <div className="mb-4">
          <SquareText className={color} />
        </div>

        <h2 className="text-lg font-syne dark:text-white text-charcoal">
          {title}
        </h2>

        <p className="text-slate-400 text-xs mt-1.5 font-light leading-relaxed">
          {tech}
        </p>
      </div>
    </div>
  );
}
