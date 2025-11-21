"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-white overflow-hidden pt-20 lg:pt-0">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10">
                {/* Left Column: Typography & CTAs */}
                <div className="flex-1 flex flex-col items-start text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="font-sans text-xs font-medium tracking-[0.2em] text-gray-600 uppercase mb-4 block">
                            The Operating System for Indian Private Markets
                        </span>
                        <h1 className="font-sans text-5xl lg:text-7xl font-medium text-black leading-[1.1] mb-6">
                            Invest with Conviction. <br />
                            <span className="text-gray-600">Not Just Gut Feel.</span>
                        </h1>
                        <p className="font-sans text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                            Discover, diligence, and track high-growth companies with the first AI platform built on{" "}
                            <strong className="font-semibold text-black">verified, audit-ready financial data</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="group relative px-8 py-4 bg-[#FF4F00] text-white font-sans font-medium text-sm rounded-sm overflow-hidden transition-all hover:-translate-y-[2px] hover:shadow-lg">
                                <span className="relative z-10 flex items-center gap-2">
                                    Request Access
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                            <button className="px-6 py-4 text-gray-600 font-sans text-sm font-medium hover:text-black transition-colors border-b border-transparent hover:border-gray-300">
                                See the Case Study
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Verification Scan Animation */}
                <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
                    <VerificationScan />
                </div>
            </div>
        </section>
    );
}

function VerificationScan() {
    const [isScanned, setIsScanned] = useState(false);

    // Motion value for the scanner position (0 to 100%)
    const scanProgress = useMotionValue(0);

    // Loop the scanner
    useEffect(() => {
        const controls = animate(scanProgress, 100, {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 1,
            onUpdate: (latest) => {
                if (latest > 50 && !isScanned) setIsScanned(true);
                if (latest < 10) setIsScanned(false);
            }
        });
        return controls.stop;
    }, [scanProgress]);

    // Create a clip path based on the scan progress
    const clipPath = useTransform(scanProgress, (value) => `inset(0 0 0 ${value}%)`);
    const revealClipPath = useTransform(scanProgress, (value) => `inset(0 ${100 - value}% 0 0)`);
    const scannerPosition = useTransform(scanProgress, (value) => `${value}%`);

    return (
        <div className="relative w-full aspect-[3/4] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-8">
            {/* Layer A: The Guess (Blurred, Range Values) */}
            <div className="absolute inset-0 p-8 bg-white z-0">
                <MemoContent
                    type="guess"
                    scanProgress={scanProgress}
                />
            </div>

            {/* Layer B: The Truth (Sharp, Precise Values) */}
            <motion.div
                className="absolute inset-0 p-8 bg-white z-10"
                style={{ clipPath: revealClipPath }}
            >
                <MemoContent
                    type="truth"
                    showTicks={true}
                    scanProgress={scanProgress}
                />
            </motion.div>

            {/* The Scanner Line */}
            <motion.div
                className="absolute top-0 bottom-0 w-[2px] bg-[#FF4F00] z-20 shadow-[0_0_20px_rgba(255,79,0,0.5)]"
                style={{ left: scannerPosition }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-4 h-8 bg-[#FF4F00]/20 blur-md rounded-full" />
            </motion.div>
        </div>
    );
}

function MemoContent({ type, showTicks = false, scanProgress }: { type: "guess" | "truth", showTicks?: boolean, scanProgress?: any }) {
    const isTruth = type === "truth";

    return (
        <div className={`flex flex-col h-full font-mono text-sm ${isTruth ? "text-gray-900" : "text-gray-400 blur-[1px]"}`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-4">
                <div>
                    <div className="text-xs font-sans text-gray-600 uppercase tracking-wider mb-1">Company</div>
                    <div className="text-xl font-sans font-medium text-black">Zepto</div>
                </div>
                <div className="px-2 py-1 bg-gray-50 rounded text-[10px] font-sans uppercase tracking-wide text-gray-600">
                    Series E
                </div>
            </div>

            {/* Metrics */}
            <div className="space-y-6">
                <MetricRow
                    label="Annual Revenue"
                    value={isTruth ? "$124.5M" : "est. $100M - $130M"}
                    isTruth={isTruth}
                    showTick={showTicks}
                    delay={10} // approximate percentage when scanner passes this
                    scanProgress={scanProgress}
                    subtext={isTruth ? "Audited (GAAP)" : "Market Estimate"}
                />
                <MetricRow
                    label="Monthly Burn"
                    value={isTruth ? "$4.2M" : "~$5M - $8M?"}
                    isTruth={isTruth}
                    showTick={showTicks}
                    delay={35}
                    scanProgress={scanProgress}
                    subtext={isTruth ? "Optimized" : "High Variance"}
                />
                <MetricRow
                    label="YoY Growth"
                    value={isTruth ? "142%" : "Fast (>100%)"}
                    isTruth={isTruth}
                    showTick={showTicks}
                    delay={60}
                    scanProgress={scanProgress}
                    subtext={isTruth ? "Top Decile" : "Sector Avg"}
                />
                <MetricRow
                    label="CAC Payback"
                    value={isTruth ? "14 Months" : "12-18 Months"}
                    isTruth={isTruth}
                    showTick={showTicks}
                    delay={85}
                    scanProgress={scanProgress}
                    subtext={isTruth ? "Cohort Analysis" : "Industry Benchmark"}
                />
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className={`w-2 h-2 rounded-full ${isTruth ? "bg-green-500" : "bg-gray-300"}`} />
                    {isTruth ? "Verified Source: MCA Filings" : "Source: Public News / Rumors"}
                </div>
            </div>
        </div>
    );
}

function MetricRow({ label, value, isTruth, showTick, delay, scanProgress, subtext }: any) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!scanProgress || !scanProgress.on) return;

        const unsubscribe = scanProgress.on("change", (current: any) => {
            if (current > delay) {
                setIsVisible(true);
            } else if (current < 5) {
                setIsVisible(false);
            }
        });

        return () => unsubscribe();
    }, [scanProgress, delay]);

    return (
        <div className="relative group">
            <div className="text-xs font-sans text-gray-600 mb-1">{label}</div>
            <div className="flex items-center gap-2">
                <div className={`text-lg font-sans font-medium ${isTruth ? "text-black" : "text-gray-300"}`}>
                    {value}
                </div>
                {isTruth && showTick && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                        <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                    </motion.div>
                )}
            </div>
            <div className={`text-[10px] mt-0.5 ${isTruth ? "text-green-600 font-medium" : "text-gray-300"}`}>
                {subtext}
            </div>
        </div>
    );
}

// Helper for default motion value if not provided
class MotionValue {
    get() { return 0; }
    onChange() { return () => { }; }
}
