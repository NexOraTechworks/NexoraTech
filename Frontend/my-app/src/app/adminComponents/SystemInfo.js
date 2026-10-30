import { Box } from "lucide-react";
export default function SystemInfo({title,count}) {
 
return (
    <div className="w-full max-w-xs">
        <div className="flex items-center gap-4 rounded-xl border border-blue-500/20 bg-[#0B1220] p-5 shadow-lg shadow-black/10 transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Box size={24} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
                <p className="text-sm font-medium text-slate-400">
                    Total {title}
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-100">
                    {count}
                </h2>
            </div>

        </div>
    </div>
);
}