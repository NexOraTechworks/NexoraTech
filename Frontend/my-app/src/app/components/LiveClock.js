'use client';

import { useEffect, useState } from "react";


export function LiveClock (){
    const [ time,setTime] = useState('');
    useEffect(()=>{
            const updateClock = ()=>{
                const now = new Date();
                const formattedtime =  now.toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  });
            
                  setTime(formattedtime)
                }
                updateClock();
                const interval = setInterval(updateClock,1000)
                return ()=>clearInterval(interval)
    },[])
  return(
    <div className="px-3 py-1 rounded-full glass-bento text-xs font-mono text-slate-400 flex items-center space-x-2 mb-8">
        <span>IST:</span>
<span id="live-ist-clock" className="text-white font-medium">
      {time}
    </span>
    </div>
  )  
}