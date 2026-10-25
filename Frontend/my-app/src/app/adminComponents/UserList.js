
'use client';

import { useProjectUsers } from "./ProjectUserContext";

export default function UserList() {
    const {
        user,
        userLoading,
        users,
        usersLoading,
        usersError,
    } = useProjectUsers();

    // Wait until the logged-in user's role is known
    if (userLoading) {
        return (
            <div className="mt-4 w-full max-w-3xl rounded-lg bg-[#071528] px-6 py-8 text-center text-sm text-gray-400">
                Checking permissions...
            </div>
        );
    }

    // Only superadmins can view the users list
    if (user?.role !== 'superadmin') {
        return null;
    }

    return (
        <div className="mt-4 w-full max-w-3xl rounded-lg bg-[#071528] px-6 py-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-white">Users</h2>
            </div>

            {/* Table */}
            <div className="mt-4 w-full overflow-x-auto rounded-lg">
                <table className="w-full min-w-150 text-left">
                    <thead className="border-b border-[#1A2A48]">
                        <tr>
                            {['Name', 'Email', 'Role', 'Status'].map(
                                (heading) => (
                                    <th
                                        key={heading}
                                        scope="col"
                                        className="whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5"
                                    >
                                        {heading}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody className="bg-[#051121]">
                        {usersLoading ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-gray-400"
                                >
                                    Loading users...
                                </td>
                            </tr>
                        ) : usersError ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-red-400"
                                >
                                    {usersError}
                                </td>
                            </tr>
                        ) : users.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="px-5 py-8 text-center text-sm text-gray-400"
                                >
                                    No users found.
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr
                                    key={user.id ?? user._id ?? user.emailId}
                                    className="border-b border-[#1A2A48]/60"
                                >
                                    <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider text-white sm:px-5">
                                        {user.username}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider text-white sm:px-5">
                                        {user.emailId}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider text-white capitalize sm:px-5">
                                        {user.role}
                                    </td>

                                    <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
                                        <span
                                            className={
                                                user.status === true ||
                                                user.status === 1 ||
                                                user.status === 'active'
                                                    ? 'text-emerald-400'
                                                    : 'text-red-400'
                                            }
                                        >
                                            {user.status === true ||
                                            user.status === 1 ||
                                            user.status === 'active'
                                                ? 'Active'
                                                : 'Inactive'}
                                        </span>
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
