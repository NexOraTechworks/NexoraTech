(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/BackroundEffects.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BackgroundEffects() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundEffects.useEffect": ()=>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;
            const particles = [];
            const particleCount = 45;
            let mouseX = width / 2;
            let mouseY = height / 2;
            // Create particles
            for(let i = 0; i < particleCount; i++){
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    radius: Math.random() * 1.5 + 1
                });
            }
            // Resize canvas
            const handleResize = {
                "BackgroundEffects.useEffect.handleResize": ()=>{
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                }
            }["BackgroundEffects.useEffect.handleResize"];
            // Mouse movement
            const handleMouseMove = {
                "BackgroundEffects.useEffect.handleMouseMove": (e)=>{
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
                    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
                }
            }["BackgroundEffects.useEffect.handleMouseMove"];
            window.addEventListener("resize", handleResize);
            window.addEventListener("mousemove", handleMouseMove);
            let animationFrame;
            const animate = {
                "BackgroundEffects.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, width, height);
                    for(let i = 0; i < particles.length; i++){
                        const particle = particles[i];
                        // Move particle
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        // Wrap around screen
                        if (particle.x < 0) particle.x = width;
                        if (particle.x > width) particle.x = 0;
                        if (particle.y < 0) particle.y = height;
                        if (particle.y > height) particle.y = 0;
                        // Mouse interaction
                        const dx = mouseX - particle.x;
                        const dy = mouseY - particle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 120) {
                            particle.x -= dx * 0.01;
                            particle.y -= dy * 0.01;
                        }
                        // Draw particle
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                        ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
                        ctx.fill();
                        // Connect particles
                        for(let j = i + 1; j < particles.length; j++){
                            const particle2 = particles[j];
                            const distanceBetween = Math.hypot(particle.x - particle2.x, particle.y - particle2.y);
                            if (distanceBetween < 140) {
                                ctx.beginPath();
                                ctx.moveTo(particle.x, particle.y);
                                ctx.lineTo(particle2.x, particle2.y);
                                const opacity = 0.12 * (1 - distanceBetween / 140);
                                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                                ctx.lineWidth = 0.8;
                                ctx.stroke();
                            }
                        }
                    }
                    animationFrame = requestAnimationFrame(animate);
                }
            }["BackgroundEffects.useEffect.animate"];
            animate();
            return ({
                "BackgroundEffects.useEffect": ()=>{
                    cancelAnimationFrame(animationFrame);
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                }
            })["BackgroundEffects.useEffect"];
        }
    }["BackgroundEffects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(139,92,246,0.08),transparent_80%)]"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/BackroundEffects.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackroundEffects.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackroundEffects.js",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/BackroundEffects.js",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(BackgroundEffects, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = BackgroundEffects;
var _c;
__turbopack_context__.k.register(_c, "BackgroundEffects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ThemeToggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "h-9 w-9"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.js",
            lineNumber: 17,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: "h-9 w-9 flex items-center justify-center",
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.js",
            lineNumber: 28,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-5 w-5",
            color: "grey"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ThemeToggle.js",
            lineNumber: 30,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ThemeToggle.js",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(ThemeToggle, "uGU5l7ciDSfqFDe6wS7vfMb29jQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_components_0fbpevq._.js.map