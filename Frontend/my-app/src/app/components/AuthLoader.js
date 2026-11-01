
import { ShieldCheck, LoaderCircle } from "lucide-react";

export default function AuthLoader({
  title = "Authenticating",
  description = "Securing your session...",
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center bg-[#08090C]">

      {/* Loader animation */}
      <div className="relative flex items-center justify-center">

        <LoaderCircle
          size={64}
          strokeWidth={1.5}
          className="animate-spin text-emerald-400"
        />

        <ShieldCheck
          size={24}
          className="absolute text-emerald-400"
        />

      </div>

      {/* Loader text */}
      <h2 className="mt-7 text-lg font-semibold tracking-wide text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      {/* Loading indicator */}
      <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-emerald-400" />
      </div>

    </div>
  );
}
