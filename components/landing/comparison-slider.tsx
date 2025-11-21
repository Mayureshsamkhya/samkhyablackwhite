"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Check, GripVertical, AlertCircle } from "lucide-react";

export function ComparisonSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);
    // Smooth spring animation for the handle
    const springX = useSpring(x, { damping: 30, stiffness: 300 });

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setContainerWidth(width);
            x.set(width / 2);
        }
    }, [x]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setContainerWidth(width);
                // Keep relative position or reset? Let's keep it clamped.
                const currentX = x.get();
                if (currentX > width) x.set(width);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [x]);

    return (
        <section className="flex min-h-[600px] w-full flex-col items-center justify-center bg-white  px-4 py-24 transition-colors duration-300">
            <div className="mb-12 text-center">
                <h2 className="font-sans text-4xl font-medium text-obsidian  sm:text-5xl">
                    See the <span className="text-black">Difference</span>
                </h2>
                <p className="mt-4 font-sans text-gray-600 ">
                    Drag to compare generic AI vs. Samkhya's verified intelligence.
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative h-[500px] w-full max-w-5xl overflow-hidden border border-gray-200  bg-white  shadow-sm select-none"
            >
                {/* RIGHT SIDE (AFTER) - Samkhya Verified - Base Layer */}
                <div className="absolute inset-0 flex h-full w-full bg-white ">
                    <div className="relative h-full w-full p-8 sm:p-12">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                                <Check className="h-5 w-5" />
                            </div>
                            <span className="font-sans text-sm font-bold tracking-wider text-green-700 uppercase">
                                Samkhya Verified
                            </span>
                        </div>

                        {/* Structured Data Table */}
                        <div className="space-y-6 font-sans text-sm">
                            <div className="grid gap-4 border border-gray-200  bg-gray-50  p-6">
                                <div className="grid grid-cols-2 gap-4 border-b border-gray-200  pb-4">
                                    <div>
                                        <div className="text-xs font-medium text-gray-500  uppercase">Revenue (FY24)</div>
                                        <div className="mt-1 flex items-center gap-2 text-lg font-semibold text-obsidian ">
                                            $124.5M
                                            <Check className="h-4 w-4 text-green-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium text-gray-500  uppercase">YoY Growth</div>
                                        <div className="mt-1 flex items-center gap-2 text-lg font-semibold text-green-600">
                                            +42.3%
                                            <Check className="h-4 w-4 text-green-600" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-xs font-medium text-gray-500  uppercase">EBITDA Margin</div>
                                        <div className="mt-1 flex items-center gap-2 text-base font-medium text-obsidian ">
                                            18.2%
                                            <Check className="h-3 w-3 text-green-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium text-gray-500  uppercase">Burn Rate</div>
                                        <div className="mt-1 flex items-center gap-2 text-base font-medium text-obsidian ">
                                            $1.2M/mo
                                            <Check className="h-3 w-3 text-green-600" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-200  bg-gray-50  p-6">
                                <div className="text-xs font-medium text-gray-500  uppercase">Key Risk Factors</div>
                                <ul className="mt-3 space-y-2">
                                    <li className="flex items-start gap-2 text-gray-800 ">
                                        <Check className="mt-1 h-3 w-3 shrink-0 text-green-600" />
                                        <span>Regulatory headwinds in EU markets verified via 10-K filings.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-800 ">
                                        <Check className="mt-1 h-3 w-3 shrink-0 text-green-600" />
                                        <span>Customer concentration: Top 3 clients = 45% of revenue.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LEFT SIDE (BEFORE) - Generic AI - Top Layer (Clipped) */}
                <motion.div
                    className="absolute inset-0 z-10 overflow-hidden bg-gray-100 "
                    style={{ width: springX }}
                >
                    {/* Inner container must be full width to prevent squashing */}
                    <div className="relative h-full w-[var(--container-width)]" style={{ width: containerWidth } as any}>
                        <div className="h-full w-full p-8 sm:p-12">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200  text-gray-500 ">
                                    <AlertCircle className="h-5 w-5" />
                                </div>
                                <span className="font-sans text-sm font-bold tracking-wider text-gray-500  uppercase">
                                    Generic AI
                                </span>
                            </div>

                            {/* Fuzzy/Unstructured Content */}
                            <div className="max-w-md space-y-6">
                                <div className="relative border border-gray-200  bg-white  p-6 text-gray-600  shadow-sm">
                                    <p className="font-sans text-lg italic leading-relaxed opacity-60 blur-[0.5px]">
                                        "Based on my training data, the company seems to be doing well. Revenue is likely around $100M, but I'm not sure about the exact year. Growth is good."
                                    </p>
                                </div>

                                <div className="relative border border-gray-200  bg-white  p-6 text-gray-600  shadow-sm">
                                    <p className="font-sans text-lg italic leading-relaxed opacity-60 blur-[0.5px]">
                                        "Risks might include competition and market changes. I cannot verify specific regulatory filings."
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-col gap-2 opacity-20">
                                    <div className="h-2 w-3/4 rounded bg-gray-400  blur-[1px]" />
                                    <div className="h-2 w-1/2 rounded bg-gray-400  blur-[1px]" />
                                    <div className="h-2 w-5/6 rounded bg-gray-400  blur-[1px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Drag Handle */}
                <motion.div
                    style={{ x: springX }}
                    drag="x"
                    dragConstraints={{ left: 0, right: containerWidth }}
                    dragElastic={0}
                    dragMomentum={false}
                    onDrag={(event, info) => {
                        x.set(x.get() + info.delta.x);
                    }}
                    className="absolute inset-y-0 z-20 flex cursor-ew-resize items-center justify-center"
                >
                    {/* Line */}
                    <div className="h-full w-px bg-obsidian " />

                    {/* Handle Button */}
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-gray-200  bg-white  shadow-lg transition-transform hover:scale-110 active:scale-95">
                        <GripVertical className="h-5 w-5 text-obsidian " />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
