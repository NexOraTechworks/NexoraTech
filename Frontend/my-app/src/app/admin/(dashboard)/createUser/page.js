
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SquarePen } from "lucide-react";
import StatusToggle from "@/app/adminComponents/StatusToggle";
import { ErrorMessage } from "../../../adminComponents/ErrorMessage";
import { PopUp } from "@/app/components/PopUp";
import { useRouter } from "next/navigation";

const DEFAULT_VALUES = {
    username: "",
    emailId: "",
    role: "",
    password: "",
    status: false,
};

const VALID_ROLES = ["admin", "superadmin", "viewer"];

export default function Page() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const [popup, setPopup] = useState({
        show: false,
        message: "",
    });

    const status = watch("status");

    // Automatically dismiss the popup after 2.5 seconds.
    useEffect(() => {
        if (!popup.show) return;

        const timeoutId = setTimeout(() => {
            setPopup((current) => ({
                ...current,
                show: false,
            }));
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [popup.show, popup.message]);

    const showPopup = (message) => {
        setPopup({
            show: true,
            message,
        });
    };

    const handleStatusChange = (value) => {
        setValue("status", value, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    const onSubmit = async (data) => {
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

            showPopup("User has been created successfully!");
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong. Please try again.";

            showPopup(message);
        }
    };

    const inputClass =
        "w-full rounded-xl border-2 border-white/10 bg-[#051121] px-4 py-3 text-sm placeholder-slate-600 focus:border-violet-500 focus:outline-none";

    const labelClass =
        "mb-2.5 block font-mono text-xs tracking-tight text-white";

    // Use the same custom error component as Create Project.
    const renderError = (field) => (
        <div className="min-h-5 mt-1">
            {errors[field] && (
                <ErrorMessage message={errors[field].message} />
            )}
        </div>
    );

    return (
        <div className="mt-11">
            {/* Page heading */}
            <div className="mb-1.5 flex items-center justify-between gap-4">
                <h1 className="mb-4 text-3xl">Create New User</h1>

                <button
                    type="button"
                    onClick={() =>
                        router.replace("/admin/createUser/editUser")
                    }
                    className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#6A5AF7] p-2.5 text-xs transition-colors hover:bg-violet-700"
                >
                    Edit Users
                    <SquarePen size={16} />
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col gap-4 lg:flex-row">

                    {/* User Details */}
                    <div className="grid w-full max-w-3xl gap-4 rounded-lg bg-[#051121] px-6 py-4">

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className={labelClass}
                            >
                                User Name
                            </label>

                            <input
                                id="username"
                                type="text"
                                autoComplete="off"
                                placeholder="John Doe"
                                aria-invalid={!!errors.username}
                                className={inputClass}
                                {...register("username", {
                                    required: "Username is required",
                                    validate: (value) =>
                                        value.trim().length >= 2 ||
                                        "Username must have at least 2 characters",
                                })}
                            />

                            {renderError("username")}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="emailId"
                                className={labelClass}
                            >
                                Email
                            </label>

                            <input
                                id="emailId"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                aria-invalid={!!errors.emailId}
                                className={inputClass}
                                {...register("emailId", {
                                    required: "Email is required",
                                    validate: (value) =>
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                            value.trim()
                                        ) ||
                                        "Enter a valid email address",
                                })}
                            />

                            {renderError("emailId")}
                        </div>

                        {/* Role */}
                        <div>
                            <label
                                htmlFor="role"
                                className={labelClass}
                            >
                                User Role
                            </label>

                            <select
                                id="role"
                                aria-invalid={!!errors.role}
                                className={`${inputClass} text-gray-300`}
                                {...register("role", {
                                    required: "Please select a user role",
                                    validate: (value) =>
                                        VALID_ROLES.includes(value) ||
                                        "Select a valid user role",
                                })}
                            >
                                <option value="">Select user role</option>
                                <option value="admin">Admin</option>
                                <option value="superadmin">
                                    Super admin
                                </option>
                                <option value="viewer">Viewer</option>
                            </select>

                            {renderError("role")}
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className={labelClass}
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder="Enter Password"
                                aria-invalid={!!errors.password}
                                className={inputClass}
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
                            />

                            {renderError("password")}
                        </div>
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

                {/* Success and backend error popup */}
                <PopUp
                    show={popup.show}
                    text={popup.message}
                />
            </form>
        </div>
    );
}
