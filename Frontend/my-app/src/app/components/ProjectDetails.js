
export function ProjectDetails({ project, onClose, isOpen }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-onyx-950/80 backdrop-blur-md transition-opacity duration-700 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-100 h-screen w-full max-w-xl dark:bg-onyx bg-light p-10 transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {project && (
          <div className="flex h-full flex-col">
            <div>
              <h2 className="mb-4 text-2xl font-syne dark:text-white text-charcoal tracking-tight">
                {project.project_name}
              </h2>

              <p className="mb-10 text-sm font-light leading-relaxed text-slate-400">
                {project.additional_details?.description || ""}
              </p>
            </div>

            <div className="rounded-xl dark:bg-black bg-light p-5">
              <ul className="px-5">
                {(project.tech_stack || []).map((data, index) => (
                  <li
                    key={index}
                    className="list-disc py-0.5 text-slate-400"
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 items-end">
              <button
                onClick={onClose}
                className="rounded-2xl bg-white/5 px-6 py-2 text-sm font-mon hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
