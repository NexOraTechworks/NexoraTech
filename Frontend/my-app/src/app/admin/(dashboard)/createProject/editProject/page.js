
'use client';
import { Trash, Pencil } from "lucide-react";
import { useProjectUsers } from "@/app/adminComponents/ProjectUserContext";
import axios from "axios";

export default function ProjectsPage() {
    const {projects,projectsLoading,projectsError,deleteProjects} = useProjectUsers()
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
                                <th
                                    scope="col"
                                    className="w-[28%] whitespace-nowrap px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                                >
                                    Project
                                </th>

                                <th
                                    scope="col"
                                    className="w-[42%] px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                                >
                                    Info
                                </th>

                                <th
                                    scope="col"
                                    className="w-[30%] whitespace-nowrap px-3 py-4 text-center text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-[#051121]">
                            {projectsLoading ? (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-5 py-8 text-center text-sm text-gray-400"
                                    >
                                        Loading projects...
                                    </td>
                                </tr>
                            ) : projectsError ? (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-5 py-8 text-center text-sm text-red-400"
                                    >
                                        {projectsError}
                                    </td>
                                </tr>
                            ) : projects.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-5 py-8 text-center text-sm text-gray-400"
                                    >
                                        Projects not added yet.
                                    </td>
                                </tr>
                            ) : (
                                projects.map((project) => (
                                    <tr
                                        key={project.id}
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
                                                {/* <button
                                                    type="button"
                                                    className="flex items-center gap-1.5 text-xs text-[#A78BFA] transition hover:text-white"
                                                    aria-label={`Update ${project.project_name}`}
                                                >
                                                    Update
                                                    <Pencil size={15} />
                                                </button> */}

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-1.5 text-xs text-red-400 transition hover:text-red-300"
                                                    aria-label={`Delete ${project.project_name}`}
                                                    onClick={()=>{deleteProjects(project.id)}}
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
        </div>
    );
}
