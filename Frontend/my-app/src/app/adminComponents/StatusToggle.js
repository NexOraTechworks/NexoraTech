
"use client";

export default function StatusToggle({ status, onChange }) {
    return (
        <div className="flex items-center gap-3 mt-3">
            <button
                type="button"
                role="switch"
                aria-checked={status}
                onClick={() => onChange(!status)}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 ${
                    status ? "bg-emerald-500" : "bg-gray-400"
                }`}
            >
                <span
                    className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        status ? "translate-x-5" : "translate-x-0"
                    }`}
                />
            </button>

            <span
                className={`text-sm font-medium ${
                    status ? "text-emerald-500" : "text-gray-400"
                }`}
            >
                {status ? "Active" : "Inactive"}
            </span>
        </div>
    );
}
