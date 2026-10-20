'use client'
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { LogOut, SquareChartGantt, UserRoundPlus ,House} from 'lucide-react'

export function AdminNav() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "A", href: "/admin/projects" },
    { name: "Create User", href: "/admin/users" },
  ];
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const logOut = async () => {
    try {
      setLoading(true)
      await axios.post("http://localhost:7070/logout", {}, { withCredentials: true })
      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.log(
        "Logout failed:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className=' w-full  max-w-80 flex justify-between   ' >

      <nav className=" p-6 z-50 min-h-screen flex-1  flex flex-col   w-fullborder-r dark:border-r-line border-graphite shadow dark:bg-[#051121] bg-light    items-left backdrop-blur-xl         " >
        <a href="h">
          <h1 className=" pb-4 font-jakarta font-bold dark:text-white text-charcoal   " >
            Nexora tech
          </h1>

        </a>
        <div className=" flex flex-col gap-4 items-left space-x-1 font-mon text-xs   " >
          
        <Link
            href="/admin"
            className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg transition-colors ${pathname === "/admin"
                ? " bg-linear-to-r from-[#0F1458] to-[#202D63] border border-[#373A8D]     "
                : "text-white dark:hover:bg-white/5 "
              }`}
          >
            <House size={16} />
            Dashboard
          </Link>

          <Link
            href="/admin/createProject"
            className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg transition-colors ${pathname === "/admin/createProject"
                ? " bg-linear-to-r from-[#0F1458] to-[#202D63] border border-[#373A8D]     "
                : "text-white dark:hover:bg-white/5 "
              }`}
          >
            <SquareChartGantt size={16} />
            Project Management
          </Link>

          <Link
            href="/admin/createUser"
            className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg transition-colors ${pathname === "/admin/createUser"
                ? " bg-linear-to-r from-[#0F1458] to-[#202D63] border border-[#373A8D]     "
                : "text-white dark:hover:bg-white/5   "
              }`}
          >
            <UserRoundPlus size={16} />
            User Management
          </Link>

        </div>
        <div className=' flex-1 flex flex-col justify-end items-end pb-5 ' >

          <button onClick={logOut} className=" flex items-center  gap-2  text-muted text-sm   dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl transition-colors " >
            <LogOut size={16} />
            {loading ? "Logging out.." : "Logout"}
          </button>

        </div>


      </nav>

    </div>
  )
}
