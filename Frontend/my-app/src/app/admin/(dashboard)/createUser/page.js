"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SquarePen } from "lucide-react";
import StatusToggle from "@/app/adminComponents/StatusToggle";
import { PopUp } from "@/app/components/PopUp";

const DEFAULT_VALUES = {
    username: "",
    emailId: "",
    role: "",
    password: "",
    status: false,
};

const VALID_ROLES = ["admin", "superadmin", "viewer"];

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
        defaultValues: DEFAULT_VALUES,
        mode: "onBlur",
    });

    const [popUp, setPopUp] = useState({
        show: false,
        text: "",
    });

    const status = watch("status");

    // Automatically dismiss the popup and clean up the timer.
    useEffect(() => {
        if (!popUp.show) return;

        const timeoutId = setTimeout(() => {
            setPopUp((current) => ({
                ...current,
                show: false,
            }));
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [popUp.show, popUp.text]);

    const showPopup = (text) => {
        setPopUp({
            show: true,
            text,
        });
    };

    const handleStatusChange = (value) => {
        setValue("status", value, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    const onSubmit = async (data) => {
        // Remove stale server errors before a new submission.
        clearErrors("root.serverError");

        const payload = {
            username: data.username.trim(),
            emailId: data.emailId.trim(),
            role: data.role,
            password: data.password,
            status: data.status === true,
        };

        try {
            const backendUrl =
                process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/+$/, "");

            if (!backendUrl) {
                throw new Error(
                    "Backend URL is missing. Check your .env.local file."
                );
            }

            await axios.post(
                `${backendUrl}/create-user`,
                payload,
                {
                    withCredentials: true,
                }
            );

            reset(DEFAULT_VALUES);
            showPopup("User has been created successfully");
        } catch (err) {
            const message =
                err.response?.data?.message ||
                err.message ||
                "Failed to create user. Please try again.";

            const normalizedMessage = message.toLowerCase();

            if (normalizedMessage.includes("username")) {
                setError("username", {
                    type: "server",
                    message,
                });
            } else if (
                normalizedMessage.includes("email") ||
                normalizedMessage.includes("already exists")
            ) {
                setError("emailId", {
                    type: "server",
                    message,
                });
            } else if (normalizedMessage.includes("password")) {
                setError("password", {
                    type: "server",
                    message,
                });
            } else {
                clearErrors("root.serverError");
                showPopup(message);
            }
        }
    };

    const inputClass =
        "w-full rounded-xl border-2 border-white/10 bg-[#051121] px-4 py-3 text-sm placeholder-slate-600 focus:border-violet-500 focus:outline-none";

    const labelClass =
        "mb-2.5 block font-mon text-xs tracking-tight text-white";

    const renderError = (field) =>
        errors[field] && (
            <p className="mt-1 text-xs text-red-400" role="alert">
                {errors[field].message}
            </p>
        );

    return (
        <div className="mt-11">
            <div>
            <h1 className="mb-4 text-3xl">Create New User</h1>
            {/* <button
                    type="button"
                    onClick={() => {
                        // Connect your edit functionality here.
                        router.replace("/admin/createProject/editProject")
                    }}
                    className="flex items-center p-2.5 rounded-lg gap-1.5 text-xs bg-[#6A5AF7] hover:bg-violet-700"
                    >
                    Edit Projects
                    <SquarePen size={16} />
                </button> */}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-4 lg:flex-row">
                    {/* User Details */}
                    <div className="grid w-full max-w-3xl gap-4 rounded-lg bg-[#051121] px-6 py-4">
                        {/* Username */}
                        <div>
                            <label htmlFor="username" className={labelClass}>
                                User Name
                            </label>

                            <input
                                id="username"
                                type="text"
                                autoComplete="off"
                                placeholder="John Doe"
                                aria-invalid={!!errors.username}
                                {...register("username", {
                                    required: "Username is required",
                                    validate: (value) =>
                                        value.trim().length >= 2 ||
                                        "Username must have at least 2 characters",
                                })}
                                className={inputClass}
                            />

                            {renderError("username")}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="emailId" className={labelClass}>
                                Email
                            </label>

                            <input
                                id="emailId"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                aria-invalid={!!errors.emailId}
                                {...register("emailId", {
                                    required: "Email is required",
                                    validate: (value) =>
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                            value.trim()
                                        ) || "Enter a valid email address",
                                })}
                                className={inputClass}
                            />

                            {renderError("emailId")}
                        </div>

                        {/* Role */}
                        <div>
                            <label htmlFor="role" className={labelClass}>
                                User Role
                            </label>

                            <select
                                id="role"
                                aria-invalid={!!errors.role}
                                {...register("role", {
                                    required: "Please select a user role",
                                    validate: (value) =>
                                        VALID_ROLES.includes(value) ||
                                        "Select a valid user role",
                                })}
                                className={`${inputClass} text-gray-300`}
                            >
                                <option value="">Select user role</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">Super admin</option>
                                <option value="viewer">Viewer</option>
                            </select>

                            {renderError("role")}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className={labelClass}>
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Enter Password"
                                aria-invalid={!!errors.password}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must have at least 8 characters",
                                    },
                                    validate: (value) =>
                                        value.trim().length > 0 ||
                                        "Password cannot contain only spaces",
                                })}
                                className={inputClass}
                            />

                            {renderError("password")}
                        </div>

                        {/* General Backend Error */}
                        {errors.root?.serverError && (
                            <p
                                className="text-sm text-red-400"
                                role="alert"
                            >
                                {errors.root.serverError.message}
                            </p>
                        )}
                    </div>

                    {/* Account Status */}
                    <div className="flex w-full max-w-3xl flex-col rounded-lg bg-[#051121] px-6 py-4">
                        <h2 className="font-medium text-white">
                            Account Status
                        </h2>

                        <StatusToggle
                            status={status}
                            onChange={handleStatusChange}
                        />

                        <div className="flex flex-1 items-end justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 rounded-lg bg-[#6A5AF7] px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            >
                                {isSubmitting
                                    ? "Creating User..."
                                    : "Create User"}
                            </button>
                        </div>
                    </div>
                </div>

                <PopUp
                    show={popUp.show}
                    text={popUp.text}
                />
            </form>
        </div>
    );
}
