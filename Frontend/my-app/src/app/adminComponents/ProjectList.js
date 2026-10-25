import { useEffect, useState } from "react";
import { SquarePen } from "lucide-react";
import axios from "axios";
import { useProjectUsers } from "./ProjectUserContext";

export default function ProjectList() {
    const {projects,projectsLoading,projectsError} = useProjectUsers()
    return (
        <div className="mt-4 w-full max-w-3xl rounded-lg bg-[#071528]  px-6 py-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-white">Projects</h2>

                {/* <button
                    type="button"
                    onClick={() => {
                        // Connect your edit functionality here.
                    }}
                    className="flex items-center gap-1.5 text-xs text-[#6A5AF7] transition-colors hover:text-violet-300"
                >
                    Edit
                    <SquarePen size={16} />
                </button> */}
            </div>
            <div className="mt-4 w-full overflow-x-auto rounded-lg">
                <table className="w-full min-w-150 text-left">
                    <thead className="border-b border-[#1A2A48]">
                        <tr>
                            <th
                                scope="col"
                                className="w-1/2 whitespace-nowrap px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                            >
                                Project
                            </th>

                            <th
                                scope="col"
                                className="w-1/2 whitespace-nowrap px-3 py-4 text-right text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                            >
                                Tech stack
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-[#051121]">
                        {projectsLoading ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-gray-400"
                                >
                                    Loading users...
                                </td>
                            </tr>
                        ) : projectsError ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-red-400"
                                >
                                    {projectsError}
                                </td>
                            </tr>
                        ) : projects.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-gray-400"
                                >
                                    Projects not added yet.
                                </td>
                            </tr>
                        ) : (
                            projects.map((project) => (
                                <tr
                                    key={project.id}
                                    className="border-b border-[#1A2A48]/60"
                                >
                                    <td className="w-1/2 px-3 py-4 text-left text-xs font-medium tracking-wider sm:px-5">
                                        {project.project_name}
                                    </td>

                                    <td className="w-1/2 px-3 py-4 text-right text-xs font-medium tracking-wider capitalize sm:px-5">
                                        {project.short_description}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}