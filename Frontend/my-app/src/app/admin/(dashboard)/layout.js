'use client';
import { useState } from "react";
import { AdminNav } from "../../adminComponents/AdminNav";
import { Panel } from "../../adminComponents/Panel";

export default function AdminLayout({ children }) {
 const [isOpen,setOpen] = useState(false)
 const toggleNav=()=>{
  setOpen((prev)=>!prev)
 }
  return (
    <div className="relative flex min-h-screen gap-8 bg-[#020B18] overflow-y-auto">
      <AdminNav toggleNav={toggleNav} toggle={isOpen} />
      <main className="relative z-10 max-h-screen overflow-y-scroll min-w-0 flex-1 p-8">
        <Panel  toggleNav={toggleNav} />
        {children}
      </main>
    </div>
  );
}