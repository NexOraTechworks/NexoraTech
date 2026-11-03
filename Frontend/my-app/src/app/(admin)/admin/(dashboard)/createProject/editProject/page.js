'use client';

import { use, useState } from "react";
import { Trash, Pencil, AlertTriangle, X } from "lucide-react";
import { useProjectUsers } from "@/app/adminComponents/ProjectUserContext";

export default function ProjectsPage() {
    const {
        projects,
        projectsLoading,
        projectsError,
        deleteProjects
    } = useProjectUsers();

    const [showDelete, setShowDelete] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDeleteClick = (project) => {
        setSelectedProject(project);
        setShowDelete(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedProject) return;

        try {
            setDeleting(true);

            await deleteProjects(
                selectedProject.id ?? selectedProject._id
            );

            setShowDelete(false);
            setSelectedProject(null);

        } catch (error) {
            console.error("Failed to delete project:", error);
        } finally {
            setDeleting(false);
        }
    };

    const handleCancelDelete = () => {
        if (deleting) return;

        setShowDelete(false);
        setSelectedProject(null);
    };

    return (
        <div className="mt-20">
            <div className="mt-4 w-full max-w-3xl rounded-lg bg-[#071528] px-6 py-4">

                <div className="flex items-center justify-between">
                    <h2 className="font-medium text-white">
                        Projects
                    </h2>
                </div>

                <div className="mt-4 w-full overflow-x-auto rounded-lg">
                    <table className="w-full min-w-150 table-fixed text-left">

                        <thead className="border-b border-[#1A2A48]">
                            <tr>
                                <th className="w-[28%] whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
                                    Project
                                </th>

                                <th className="w-[42%] px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
                                    Info
                                </th>

                                <th className="w-[30%] whitespace-nowrap px-3 py-4 text-center text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-[#051121]">

                            {projectsLoading ? (
                                <tr>
                                    <td colSpan={3} className="px-5 py-8 text-center text-sm text-gray-400">
                                        Loading projects...
                                    </td>
                                </tr>
                            ) : projectsError ? (
                                <tr>
                                    <td colSpan={3} className="px-5 py-8 text-center text-sm text-red-400">
                                        {projectsError}
                                    </td>
                                </tr>
                            ) : projects.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="px-5 py-8 text-center text-sm text-gray-400">
                                        Projects not added yet.
                                    </td>
                                </tr>
                            ) : (
                                projects.map((project) => (
                                    <tr
                                        key={project.id ?? project._id}
                                        className="border-b border-[#1A2A48]/60 text-gray-300"
                                    >
                                        <td className="wrap-break-word px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
                                            {project.project_name}
                                        </td>

                                        <td className="wrap-break-word px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
                                            {project.short_description}
                                        </td>

                                        <td className="px-3 py-4 sm:px-5">
                                            <div className="flex items-center justify-center gap-4">

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-1.5 text-xs text-red-400 transition hover:text-red-300"
                                                    aria-label={`Delete ${project.project_name}`}
                                                    onClick={() => handleDeleteClick(project)}
                                                >
                                                    Delete
                                                    <Trash size={15} />
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}

            {showDelete && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={handleCancelDelete}
                >
                    <div
                        className="w-full max-w-md rounded-xl border border-[#263854] bg-[#071528] p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex items-center justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                                <AlertTriangle size={22} />
                            </div>

                            <button
                                type="button"
                                onClick={handleCancelDelete}
                                disabled={deleting}
                                className="text-gray-400 transition hover:text-white disabled:opacity-50"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <h2 className="mt-5 text-lg font-semibold text-white">
                            Delete Project?
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Are you sure you want to delete{" "}
                            <span className="font-medium text-white">
                                {selectedProject?.project_name}
                            </span>
                            ? This action cannot be undone.
                        </p>

                        <div className="mt-7 flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={handleCancelDelete}
                                disabled={deleting}
                                className="rounded-lg border border-[#263854] px-4 py-2 text-sm text-gray-300 transition hover:bg-[#13243A] disabled:opacity-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={handleConfirmDelete}
                                disabled={deleting}
                                className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <Trash size={15} />
                                {deleting ? "Deleting..." : "Yes, Delete"}
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
