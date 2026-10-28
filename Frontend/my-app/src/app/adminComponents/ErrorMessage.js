import React from 'react'
import { AlertCircle } from 'lucide-react'
export function ErrorMessage () {
  return (
    <div
    role="status"
    aria-live="polite"
    className={`flex items-start gap-2 mb-2 rounded-xl border p-2 text-xs leading-5 ${
   
      "border-red-400/20 bg-red-400/6 text-red-300"
      
    }`}
  >
  
      <AlertCircle
        size={16}
        className="mt-0.5 shrink-0"
      />


    <span>This field is required</span>
  </div>
  )
}
