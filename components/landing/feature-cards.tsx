'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, AlertTriangle, Calculator, CheckCircle2, ArrowRight,Shield, Zap, Filter, } from 'lucide-react';

// --- Shared Styles ---
const cardBaseClass = "relative w-full h-full bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-500";
const labelClass = "absolute top-4 left-4 text-xs font-mono uppercase tracking-wider text-gray-500 z-10";

// --- Component 1: The Audit ---
const TheAudit = ({ isActive }: { isActive: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const activeState = isActive || isHovered;

    return (
        <div
            className={`${cardBaseClass} ${activeState ? 'ring-2 ring-blue-500/20 shadow-md' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={labelClass}>The Audit</span>

            <div className="absolute inset-0 flex items-center justify-center p-3 md:p-6 overflow-visible">
                <div className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

                    {/* Left: Insight Card */}
                    <motion.div
                        className="w-full md:w-64 bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 relative z-30"
                        animate={{
                            y: activeState ? 0 : 5,
                            opacity: activeState ? 1 : 0.9
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                            <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider">Key Insight</div>
                            <div className="border border-gray-200 rounded-full px-2 py-0.5 text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                                Confidence: High
                            </div>
                        </div>

                        <div className="text-xs md:text-sm text-gray-500 font-medium mb-1">Revenue Growth (YoY)</div>
                        <div className="text-3xl md:text-4xl font-bold text-black tracking-tight">24.5%</div>

                        {/* Verified Source Badge - Anchor for line */}
                        <div className="absolute md:-right-12 -bottom-3 md:top-1/2 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-40">
                            <motion.div
                                className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm px-2 md:px-3 py-1 md:py-1.5 rounded-full whitespace-nowrap text-xs md:text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: activeState ? 1 : 0, scale: activeState ? 1 : 0.8 }}
                                transition={{ delay: 0.2 }}
                            >
                                <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
                                <span className="text-[10px] md:text-xs font-medium text-gray-900">Verified Source</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Document (MCA Filing) */}
                    <motion.div
                        className="w-full md:w-72 h-64 md:h-80 bg-white border border-gray-200 shadow-sm rounded-lg p-3 md:p-5 flex flex-col gap-2 md:gap-3 relative z-10"
                        animate={{
                            x: activeState ? 0 : -20,
                            opacity: activeState ? 1 : 0.5,
                            filter: activeState ? "blur(0px)" : "blur(1px)"
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 border-b border-gray-100 pb-2 md:pb-3">
                            <FileText className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                            <div className="h-1.5 md:h-2 w-20 md:w-24 bg-gray-100 rounded-full"></div>
                        </div>

                        {/* PnL Rows */}
                        <div className="space-y-2 md:space-y-2.5">
                            {/* Row 1: Revenue from Operations (Target) */}
                            <div className="flex justify-between items-center p-1 md:p-1.5 rounded bg-blue-50/50 border border-blue-100/50">
                                <div className="w-20 md:w-24 h-1.5 md:h-2 bg-gray-200 rounded-sm"></div>
                                <div className="w-10 md:w-12 h-1.5 md:h-2 bg-gray-300 rounded-sm"></div>
                                <div className="w-10 md:w-12 h-1.5 md:h-2 bg-blue-200 rounded-sm"></div> {/* Highlighted Number */}
                            </div>

                            {/* Other Rows */}
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex justify-between items-center px-1 md:px-1.5">
                                    <div className="w-16 md:w-20 h-1.5 md:h-2 bg-gray-100 rounded-sm"></div>
                                    <div className="w-8 md:w-10 h-1.5 md:h-2 bg-gray-100 rounded-sm"></div>
                                    <div className="w-8 md:w-10 h-1.5 md:h-2 bg-gray-100 rounded-sm"></div>
                                </div>
                            ))}

                            {/* Total Row */}
                            <div className="flex justify-between items-center pt-1.5 md:pt-2 border-t border-gray-100 mt-1.5 md:mt-2 px-1 md:px-1.5">
                                <div className="w-14 md:w-16 h-2 md:h-2.5 bg-gray-300 rounded-sm"></div>
                                <div className="w-10 md:w-12 h-2 md:h-2.5 bg-gray-300 rounded-sm"></div>
                                <div className="w-10 md:w-12 h-2 md:h-2.5 bg-gray-300 rounded-sm"></div>
                            </div>
                        </div>

                        {/* Page Number */}
                        <div className="absolute bottom-2 md:bottom-3 right-3 md:right-4 text-[8px] md:text-[9px] text-gray-400 font-mono">Pg 12</div>
                    </motion.div>

                    {/* Connection Line - Hidden on mobile */}
                    <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                        <motion.path
                            d="M 290 180 C 320 180, 340 180, 380 180" // Connects Badge (approx 290,180) to Doc Row (approx 380,180)
                            fill="none"
                            stroke="#059669" // Green to match verified badge
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: activeState ? 1 : 0,
                                opacity: activeState ? 1 : 0
                            }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                        />
                    </svg>

                </div>
            </div>
        </div>
    );
};

// --- Component 2: The Variance Detector ---
const VarianceDetector = ({ isActive }: { isActive: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const activeState = isActive || isHovered;

    return (
        <div
            className={`${cardBaseClass} ${activeState ? 'ring-2 ring-blue-500/20 shadow-md' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={labelClass}>The Variance Detector</span>

            <div className="flex h-full">
                {/* Left Panel - Pitch Deck */}
                <div className="flex-1 bg-white flex flex-col items-center justify-center p-4 border-r border-gray-100 relative">
                    <div className="text-xs font-mono text-gray-600 mb-2 uppercase">Pitch Deck</div>
                    <div className="text-xl font-bold text-black">EBITDA</div>
                    <div className="text-3xl font-bold text-blue-600 mt-1">20%</div>
                </div>

                {/* Right Panel - MCA Filing */}
                <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center p-4 relative">
                    <div className="text-xs font-mono text-gray-600 mb-2 uppercase">MCA Filing</div>
                    <div className="text-xl font-bold text-black">EBITDA</div>
                    <motion.div
                        className="text-3xl font-bold mt-1"
                        animate={{ color: activeState ? "#DC2626" : "#1F2937" }} // Red on hover, Gray default
                    >
                        12%
                    </motion.div>
                </div>
            </div>

            {/* Variance Badge Overlay */}
            <AnimatePresence>
                {activeState && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="bg-white p-1.5 rounded-full shadow-xl border border-red-100 flex flex-col items-center">
                            <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold border border-red-100">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                VARIANCE DETECTED
                            </div>
                            <div className="mt-1 text-xs font-mono text-red-600 font-medium">
                                Delta: -8%
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Component 3: The Logic Tree ---
const LogicTree = ({ isActive }: { isActive: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [step, setStep] = useState(0);
    const activeState = isActive || isHovered;

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (activeState) {
            setStep(1); // Show formula immediately
            timer = setTimeout(() => {
                setStep(2); // Flip to numbers
                setTimeout(() => {
                    setStep(3); // Show result
                    setTimeout(() => {
                        setStep(4); // Show verified badge
                    }, 500);
                }, 500);
            }, 500);
        } else {
            setStep(0);
        }
        return () => clearTimeout(timer);
    }, [activeState]);

    return (
        <div
            className={`${cardBaseClass} ${activeState ? 'ring-2 ring-blue-500/20 shadow-md' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={labelClass}>The Logic Tree</span>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Input */}
                <div className="w-full max-w-[240px] bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center gap-3 mb-6">
                    <Calculator className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-black">Calculate Interest Coverage</span>
                </div>

                {/* Formula / Calculation Area */}
                <div className="h-24 flex flex-col items-center justify-center relative w-full">
                    <AnimatePresence mode="wait">
                        {step >= 1 && step < 2 && (
                            <motion.div
                                key="formula"
                                className="text-sm font-mono text-gray-500 text-center"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                            >
                                (EBIT) / (Interest Expense)
                            </motion.div>
                        )}

                        {step >= 2 && (
                            <motion.div
                                key="numbers"
                                className="flex items-center gap-3 text-lg font-mono font-medium text-gray-800"
                                initial={{ opacity: 0, rotateX: -90 }}
                                animate={{ opacity: 1, rotateX: 0 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <span className="text-gray-900">₹50 Cr</span>
                                <span className="text-gray-400">/</span>
                                <span className="text-gray-900">₹12 Cr</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Result */}
                    <AnimatePresence>
                        {step >= 3 && (
                            <motion.div
                                className="flex items-center gap-2 mt-3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <span className="text-gray-400">=</span>
                                <span className="text-2xl font-bold text-blue-600">4.16x</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Verified Badge */}
                <AnimatePresence>
                    {step >= 4 && (
                        <motion.div
                            className="absolute bottom-6 flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-200 shadow-sm"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                        >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span className="text-xs font-bold">Solvency Verified</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

// --- Main Section Container ---
export function FeatureCardsSection() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveCardIndex((prev) => (prev + 1) % 3);
        }, 4000); // Switch every 4 seconds for better readability

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const features = [
        {
            id: 0,
            title: "No Black Boxes.",
            description: "Every insight is linked to a verifiable source document.",
            icon: <Shield className="w-5 h-5" />,
            // icon: <FileText className="w-5 h-5" />,
            component: <TheAudit isActive={true} />
        },
        {
            id: 1,
            title: "No Blind Spots.",
            description: "Automated variance detection between pitch decks and filings.",
            icon: <Zap className="w-5 h-5" />,
            component: <VarianceDetector isActive={true} />
        },
        {
            id: 2,
            title: "No Creative Math.",
            description: "Proprietary financial reasoning models, not generic LLMs.",
            icon: <Filter className="w-5 h-5" />,
            component: <LogicTree isActive={true} />
        }
    ];

    return (
        <section className="pt-18 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">
                        Generic AI Hallucinates. <span className="text-black dark:text-white">Samkhya Verifies.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-">
                        The only intelligence layer built for the distinct needs of modern allocators: <strong className="text-black">Velocity</strong> for Growth VCs, <strong className="text-black">Audit Trails</strong> for CVCs, and <strong className="text-black">Vigilance</strong> for Family Office.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => {
                                    setActiveCardIndex(index);
                                    setIsAutoPlaying(false); // Stop auto-play on user interaction
                                }}
                                className={`text-left p-6 rounded-xl transition-all duration-300 border group relative overflow-hidden ${activeCardIndex === index
                                    ? "bg-white border-gray-200 shadow-sm ring-1 ring-gray-900/5"
                                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200/50"
                                    }`}
                            >
                                {activeCardIndex === index && isAutoPlaying && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-1 bg-blue-600/10"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 4, ease: "linear" }}
                                    >
                                        <div className="h-full w-full bg-blue-600" />
                                    </motion.div>
                                )}
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className={`p-2 rounded-lg transition-colors ${activeCardIndex === index
                                        ? "bg-blue-50 text-blue-600"
                                        : "bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-gray-700"
                                        }`}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold mb-1 transition-colors ${activeCardIndex === index ? "text-black" : "text-gray-600 group-hover:text-black"
                                            }`}>
                                            {feature.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors ${activeCardIndex === index ? "text-gray-600" : "text-gray-400 group-hover:text-gray-500"
                                            }`}>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Active Component Display */}
                    <div className="lg:col-span-7">
                        <div className="relative h-[300px] md:h-[400px] w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCardIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    {/* We wrap the component to ensure it fills the height and maintains its internal layout */}
                                    <div className="h-full w-full">
                                        {features[activeCardIndex].component}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
