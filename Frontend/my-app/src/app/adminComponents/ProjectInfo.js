'use client';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

export function ProjectInfo() {
    const { register, handleSubmit, formState: { errors, }, reset } = useForm()
    const submitProject = (data) => {
        console.log(data)
        reset()
    }
    return (
        <section className=" ">
                        <h2 className=" mb-3 font-mon ">
                          Add New Project 
                        </h2>
            <div className=" bg-[#051121] w-full max-w-3xl   rounded-lg py-2.5 px-4 " >
                <form onSubmit={handleSubmit(submitProject)}>

                    <div>
                        <label htmlFor="title" className="block  tracking-tighter font-mon text-xs mb-3 text-white">
                            Project title
                        </label>

                        <input
                            id="title"
                            type="text"
                            placeholder="My-web-App"
                            {...register("title", {
                                required: "Title is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must have at least 2 characters"
                                }
                            })}
                            className=" w-full mb-3  text-sm placeholder-slate-600 bg-[#051121] rounded-xl py-3 px-4 border-2 border-white/10 "
                        />
                        <div className="min-h-5">
                            {errors.title && <ErrorMessage />}
                        </div>

                        <label className="block font-mon mb-3  text-white text-xs">
                            Project Short description
                        </label>

                        <textarea
                            rows={4}
                            spellCheck={true}
                            {...register("data", {
                                required: "This is required"
                            })}
                            className="w-full mb-3 resize-none px-4 py-3 border-2 border-white/10  placeholder-slate-600 text-slate-400 text-xs bg-[#051121]  rounded-xl"
                            placeholder="Brief outline of architecture needs, timeline, or position overview..."
                        />
                        <div className="min-h-5">
                            {errors.title && <ErrorMessage />}
                        </div>


                        <label className="block font-mon mb-3  text-white text-xs">
                            Project Long description
                        </label>

                        <textarea
                            rows={4}
                            spellCheck={true}
                            {...register("Details", {
                                required: "this  is required"
                            })}
                            className="w-full resize-none px-4 py-3 border-2 border-white/10  placeholder-slate-600 text-slate-400 text-xs bg-[#051121]  rounded-xl mb-3"
                            placeholder="Brief outline of architecture needs, timeline, or position overview..."
                        />
                        <div className="min-h-5">
                            {errors.title && <ErrorMessage />}
                        </div>



                        <label className="block  tracking-tighter font-mon text-xs mb-3 text-white">
                            Technologies
                        </label>

                        <input
                            type="text"
                            placeholder="Javascript,React,Mongo,etc.."
                            {...register("tech", {
                                required: "This is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must have at least 2 characters"
                                }
                            })}
                            className=" w-full mb-3  text-sm placeholder-slate-600 bg-[#051121]  rounded-xl py-3 px-4 border-2 border-white/10 "
                        />
                        <div className="min-h-5">
                            {errors.title && <ErrorMessage />}
                        </div>

                        <button
                            type="submit"
                            // disabled={isSubmitting}
                            className="bg-[#6A5AF7]  rounded-lg font-medium text-xs md:text-sm mt-4 px-6 py-3 text-light hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>
                                {/* {isSubmitting
                                ? "Dispatching..."
                                : "Dispatch Transmission"} */}
                                Submit
                            </span>
                        </button>

                    </div>
                </form>
            </div>
        </section>
    )
}
