'use client';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../adminComponents/ErrorMessage";
import { CloudUpload } from "lucide-react";

export default function page() {
    const { register, handleSubmit, formState: { errors, }, reset } = useForm()
    const submitProject = (data) => {
        console.log(data)
        reset()
    }
    return (
        <section className=" mt-11 ">
            <h2 className=" mb-3 font-mon ">
                Add New Project
            </h2>
            <div className="  " >
                <form onSubmit={handleSubmit(submitProject)}>
                    <div className=" flex gap-3.5 ">
                        <div className="dark:bg-[#051121] w-full max-w-3xl   rounded-lg py-2.5 px-4">
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
                                className=" w-full mb-3  text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
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
                                className="w-full mb-3 resize-none px-4 py-3 border-2 dark:border-white/10 border-graphite placeholder-slate-600 text-slate-400 text-xs dark:bg-[#051121] bg-light rounded-xl"
                                placeholder="Brief outline of architecture needs, timeline, or position overview..."
                            />
                            <div className="min-h-5">
                                {errors.title && <ErrorMessage />}
                            </div>


                            <label className="block font-mon mb-3  text-white text-xs">
                                Addtional details
                            </label>

                            <textarea
                                rows={4}
                                spellCheck={true}
                                {...register("Details", {
                                    required: "this  is required"
                                })}
                                className="w-full resize-none px-4 py-3 border-2 dark:border-white/10 border-graphite placeholder-slate-600 text-slate-400 text-xs dark:bg-[#051121] bg-light rounded-xl mb-3"
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
                                className=" w-full mb-3  text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                            />
                            <div className="min-h-5">
                                {errors.title && <ErrorMessage />}
                            </div>


                        </div>
                        <div className="dark:bg-[#051121] w-full max-w-3xl flex flex-col gap-4   rounded-lg py-2.5 px-4">
                            <label className="flex h-40  cursor-pointer flex-col items-center justify-center rounded-lg border dark:border-white/10 bg-[#051121] text-gray-400 hover:bg-[#0F1458]/30">
                                <CloudUpload size={36} />
                                <span className="text-sm">Upload Image</span>
                                <span className="mt-1 text-xs">PNG, JPG, WEBP</span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </label>
                            
                            <div>

                            <label className="block  tracking-tighter font-mon text-xs mb-2.5 text-white">
                                Project URl
                            </label>

                            <input
                                type="text"
                                placeholder="Javascript,React,Mongo,etc.."
                                {...register("url", {
                                    required: "This is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must have at least 2 characters"
                                    }
                                })}
                                className=" w-full mb-3  text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                                />
                            <div className="min-h-5">
                                {errors.title && <ErrorMessage />}
                            </div>
                                </div>
                                <div className=" flex-1 mb-2.5 flex justify-end items-end ">
                            <button
                                type="submit"
                                // disabled={isSubmitting}
                                className="bg-[#6A5AF7]  rounded-lg font-medium text-xs md:text-sm mt-4 px-6 py-3 text-light hover:bg-violet-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                <span>
                                    {/* {isSubmitting
                                ? "Dispatching..."
                                : "Dispatch Transmission"} */}
                                    Submit
                                </span>
                            </button>
                                </div>
                                
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
