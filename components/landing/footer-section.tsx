"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

export function FooterSection() {
    return (
        <footer className="w-full   text-obsidian  transition-colors duration-300  border-gray-200 ">
            {/* Security Section */}
            <div className=" border-gray-200">
                <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center justify-center text-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-4 max-w-3xl">
                        <div className="p-3 bg-gray-100 rounded-full">
                            <Shield className="h-6 w-6 text-obsidian" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">
                            Your Data is Your Edge. <br />We Keep it That Way.
                        </h2>

                        <p className="text-xl text-[#666666] dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            We deploy isolated instances for every firm. Your proprietary data and investment memos
                            are never used to train our public models.
                        </p>

                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            <li>Single-Tenant Architecture available.</li>
                            <li>Role-Based Access Control (RBAC).</li>
                            <li>Ephemeral Data Processing.</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-14 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white"
                >
                    Days of work.
                    <br />
                    <span className="text-[#0A0A0A] dark:text-white">Done in Minutes.</span>
                    {/* <span className="text-gray-600">Yesterday's Data.</span> */}
                </motion.h2>
                <p className="text-xl text-[#666666] dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    Join the design partners building the future of Indian investment intelligence.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <button className="group relative inline-flex items-center gap-2 bg-obsidian  px-8 py-4 text-lg font-semibold text-black transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                        <span>Request Access</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-sm text-gray-600">
                        Limited availability for Q4 2024.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200  ">
                <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                    <p>© 2025 Samkhya AI Inc.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-black transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-black transition-colors">
                            Terms
                        </a>
                        <a href="#" className="hover:text-black transition-colors">
                            Security
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
