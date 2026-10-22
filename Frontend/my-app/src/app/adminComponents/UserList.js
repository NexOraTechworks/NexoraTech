
import { SquarePen } from "lucide-react";

export default function UserList() {
  return (
    <div>
      <div className="bg-[#051121] max-h-screen w-full max-w-3xl mt-4 rounded-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <h2>Users</h2>

          <button className="flex items-center gap-1.5 transition-all hover:scale-110 hover:text-violet-300 text-[#6A5AF7] text-xs">
            Edit
            <span>
              <SquarePen size={16} />
            </span>
          </button>
        </div>

       
<div className="w-full max-w-175 overflow-x-auto rounded-lg">
  <table className="w-full min-w-[600px] text-left">
    <thead className="border-b border-[#1A2A48]">
      <tr>
        <th className="whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
          Name
        </th>
        <th className="whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
          Email
        </th>
        <th className="whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
          Role
        </th>
        <th className="whitespace-nowrap px-3 py-4 text-xs font-medium uppercase tracking-wider text-[#8FA9D0] sm:px-5">
          Status
        </th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b border-[#1A2A48]/60">
        <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
          Akash
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
          athengumparampil@gmail.com
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
          React Developer
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-xs font-medium tracking-wider sm:px-5">
          <span className="inline-flex rounded-full text-emerald-400">
            Active
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}
