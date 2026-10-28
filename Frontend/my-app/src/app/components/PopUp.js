
'use client';

export function PopUp({ show, text }) {
    return (
        <div
            className={`
                fixed
                top-15
                right-5
                z-50
                pointer-events-none

                px-4
                py-2
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                text-emerald

                transition-all
                duration-500
                ease-in-out

                ${
                    show
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-[150%] opacity-0"
                }
            `}
        >
            {text}
        </div>
    );
}
