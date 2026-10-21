'use client'

import { useState } from 'react'
import { ChevronDown, User,} from 'lucide-react'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-52">
      {/* Dropdown trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between
        rounded-lg border border-white/10 bg-white/5
        px-4 py-3 text-sm text-gray-300
        transition hover:bg-white/10"
      >
        <span>Admin</span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-200
          ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-full
          overflow-hidden rounded-lg border border-white/10
          bg-surface p-1 shadow-xl">

          <button className="flex w-full items-center gap-3
            rounded-md px-3 py-2.5 text-sm text-gray-300
            hover:bg-white/5 hover:text-emerald-400">
            <User size={16} />
            Super Admin
          </button>

          <button className="flex w-full items-center gap-3
            rounded-md px-3 py-2.5 text-sm text-gray-300
            hover:bg-white/5 hover:text-emerald-400">
            <User size={16} />
            User
          </button>

          <div className="my-1 border-t border-white/10" />

         
        </div>
      )}
    </div>
  )
}