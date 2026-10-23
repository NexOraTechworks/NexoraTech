"use client";

export default function StatusToggle({ status, onChange }) {
    const isActive = status === true;

    return (
        <div className="flex items-center gap-3 py-4">
            <button
                type="button"
                role="switch"
                aria-checked={isActive}
                onClick={() => onChange(!isActive)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
                    isActive ? "bg-emerald-500" : "bg-gray-600"
                }`}
            >
                <span
                    className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
                        isActive ? "translate-x-5" : "translate-x-0"
                    }`}
                />
            </button>

            <span className="text-sm text-white">
                {isActive ? "Active" : "Inactive"}
            </span>
        </div>
    );
}