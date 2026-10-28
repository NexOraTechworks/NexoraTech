'use client'
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { LogOut,X, SquareChartGantt, UserRoundPlus, House } from 'lucide-react'
import Logo from '../components/Logo'

export function AdminNav({toggle,toggleNav}) {
  const pathname = usePathname();
 console.log(toggle)


  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "A", href: "/admin/projects" },
    { name: "Create User", href: "/admin/users" },
  ];
 
  

  return (
    <div
  className={`fixed inset-y-0 left-0 z-50 w-full max-w-80
    transform transition-transform duration-300 ease-in-out
    ${toggle ? "translate-x-0" : "-translate-x-full"}
    md:static md:flex md:translate-x-0 md:transform-none
    md:w-full md:justify-between`}
>

      <nav className=" p-6 z-50 min-h-screen overflow-y-hidden flex-1 flex flex-col   w-fullborder-r border-r-line border-graphite shadow bg-[#051121] items-left backdrop-blur-xl" >
        <div className=' mb-3 flex justify-between items-center  '>
          <div className=' flex items-center gap-2'>
         <Logo/>
          <h1 className="  font-jakarta font-bold text-white   " >
            Nexora tech
          </h1>
          </div>
          <div className=' md:hidden  ' onClick={toggleNav}>
          <X size={16} />
          </div>
        </div>
        <div className=" flex flex-col gap-4 items-left space-x-1 font-mon text-xs   " >


<Link
  href="/admin"
  className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg border
    transition-colors duration-200 ease-in-out
    ${
      pathname === "/admin"
        ? "bg-linear-to-r from-[#0F1458] to-[#202D63] border-[#373A8D] text-white"
        : "bg-transparent border-transparent text-white hover:bg-white/5"
    }`}
>
  <House size={16} />
  Dashboard
</Link>

<Link
  href="/admin/createProject"
  className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg border
    transition-colors duration-200 ease-in-out
    ${
      pathname === "/admin/createProject"
        ? "bg-linear-to-r from-[#0F1458] to-[#202D63] border-[#373A8D] text-white"
        : "bg-transparent border-transparent text-white hover:bg-white/5"
    }`}
>
  <SquareChartGantt size={16} />
  Project Management
</Link>

<Link
  href="/admin/createUser"
  className={`flex items-center gap-1.5 py-4 px-3.5 rounded-lg border
    transition-colors duration-100 ease-in-out
    ${
      pathname === "/admin/createUser"
        ? "bg-linear-to-r from-[#0F1458] to-[#202D63] border-[#373A8D] text-white"
        : "bg-transparent border-transparent text-white hover:bg-white/5"
    }`}
>
  <UserRoundPlus size={16} />
  User Management
</Link>

          

        </div>
        <div className=' flex-1 flex flex-col justify-end items-end pb-5 ' >

       

        </div>


      </nav>

    </div>
  )
}
