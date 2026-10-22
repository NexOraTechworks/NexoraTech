'use client';

import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../adminComponents/ErrorMessage";
import { CloudUpload } from "lucide-react";
import { useState } from "react";

export default function page() {
    const { register, handleSubmit, formState: { errors, }, reset } = useForm(
        {
            defaultValues: { title: "", url: "", data: "", details: "", image: "", tech: "" }
        }
    )
    const [imagePreview, setImagePreview] = useState("");   
    const [errorMessage, setErrorMessage] = useState("")

    const submitProject = (data) => {
        // if(data.)
        console.log(data)
        setImagePreview("");
        reset()
    }
    return (
        <section className=" mt-11 ">
            <h2 className=" mb-4 text-3xl ">
                Add New Project
            </h2>
            <div className="  " >
                <form onSubmit={handleSubmit(submitProject)}>
                    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-3.5 ">
                        <div className="bg-[#051121] w-full max-w-3xl   rounded-lg py-2.5 px-4">
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
                                Addtional details
                            </label>

                            <textarea
                                rows={4}
                                spellCheck={true}
                                {...register("details", {
                                    required: "this  is required"
                                })}
                                className="w-full resize-none px-4 py-3 border-2 border-white/10  placeholder-slate-600 text-slate-400 text-xs bg-[#051121] rounded-xl mb-3"
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


                        </div>
                        <div className="bg-[#051121] w-full max-w-3xl flex flex-col gap-4   rounded-lg py-2.5 px-4">
                        <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-white/10 bg-[#051121] text-gray-400 hover:bg-[#0F1458]/30 overflow-hidden">

{imagePreview ? (
    <div className="flex flex-col items-center gap-2">
        <img
            src={imagePreview}
            alt="Project preview"
            className="h-24 w-32 object-cover rounded-md"
        />

        <span className="text-xs text-emerald-400">
            Image selected ✓
        </span>

        <span className="text-xs text-gray-400">
            Click to change image
        </span>
    </div>
) : (
    <>
        <CloudUpload size={36} />

        <span className="text-sm">
            Upload Image
        </span>

        <span className="mt-1 text-xs">
            PNG, JPG, WEBP (Max 2 MB)
        </span>
    </>
)}

<input
    type="file"
    accept="image/png, image/jpeg, image/webp"
    className="hidden"
    {...register("image", {
        required: "Please upload a project image",

        validate: {
            fileType: (files) => {
                const file = files?.[0];

                if (!file) return "Please upload an image";

                return (
                    ["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
                    "Only PNG, JPG, and WEBP images are allowed"
                );
            },

            fileSize: (files) => {
                const file = files?.[0];

                return (
                    !file || file.size <= 2 * 1024 * 1024 ||
                    "Image must be smaller than 2 MB"
                );
            }
        },

        onChange: (event) => {
            const file = event.target.files?.[0];

            if (
                file &&
                ["image/png", "image/jpeg", "image/webp"].includes(file.type) &&
                file.size <= 2 * 1024 * 1024
            ) {
                const reader = new FileReader();

                reader.onload = () => {
                    setImagePreview(reader.result);
                };

                reader.readAsDataURL(file);
            } else {
                setImagePreview("");
            }
        }
    })}
/>
</label>

<div className="min-h-5">
{errors.image && (
    <ErrorMessage message={errors.image.message} />
)}
</div>

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
                                    className=" w-full mb-3  text-sm placeholder-slate-600 bg-[#051121]  rounded-xl py-3 px-4 border-2 border-white/10 "
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
