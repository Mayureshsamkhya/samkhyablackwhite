"use client";

import { motion } from "framer-motion";
import { FileText, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function GrowthInvestorsTab() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="w-full min-h-[500px] flex flex-col md:flex-row bg-gray-50 rounded-xl overflow-hidden border border-gray-200 relative">
            {/* Scanner Beam - Hidden on mobile for cleaner look */}
            <motion.div
                className="hidden md:block absolute top-0 bottom-0 w-[2px] bg-blue-400 z-20 shadow-[0_0_20px_2px_rgba(96,165,250,0.8)]"
                animate={{
                    left: ["0%", "100%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Left Side: The Input (Messy) */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-[#f0f2f5] relative p-8 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,_#000000_1px,_transparent_1px)] bg-[length:4px_4px]"></div>

                {/* Messy Stack */}
                <div className="relative w-64 h-80">
                    {/* Document 3 (Bottom) */}
                    <div className="absolute inset-0 bg-white shadow-md border border-gray-300 transform rotate-[-6deg] p-4 flex flex-col gap-2 opacity-80">
                        <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                        <div className="h-2 w-full bg-gray-100 rounded"></div>
                        <div className="h-20 w-full bg-gray-50 border border-gray-100 mt-2"></div>
                    </div>

                    {/* Document 2 (Middle) */}
                    <div className="absolute inset-0 bg-white shadow-md border border-gray-300 transform rotate-[3deg] translate-x-2 translate-y-2 p-4 flex flex-col gap-2">
                        <div className="flex justify-between items-center mb-2">
                            <div className="h-3 w-24 bg-gray-300 rounded"></div>
                            <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-full bg-gray-200"></div>
                            <div className="h-1.5 w-5/6 bg-gray-200"></div>
                            <div className="h-1.5 w-full bg-gray-200"></div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="h-6 bg-gray-50 border border-gray-100"></div>
                            ))}
                        </div>
                    </div>

                    {/* Document 1 (Top - MCA Filing) */}
                    <div className="absolute inset-0 bg-white shadow-lg border border-gray-300 transform rotate-[-2deg] translate-x-[-4px] translate-y-[-4px] p-5 flex flex-col">
                        <div className="flex justify-between items-start border-b border-gray-200 pb-2 mb-3">
                            <div className="text-[10px] font-mono text-gray-500">FORM NO. MGT-7</div>
                            <div className="text-[10px] font-mono text-gray-500">MCA21</div>
                        </div>
                        <div className="space-y-2 flex-1">
                            <div className="flex gap-2">
                                <div className="w-1/3 h-2 bg-gray-800 opacity-20"></div>
                                <div className="w-2/3 h-2 bg-gray-800 opacity-10"></div>
                            </div>
                            <div className="w-full h-px bg-gray-200 my-2"></div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <div className="h-2 bg-gray-100"></div>
                                <div className="h-2 bg-gray-200"></div>
                                <div className="h-2 bg-gray-100"></div>
                                <div className="h-2 bg-gray-200"></div>
                                <div className="h-2 bg-gray-100"></div>
                                <div className="h-2 bg-gray-200"></div>
                            </div>
                            {/* Coffee Stain Artifact */}
                            <div className="absolute bottom-8 right-4 w-12 h-12 rounded-full bg-[#8B4513] opacity-10 blur-md pointer-events-none"></div>
                        </div>
                        <div className="mt-auto pt-2 border-t border-gray-200">
                            <div className="text-[8px] text-gray-400 text-center">Page 12 of 48</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                    <FileText className="w-3 h-3 text-gray-500" />
                    <span className="text-xs font-medium text-gray-600">Unstructured PDF</span>
                </div>
            </div>

            {/* Right Side: The Output (Clean) */}
            <div className="w-full md:w-1/2 h-auto bg-white relative p-6 md:p-8 flex flex-col justify-center">
                <div className="bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden max-w-sm mx-auto w-full">
                    {/* Header */}
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Verified Financials</span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono">FY 2023-24</span>
                    </div>

                    {/* Data Grid */}
                    <div className="p-4">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                <span className="text-sm text-gray-500 font-medium">Revenue</span>
                                <div
                                    className="relative group cursor-help"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <span className="text-sm font-bold text-gray-900 font-mono">₹ 124.5 Cr</span>

                                    {/* Tooltip Cursor */}
                                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-[10px] p-2 rounded shadow-lg pointer-events-none transition-opacity duration-200 z-30 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="font-semibold mb-0.5">Source Verified</div>
                                        <div className="text-gray-300">MCA Filing FY24, Page 12</div>
                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                <span className="text-sm text-gray-500 font-medium">EBITDA</span>
                                <span className="text-sm font-bold text-gray-900 font-mono">₹ 18.2 Cr</span>
                            </div>

                            <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                <span className="text-sm text-gray-500 font-medium">Net Profit</span>
                                <span className="text-sm font-bold text-gray-900 font-mono">₹ 8.4 Cr</span>
                            </div>

                            <div className="flex justify-between items-center py-1 pt-2">
                                <span className="text-sm text-gray-500 font-medium">YoY Growth</span>
                                <div className="flex items-center gap-1 text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                    <TrendingUp className="w-3 h-3" />
                                    <span className="text-xs font-bold font-mono">+24.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-600">Live Extraction</span>
                </div>
            </div>
        </div>
    );
}
