
"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const KNOWN_TECHNOLOGIES = [
    "Dependency-Check",
    "GitHub Actions",
    "GitLab CI",
    "Cloud Computing",
    "Cloudflare CDN",
    "Amazon S3",
    "AWS S3",
    "API Gateway",
    "Node.js",
    "Next.js",
    "Express.js",
    "Spring Boot",
    "React.js",
    "React",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "Kubernetes",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Docker",
    "Jenkins",
    "ArgoCD",
    "Cloudflare",
    "DevOps",
    "GitHub",
    "Git",
    "Linux",
    "Nginx",
    "Redis",
    "Python",
    "Java",
    "Bash",
    "Trivy",
    "SonarQube",
    "Caching",
    "CDN",
];

// Match known multi-word technologies when text is pasted.
const parsePastedTechnologies = (text) => {
    const chunks = text
        .split(/[,\n;|]+/)
        .map((item) => item.trim())
        .filter(Boolean);

    const knownTerms = [...KNOWN_TECHNOLOGIES].sort(
        (a, b) => b.split(/\s+/).length - a.split(/\s+/).length
    );

    const parsed = [];

    chunks.forEach((chunk) => {
        const words = chunk.split(/\s+/);
        let index = 0;

        while (index < words.length) {
            let matchedTechnology = null;

            for (const technology of knownTerms) {
                const techWords = technology.split(/\s+/);

                const candidate = words
                    .slice(index, index + techWords.length)
                    .join(" ");

                if (
                    candidate.toLowerCase() ===
                    technology.toLowerCase()
                ) {
                    matchedTechnology = technology;
                    break;
                }
            }

            if (matchedTechnology) {
                parsed.push(matchedTechnology);
                index += matchedTechnology.split(/\s+/).length;
            } else {
                parsed.push(words[index]);
                index++;
            }
        }
    });

    return parsed;
};

export default function TechStackInput({
    value = [],
    onChange,
}) {
    const [input, setInput] = useState("");

    const technologies = Array.isArray(value) ? value : [];

    const addTechnologies = (items) => {
        const newTechnologies = items
            .map((item) => item.trim())
            .filter(Boolean);

        const updatedTechnologies = [...technologies];

        newTechnologies.forEach((technology) => {
            const alreadyExists = updatedTechnologies.some(
                (existing) =>
                    existing.toLowerCase() === technology.toLowerCase()
            );

            if (!alreadyExists) {
                updatedTechnologies.push(technology);
            }
        });

        onChange(updatedTechnologies);
    };

    const handleAdd = () => {
        if (!input.trim()) return;

        addTechnologies(
            input.split(/[,\n;|]+/)
        );

        setInput("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            handleAdd();
        }

        if (
            event.key === "Backspace" &&
            !input &&
            technologies.length > 0
        ) {
            onChange(technologies.slice(0, -1));
        }
    };

    const handlePaste = (event) => {
        const pastedText = event.clipboardData.getData("text");

        if (!pastedText) return;

        event.preventDefault();

        const parsedTechnologies =
            parsePastedTechnologies(pastedText);

        addTechnologies(parsedTechnologies);
        setInput("");
    };

    const removeTechnology = (technologyToRemove) => {
        onChange(
            technologies.filter(
                (technology) => technology !== technologyToRemove
            )
        );
    };

    return (
        <div className="w-full mb-2 rounded-xl border-2 border-white/10 bg-[#051121] px-3 py-3 focus-within:border-violet-500">

            {/* Selected technologies */}
            <div className="flex flex-wrap gap-2 mb-3">

                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                        {technology}

                        <button
                            type="button"
                            onClick={() =>
                                removeTechnology(technology)
                            }
                            className="text-violet-300 hover:text-red-400 transition-colors"
                            aria-label={`Remove ${technology}`}
                        >
                            <X size={13} />
                        </button>
                    </span>
                ))}

            </div>

            {/* Technology input */}
            <div className="flex items-center gap-2">

                <input
                    type="text"
                    value={input}
                    onChange={(event) =>
                        setInput(event.target.value)
                    }
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    placeholder="Type a technology and press Enter..."
                    className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white placeholder-slate-600 outline-none"
                />

                <button
                    type="button"
                    onClick={handleAdd}
                    disabled={!input.trim()}
                    className="flex shrink-0 items-center gap-1 rounded-lg bg-violet-600 px-3 py-2 text-xs text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <Plus size={14} />
                    Add
                </button>

            </div>

            <p className="mt-2 text-[10px] text-slate-500">
                Press Enter or click Add to create a tag. Paste
                comma-separated or recognized technology names.
            </p>

        </div>
    );
}
