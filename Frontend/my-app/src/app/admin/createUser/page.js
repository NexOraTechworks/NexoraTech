
'use client'

import Dropdown from "@/app/adminComponents/Dropdown"
import axios from "axios"
import { useForm } from "react-hook-form"

export default function Page() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, }
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try{
            await axios.post(
                "http://localhost:7070/create-user",
                data, { withCredentials: true }
            );
            reset()
        }catch(err){
            console.log(err)
        }
        

    }

    return (
        <div>
            <div className=" mt-11 ">
                    <h1 className="font-mon mb-4">
                        Create New User
                    </h1>
                <div className="dark:bg-[#051121]  w-full max-w-3xl    rounded-lg px-6 py-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4">

                            {/* User Name */}
                            <div>
                                <label className="block tracking-tighter font-mon text-xs mb-2.5 text-white">
                                    User Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: {
                                            value: 2,
                                            message: "Username must have at least 2 characters"
                                        }   
                                        
                                    })}
                                    className="w-full text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                                />

                                {errors.user && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.user.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block  tracking-tighter font-mon text-xs mb-2.5 text-white">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="John@gmail.com"
                                    {...register("emailId", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Enter a valid email address"
                                        }
                                    })}
                                    className="w-full text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <select
                                {...register("role", {
                                    required: "Please select a user type"
                                })}
                                className="w-full rounded-lg border dark:bg-[#051121] border-white/10
  bg-[#12141A] px-4 py-3 text-gray-300 outline-none
  focus:border-emerald-400"
                            >
                                <option  className="" value="">Select user role</option>
                                <option value="user">User</option>
                                <option value="superadmin">Super admin</option>

                            </select>

                            {errors.userType && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.userType.message}
                                </p>
                            )}

                            {/* Password */}
                            <div>
                                <label className="block tracking-tighter font-mon text-xs mb-2.5 text-white">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    autoComplete="new-password"
                                    
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                        }
                                    })}
                                    className="w-full text-sm placeholder-slate-600 dark:bg-[#051121] bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#6A5AF7] rounded-lg font-medium text-xs md:text-sm mt-4 px-4 py-3  text-light hover:bg-violet-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>
                                {isSubmitting ? "Creating User..." : "Create User"}
                            </span>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
