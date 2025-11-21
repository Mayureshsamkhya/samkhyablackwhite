"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Zap, Building2 } from "lucide-react";

export default function CvcTab() {
    return (
        <div className="w-full h-[500px] flex bg-white rounded-xl overflow-hidden border border-gray-200 relative text-gray-900">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Center Focus: The Strategic Bridge */}
            <div className="flex-1 relative p-8 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-12 w-full max-w-2xl relative">

                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[3px] bg-gray-200 z-0 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-emerald-700"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-emerald-600 px-3 py-1 rounded-full z-10 shadow-sm">
                        <span className="text-xs font-bold text-emerald-700 tracking-wide">STRATEGIC FIT: 92%</span>
                    </div>

                    {/* Left Card: Startup */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 bg-white border border-gray-200 p-5 rounded-lg w-64 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center border border-blue-100">
                                <Zap className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Target</div>
                                <div className="font-bold text-sm text-gray-900">Solid State Battery Tech</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden">
                                <div className="h-full bg-blue-600 w-3/4"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500">
                                <span>Tech Maturity</span>
                                <span>Series B</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card: Corporate Strategy */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative z-10 bg-white border border-gray-200 p-5 rounded-lg w-64 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                <Building2 className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Internal Goal</div>
                                <div className="font-bold text-sm text-gray-900">EV Roadmap 2026</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-1.5 w-full bg-gray-100 rounded overflow-hidden">
                                <div className="h-full bg-emerald-600 w-1/2"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500">
                                <span>Timeline</span>
                                <span>Q3 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Alert Banner */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-red-50 border border-red-100 text-red-800 px-4 py-2.5 rounded-md flex items-center gap-3 text-xs w-auto max-w-md shadow-sm"
                >
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="font-medium">Potential Conflict Detected: Competitor invested in Series A.</span>
                    <span className="text-red-700 font-bold cursor-pointer hover:underline ml-2">Reviewing...</span>
                </motion.div>
            </div>

            {/* Right Sidebar: Compliance Engine */}
            <div className="w-80 bg-gray-50 border-l border-gray-200 p-6 flex flex-col">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Compliance Audit Log
                </h3>

                <div className="space-y-4">
                    {[
                        { label: "Entity Status: Active", time: "10:42 AM" },
                        { label: "Director Disqualification Check: Clear", time: "10:42 AM" },
                        { label: "Charges & Liens: None Detected", time: "10:43 AM" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="flex items-start gap-3 group"
                        >
                            <div className="mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">{item.label}</div>
                                <div className="text-[10px] text-gray-400 font-mono mt-0.5">{item.time}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>Compliance Score</span>
                        <span className="text-emerald-700 font-bold">98/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 w-[98%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
