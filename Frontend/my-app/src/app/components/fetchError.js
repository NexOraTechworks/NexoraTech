
'use client';

import { AlertCircle, RefreshCw } from "lucide-react";

export default function FetchError({ message, onRetry, isLoading = false }) {
    return (
        <div
            role="alert"
            className="flex flex-col items-center justify-center gap-4
            rounded-2xl border border-red-400/15 bg-red-400/[0.04]
            px-6 py-12 text-center"
        >
            <div className="flex h-14 w-14 items-center justify-center
                rounded-2xl border border-red-400/20 bg-red-400/[0.08]">
                <AlertCircle size={26} className="text-red-400" />
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                    Unable to load projects
                </h3>

                <p className="max-w-md text-sm leading-6 text-slate-400">
                    {message || "Something went wrong while fetching projects. Please try again."}
                </p>
            </div>

            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    disabled={isLoading}
                    className="mt-1 inline-flex items-center gap-2
                    rounded-xl border border-white/10 bg-white/[0.05]
                    px-4 py-2.5 text-sm font-medium text-white
                    transition hover:border-emerald-400/30
                    hover:bg-emerald-400/10 hover:text-emerald-300
                    disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <RefreshCw
                        size={15}
                        className={isLoading ? "animate-spin" : ""}
                    />
                    {isLoading ? "Retrying..." : "Try again"}
                </button>
            )}
        </div>
    );
}
