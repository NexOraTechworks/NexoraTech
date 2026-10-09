'use client';
import { useEffect, useState } from "react";

export function TypingTexts(){
    const sentences = [
        "Building Scalable Web Apps",
        "Creating Modern Interfaces",
        "Deploying Cloud Solutions",
        "Turning Ideas Into Reality",
      ];

      const [text,setText]= useState("")
      const [index,setIndex]=useState(0)
      const [deleting,setDeleting]=useState(false)

    useEffect(()=>{
        const current = sentences[index];
        const timer = setTimeout(()=>{
            if(!deleting){
                setText(current.slice(0,text.length+1));
                if(current===text){

                    setDeleting(true)
                }
            }else{
                if(text.length>0){

                    setText(current.slice(0,text.length-1));
                }else{
                    setIndex((index+1)%sentences.length)
                    setDeleting(false)
                }

                // if(text === ""){
                //     setDeleting(false);
                //     setIndex((index+1)%sentences.length)
                // }
            }
        },text === current?1000:deleting?50:100)
        return ()=>clearTimeout(timer)
    },[text,deleting,index])
    
    return(
        <span className=" text-emerald-400 uppercase text-xl "> 
            {text}
        </span>
    )
}