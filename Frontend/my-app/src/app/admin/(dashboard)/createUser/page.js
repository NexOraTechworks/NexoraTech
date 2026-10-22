
"use client";

import Dropdown from "@/app/adminComponents/Dropdown";
import StatusToggle from "@/app/adminComponents/StatusToggle";
import { PopUp } from "@/app/components/PopUp";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Page() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        setError,
        clearErrors,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            username: "",
            emailId: "",
            role: "",
            password: "",
            status: false,
        },
    });
    const [popUp,setPopUp] = useState(false)
    const status = watch("status");

    const onSubmit = async (data) => {
        clearErrors();

        try {
            await axios.post(
                process.env.NEXT_PUBLIC_USERS_API_URL,
                data,
                { withCredentials: true }
            );
            setPopUp(true)
            setTimeout(()=>{
              setPopUp(false)  
            },2000)
            reset();
        }catch (err) {
            const message =
                err.response?.data?.message ||
                "Failed to create user. Please try again.";

            if (message.toLowerCase().includes("password")) {
                setError("password", {
                    type: "server",
                    message,
                });
            } else if (message.toLowerCase().includes("username")) {
                setError("username", {
                    type: "server",
                    message,
                });
            } else if (message.toLowerCase().includes("email")) {
                setError("emailId", {
                    type: "server",
                    message,
                });
            } else {
                setError("root.serverError", {
                    type: "server",
                    message,
                });
            }
        }
    };

    return (
        <div className="mt-11   ">
            <h1 className="text-3xl mb-4">Create New User</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* User Details Form */}
                    <div className="grid w-full max-w-3xl gap-4 rounded-lg bg-[#051121] px-6 py-4">

                        {/* Username */}
                        <div>
                            <label className="mb-2.5 block font-mon text-xs tracking-tighter text-white">
                                User Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("username", {
                                    required: "Username is required",
                                    minLength: {
                                        value: 2,
                                        message: "Username must have at least 2 characters",
                                    },
                                })}
                                className="w-full rounded-xl border-2 px-4 py-3 text-sm placeholder-slate-600 border-white/10 bg-[#051121]"
                            />

                            {errors.username && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2.5 block font-mon text-xs tracking-tighter text-white">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="John@gmail.com"
                                {...register("emailId", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                className="w-full rounded-xl border-2 px-4 py-3 text-sm placeholder-slate-600 border-white/10 bg-[#051121]"
                            />

                            {errors.emailId && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.emailId.message}
                                </p>
                            )}
                        </div>

                        {/* Role */}
                        <div>
                            <label className="mb-2.5 block font-mon text-xs text-white">
                                User Role
                            </label>

                            <select
                                {...register("role", {
                                    required: "Please select a user role",
                                })}
                                className="w-full rounded-lg border border-white/10 bg-[#051121]  px-4 py-3 text-gray-300 outline-none focus:border-slate-400"
                            >
                                <option value="">Select user role</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super admin</option>
                                <option value="viewer">Viewer</option>
                            </select>

                            {errors.role && (
                                <p className="mt-1 text-sm text-red-400">
                                    {errors.role.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2.5 block font-mon text-xs tracking-tighter text-white">
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
                                        message: "Password must have at least 8 characters",
                                    },
                                })}
                                className="w-full rounded-xl border-2  px-4 py-3 text-sm placeholder-slate-600 border-white/10 bg-[#051121]"
                            />

                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* General Backend Error */}
                        {errors.root?.serverError && (
                            <p className="text-sm text-red-400">
                                {errors.root.serverError.message}
                            </p>
                        )}
                    </div>

                    {/* Account Status */}
                    <div className="w-full flex flex-col max-w-3xl rounded-lg bg-[#051121] px-6 py-4">
                        <h2 className="font-medium text-white">
                            Account Status
                        </h2>

                        <StatusToggle
                            status={status}
                            onChange={(value) =>
                                setValue("status", value, {
                                    shouldDirty: true,
                                })
                            }
                        />

                        <div className="flex-1 flex justify-end items-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 rounded-lg bg-[#6A5AF7] px-4 py-3 text-xs font-medium text-light transition-colors hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            >
                                {isSubmitting
                                    ? "Creating User..."
                                    : "Create User"}
                            </button>
                        </div>
                    </div>
                </div>
                    <PopUp show={popUp} text={"User has been created successfully"} />        
            </form>
        </div>
    );
}
