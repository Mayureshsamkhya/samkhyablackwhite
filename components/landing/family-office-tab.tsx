"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, ShieldAlert, Ban } from "lucide-react";

export default function FamilyOfficeTab() {
    return (
        <div className="w-full h-[500px] flex bg-white rounded-xl overflow-hidden border border-gray-200 relative font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* Main Content Area */}
            <div className="flex-1 p-10 flex flex-col items-center justify-center relative">

                {/* The Truth Card */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative z-10">
                    {/* Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Financial Fact Check</span>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide">Live Audit</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-8">
                        {/* Comparison Row */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center opacity-60">
                                <span className="text-sm font-medium text-gray-500">Broker Pitch Revenue</span>
                                <span className="text-lg font-mono text-gray-400 line-through decoration-gray-300">₹ 50.0 Cr</span>
                            </div>

                            <div className="relative">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-900">Verified MCA Revenue</span>
                                    <span className="text-3xl font-bold font-mono text-gray-900">₹ 12.0 Cr</span>
                                </div>

                                {/* Divergence Signal */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full flex items-center gap-2"
                                >
                                    <div className="bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm whitespace-nowrap flex items-center gap-1">
                                        <Ban className="w-3 h-3" />
                                        Divergence Detected
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Insight Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg"
                        >
                            <div className="flex items-start gap-3">
                                <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5" />
                                <div>
                                    <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">Samkhya Insight</div>
                                    <p className="text-sm text-red-700 font-medium leading-relaxed">
                                        Flagged: Revenue recognition mismatch. High risk of inflated projections in pitch deck.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar: Confidence Gauge */}
            <div className="w-80 bg-gray-50 border-l border-gray-200 p-8 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-amber-500 to-green-500 opacity-20"></div>

                <div className="relative w-48 h-48 mb-6">
                    {/* Gauge Background */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <motion.circle
                            cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="8"
                            strokeDasharray="283"
                            strokeDashoffset="283"
                            initial={{ strokeDashoffset: 283 }}
                            animate={{ strokeDashoffset: 283 - (283 * 0.32) }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Score Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-gray-900 tracking-tighter">32</span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Score</span>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        High Risk
                    </div>
                    <p className="text-xs text-gray-500 text-center leading-relaxed max-w-[200px]">
                        Data integrity check failed. Multiple inconsistencies found in financial reporting.
                    </p>
                </div>

                {/* Action Button */}
                <button className="mt-8 w-full bg-white border border-gray-200 text-gray-900 font-semibold py-3 rounded-lg shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm group">
                    View Full Audit
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
            </div>
        </div>
    );
}
