'use client';
import { Copy ,Check} from "lucide-react";
import { PopUp } from "./PopUp";
import { useState } from "react";
export function CopyButton(){
    const [copy,setCopy] = useState(false)
    const copyToClipboard=async(e)=>{
       const text  = "nexoratech.co26@gmail.com"
       await navigator.clipboard.writeText(text)
       setCopy(true)
       setTimeout(()=>{
        setCopy(false)
       },1000) 

    }
    return(
        <div>

        <button 
        onClick={copyToClipboard}
        className=" flex justify-center 
        gap-2
        bg-white/5 backdrop-blur-2xl
        border border-white/10
        items-center 
        rounded-4xl
       
        hover:border-white/20
        px-6 py-3" >
            {copy?<Check color="#34D399" />:

         <Copy color="#34D399" />
            }
            nexoratech.co26@gmail.com
        </button>
        <PopUp show={copy} text={"Email Copied successfully"}/>

        </div>

    )
}