import { SquarePen } from "lucide-react";
export default function UserList() {
    return (
        <div>
            <div className=" dark:bg-[#051121] max-h-screen  w-full max-w-3xl  mt-4    rounded-lg px-6 py-4">
                <div className=" flex items-center justify-between">
                    <h2>Users</h2>
                    <button className=" flex items-center gap-1.5 transition-all hover:scale-110 hover:text-violet-300 text-[#6A5AF7] text-xs">
                        Edit
                        <span><SquarePen size={16} /></span>
                    </button>
                </div>
                <table className="w-full min-w-175 text-left">
                    <thead className="border-b border-[#1A2A48] ">
                        <tr >
                            <th
                                className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0]">
                                Name</th>
                            <th
                                className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0]">
                                Email</th> <th
                                    className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0]">
                                Role</th> <th
                                    className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0]">
                                Status</th>
                        </tr>
                    </thead>
                    <tbody className="" >
                        <tr className="px-7">
                            <td className="px-5 py-4 text-xs font-medium  tracking-wider ">
                                Akash</td>
                            <td className="px-5 py-4 text-xs font-medium  tracking-wider ">
                                athengumparampil@gmail.com</td>
                            <td className="px-5 py-4 text-xs font-medium  tracking-wider ">
                                React Developer</td>
                            <td className="px-5 py-4 text-xs font-medium inline-flex rounded-full text-emerald-400 tracking-wider ">
                                Active</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
