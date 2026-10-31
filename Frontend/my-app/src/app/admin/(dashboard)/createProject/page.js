'use client';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CloudUpload } from "lucide-react";
import { ErrorMessage } from "../../../adminComponents/ErrorMessage";
import { PopUp } from "@/app/components/PopUp";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
    "image/png",
    "image/jpeg",
    "image/webp",
];

const DEFAULT_VALUES = {
    project_name: "",
    short_description: "",
    additional_details: "",
    project_image: "",
    tech_stack: "",
};

export default function Page() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: DEFAULT_VALUES,
    });

    const [imagePreview, setImagePreview] = useState("");
    const [popup, setPopup] = useState({
        show: false,
        message: "",
    });

    // Automatically dismiss the popup.
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

    // Release the preview URL when it changes or the page unmounts.
    useEffect(() => {
        return () => {
            if (imagePreview.startsWith("blob:")) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);

    const showPopup = (message) => {
        setPopup({
            show: true,
            message,
        });
    };

    const imageRegistration = register("project_image", {
        required: "Please upload a project image",

        validate: {
            fileType: (files) => {
                const file = files?.[0];

                if (!file) return "Please upload an image";

                return (
                    ALLOWED_IMAGE_TYPES.includes(file.type) ||
                    "Only PNG, JPG, and WEBP images are allowed"
                );
            },

            fileSize: (files) => {
                const file = files?.[0];

                return (
                    !file ||
                    file.size <= MAX_IMAGE_SIZE ||
                    "Image must be smaller than 2 MB"
                );
            },
        },
    });

    const handleImageChange = async (event) => {
        // Let React Hook Form update its file value and validation.
        await imageRegistration.onChange(event);

        const file = event.target.files?.[0];

        if (!file) {
            setImagePreview("");
            return;
        }

        const isValidType = ALLOWED_IMAGE_TYPES.includes(file.type);
        const isValidSize = file.size <= MAX_IMAGE_SIZE;

        if (!isValidType || !isValidSize) {
            setImagePreview("");

            // Invalid selections must not remain as the form value.
            setValue("project_image", "", {
                shouldValidate: true,
                shouldDirty: true,
            });

            event.target.value = "";
            return;
        }

        setImagePreview(URL.createObjectURL(file));
    };

    const submitProject = async (data) => {
        const formData = new FormData();

        formData.append("project_name", data.project_name.trim());

        formData.append(
            "short_description",
            data.short_description.trim()
        );

        const technologies = data.tech_stack
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean);

        formData.append(
            "tech_stack",
            JSON.stringify(technologies)
        );

        formData.append(
            "additional_details",
            JSON.stringify(
                data.additional_details.trim()
                    ? {
                        description: data.additional_details.trim(),
                    }
                    : {}
            )
        );

        formData.append("project_image", data.project_image[0]);

        try {
            await axios.post("/api/auth/projects", formData);
        
            reset(DEFAULT_VALUES);
            setImagePreview("");
        
            showPopup("Project added successfully!");
        
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong. Please try again.";
        
            showPopup(message);
        }
    };

    const inputClass =
        "w-full mb-2 text-sm placeholder-slate-600 bg-[#051121] rounded-xl py-3 px-4 border-2 border-white/10 focus:outline-none focus:border-violet-500";

    const textareaClass =
        "w-full resize-none px-4 py-3 border-2 border-white/10 placeholder-slate-600 text-slate-400 text-xs bg-[#051121] rounded-xl focus:outline-none focus:border-violet-500";

    const labelClass =
        "block tracking-tight font-mono text-xs mb-3 text-white";


    return (
        <section className="mt-11">
            <div className=" flex justify-between">
                <h2 className="mb-4 text-3xl">
                    Add New Project
                </h2>
                <div>
                <button
                    type="button"
                    onClick={() => {
                        // Connect your edit functionality here.
                        router.replace("/admin/createProject/editProject")
                    }}
                    className="flex items-center p-2.5 rounded-lg gap-1.5 text-xs bg-[#6A5AF7] hover:bg-violet-700"
                    >
                    Edit Projects
                    <SquarePen size={16} />
                </button>
                    </div>
            </div>

            <form onSubmit={handleSubmit(submitProject)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">

                    {/* Project information */}
                    <div className="bg-[#051121] w-full max-w-3xl rounded-lg py-3 px-4">

                        <label htmlFor="project_name" className={labelClass}>
                            Project title
                        </label>

                        <input
                            id="project_name"
                            type="text"
                            placeholder="My-web-App"
                            className={inputClass}
                            {...register("project_name", {
                                required: "Title is required",
                                validate: (value) =>
                                    value.trim().length >= 2 ||
                                    "Name must have at least 2 characters",
                            })}
                        />

                        <div className="min-h-5 mb-3">
                            {errors.project_name && (
                                <ErrorMessage
                                    message={errors.project_name.message}
                                />
                            )}
                        </div>

                        <label htmlFor="short_description" className={labelClass}>
                            Project short description
                        </label>

                        <textarea
                            id="short_description"
                            rows={4}
                            spellCheck
                            placeholder="Briefly describe your project..."
                            className={textareaClass}
                            {...register("short_description", {
                                required: "Short description is required",
                                validate: (value) =>
                                    value.trim().length > 0 ||
                                    "Short description cannot be empty",
                            })}
                        />

                        <div className="min-h-5 mb-3">
                            {errors.short_description && (
                                <ErrorMessage
                                    message={errors.short_description.message}
                                />
                            )}
                        </div>

                        <label htmlFor="additional_details" className={labelClass}>
                            Additional details (optional)
                        </label>

                        <textarea
                            id="additional_details"
                            rows={4}
                            spellCheck
                            placeholder="Architecture, features, project details..."
                            className={`${textareaClass} mb-2`}
                            {...register("additional_details")}
                        />

                        <div className="min-h-5 mb-3">
                            {errors.additional_details && (
                                <ErrorMessage
                                    message={errors.additional_details.message}
                                />
                            )}
                        </div>

                        <label htmlFor="tech_stack" className={labelClass}>
                            Technologies
                        </label>

                        <input
                            id="tech_stack"
                            type="text"
                            placeholder="JavaScript, React, MongoDB..."
                            className={inputClass}
                            {...register("tech_stack", {
                                required: "Technologies are required",
                                validate: (value) =>
                                    value
                                        .split(",")
                                        .some((technology) => technology.trim()) ||
                                    "Enter at least one technology",
                            })}
                        />

                        <div className="min-h-5">
                            {errors.tech_stack && (
                                <ErrorMessage
                                    message={errors.tech_stack.message}
                                />
                            )}
                        </div>
                    </div>

                    {/* Project image and submit */}
                    <div className="bg-[#051121] w-full max-w-3xl flex flex-col gap-4 rounded-lg py-3 px-4">

                        <label
                            htmlFor="project_image"
                            className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-white/10 bg-[#051121] text-gray-400 hover:bg-[#0F1458]/30 overflow-hidden"
                        >
                            {imagePreview ? (
                                <div className="flex flex-col items-center gap-2 py-2">
                                    <img
                                        src={imagePreview}
                                        alt="Selected project preview"
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
                                <div className="flex flex-col items-center py-4">
                                    <CloudUpload size={36} />

                                    <span className="text-sm mt-2">
                                        Upload Image
                                    </span>

                                    <span className="mt-1 text-xs">
                                        PNG, JPG, WEBP (Max 2 MB)
                                    </span>
                                </div>
                            )}

                            <input
                                id="project_image"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                className="hidden"
                                {...imageRegistration}
                                onChange={handleImageChange}
                            />
                        </label>

                        <div className="min-h-5">
                            {errors.project_image && (
                                <ErrorMessage
                                    message={errors.project_image.message}
                                />
                            )}
                        </div>

                        <div className="flex-1 mb-2.5 flex justify-end items-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#6A5AF7] rounded-lg font-medium text-xs md:text-sm mt-4 px-6 py-3 text-white hover:bg-violet-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>

                <PopUp
                    show={popup.show}
                    text={popup.message}
                />
            </form>
        </section>
    );
}
