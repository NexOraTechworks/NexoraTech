'use client';
import { useForm } from "react-hook-form";
import { PopUp } from "./PopUp";
import { useState } from "react";
import axios from "axios";


// Funtion which sends data(Username and Email) from the potential client
export function Contact(){
    const {register,handleSubmit,reset} = useForm()
    const [alert,setAlert]= useState(false)
    const sendData =async (data)=>{
        try{
            const response = await axios.post(
                process.env.NEXT_PUBLIC_API_URL,data)
                setAlert(true)
              setTimeout(()=>{
                setAlert(false)
              },1000)  
              console.log(data)
              reset()
        }catch (err){
            console.log(err)
        }
        // setAlert(true)
        //       setTimeout(()=>{
        //         setAlert(false)
        //       },1000) 
        //       reset()
    }
    return(
        <section id="contact"  className=" py-24  max-w-5xl mx-auto px-4  border-t border-white/5   " >
            <div className=" glass-bento  shadow  rounded-3xl font-mon p-8 " >
                <div className=" max-w-2xl mb-5 " >
                    <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-3 block " >
                    // Inquiries
                    </span>
                    <h2 className=" dark:text-white text-charcoal font-extrabold font-syne leading-12 text-5xl tracking-tight" >
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
                            <input type="text" placeholder=" John Doe " {...register("name")} className=" w-full text-sm placeholder-slate-600 dark:bg-onyx bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite  " />
                            
                        </div>
                        <div>
                        <label className=" block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400  ">
                                Email Address
                            </label>
                            <input type="email" {...register("emailId")}placeholder="John@gmail.com " className=" w-full text-sm placeholder-slate-600 dark:bg-onyx bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite" />
                        </div>
                    </div>
                    <div>
                        <label className=" block font-mon mb-1.5  uppercase text-slate-400 text-xs " >Scope / Requirements</label>
                        <textarea
                        required
                        rows="4"
                       {...register("scope")}
                        className="w-full px-4 py-3 border-2 dark:border-white/10 border-graphite placeholder-slate-600 text-slate-400 text-xs dark:bg-onyx bg-light rounded-xl"
                        placeholder="Brief outline of architecture needs, timeline, or position overview..."
                        />
                    </div>
                    <button type="submit" className=" dark:bg-white bg-charcoal rounded-4xl font-medium text-sm mt-4 px-8 py-3.5 dark:text-black text-light hover:bg-slate-300 transition-colors " >
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