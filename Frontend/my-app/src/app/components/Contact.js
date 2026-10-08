'use client';
import { useForm } from "react-hook-form";
import { PopUp } from "./PopUp";
import { useState } from "react";


// Funtion which sends data(Username and Email) from the potential client
export function Contact(){
    const {register,handleSubmit,reset} = useForm()
    const [alert,setAlert]= useState(false)
    const sendData =(data)=>{
        setAlert(true)
      setTimeout(()=>{
        setAlert(false)
      },1000)  
      console.log(data)
      reset()
     
    }
    return(
        <section id="contact"  className=" py-24  max-w-5xl mx-auto px-4  border-t border-white/5   " >
            <div className=" glass-bento  rounded-3xl font-mon p-8 " >
                <div className=" max-w-2xl mb-5 " >
                    <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-3 block " >
                    // Inquiries
                    </span>
                    <h2 className=" font-extrabold font-syne leading-12 text-5xl tracking-tight" >
                    Initiate
                     Collaboration
                    </h2>
                </div>
                <form onSubmit={handleSubmit(sendData)} >

                    <div className=" grid grid-cols-2 gap-4 mb-4 " >
                        <div className="">
                            <label className=" block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400  ">
                                Your Name
                            </label>
                            <input type="text" placeholder=" John Doe " {...register("name")} className=" w-full text-sm placeholder-slate-600 bg-onyx rounded-xl py-3 px-4 border border-white/10 " />
                            
                        </div>
                        <div>
                        <label className=" block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400  ">
                                Email Address
                            </label>
                            <input type="email" {...register("email")}placeholder="John@gmail.com " className=" w-full text-sm placeholder-slate-600 bg-onyx rounded-xl py-3 px-4 border border-white/10 " />
                        </div>
                    </div>
                    <div>
                        <label className=" block font-mon mb-1.5  uppercase text-slate-400 text-xs " >Scope / Requirements</label>
                        <textarea
                        required
                        rows="4"
                       {...register("text")}
                        className="w-full px-4 py-3 border border-white/10 placeholder-slate-600 text-slate-400 text-xs bg-onyx rounded-xl"
                        placeholder="Brief outline of architecture needs, timeline, or position overview..."
                        />
                    </div>
                    <button type="submit" className=" bg-white rounded-4xl font-medium text-sm mt-4 px-8 py-3.5 text-black hover:bg-slate-300 transition-colors " >
                        <span>
                            Dispatch Transmission
                        </span >
                    </button>
                    <PopUp show={alert} text={"Sent Successfully!"} />
                </form>

            </div>

        </section>
    )
}