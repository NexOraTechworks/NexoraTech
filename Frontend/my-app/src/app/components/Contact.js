
'use client';

import { useForm } from "react-hook-form";
import { PopUp } from "./PopUp";
import { useState } from "react";
import axios from "axios";
import { validateMessage } from "../data/ValidateMessage";

export function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const [error, setError] = useState("");
    const [alert, setAlert] = useState(false);

    const sendData = async (data) => {
        setError("");
        setAlert(false);

        const messageError = validateMessage(data.message);

        if (messageError) {
            setError(messageError);
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 2000);

            return;
        }

        try {
            await axios.post(
                process.env.NEXT_PUBLIC_API_URL,
                data
            );

            // Only reset the form after a successful request
            reset();

            setError("");
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 2000);

        } catch (err) {
            console.error(err);

            setError(
                err.response?.data?.message ||
                "Unable to submit your inquiry. Please try again."
            );

            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    };

    return (
        <section
            id="contact"
            className="py-24 max-w-5xl mx-auto px-4 border-t border-white/5"
        >
            <div className="glass-bento shadow rounded-3xl font-mon p-8">
                <div className="max-w-2xl mb-5">
                    <span className="text-emerald-light font-bold tracking-widest uppercase text-xs mb-3 block">
                        // Inquiries
                    </span>

                    <h2 className="dark:text-white text-charcoal font-extrabold font-syne leading-12 text-2xl md:text-5xl tracking-tight">
                        Initiate
                        Collaboration
                    </h2>
                </div>

                <form onSubmit={handleSubmit(sendData)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400">
                                Your Name
                            </label>

                            <input
                                type="text"
                                placeholder="John Doe"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Name must have at least 2 characters"
                                    }
                                })}
                                className="w-full text-sm placeholder-slate-600 dark:bg-onyx bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                            />

                            {errors.name && (
                                <p className="text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="John@gmail.com"
                                {...register("emailId", {
                                    required: "Email is required"
                                })}
                                className="w-full text-sm placeholder-slate-600 dark:bg-onyx bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                            />

                            {errors.emailId && (
                                <p className="text-red-600">
                                    {errors.emailId.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block uppercase tracking-tighter font-mon text-xs mb-1.5 text-slate-400">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="Subject..."
                                {...register("subject", {
                                    required: "Subject is required",
                                    minLength: {
                                        value: 2,
                                        message: "Subject must have at least 2 characters"
                                    }
                                })}
                                className="w-full text-sm placeholder-slate-600 dark:bg-onyx bg-light rounded-xl py-3 px-4 border-2 dark:border-white/10 border-graphite"
                            />

                            {errors.subject && (
                                <p className="text-red-600">
                                    {errors.subject.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block font-mon mb-1.5 uppercase text-slate-400 text-xs">
                            Scope / Requirements
                        </label>

                        <textarea
                            rows={6}
                            spellCheck={true}
                            {...register("message", {
                                required: "Requirements are required"
                            })}
                            className="w-full resize-none px-4 py-3 border-2 dark:border-white/10 border-graphite placeholder-slate-600 text-slate-400 text-xs dark:bg-onyx bg-light rounded-xl"
                            placeholder="Brief outline of architecture needs, timeline, or position overview..."
                        />

                        {errors.message && (
                            <p className="text-red-600">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="dark:bg-white bg-charcoal w-full md:w-auto rounded-4xl font-medium text-xs md:text-sm mt-4 px-8 py-3.5 dark:text-black text-light hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>
                            {isSubmitting
                                ? "Dispatching..."
                                : "Dispatch Transmission"}
                        </span>
                    </button>

                    <PopUp
                        show={alert}
                        text={error || "Sent Successfully!"}
                    />
                </form>
            </div>
        </section>
    );
}
