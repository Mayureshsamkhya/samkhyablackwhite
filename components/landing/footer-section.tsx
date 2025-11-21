"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

export function FooterSection() {
    return (
        <footer className="w-full bg-white  text-obsidian  transition-colors duration-300 border-t border-gray-200 ">
            {/* Security Section */}
            <div className="border-b border-gray-200 ">
                <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100  rounded-full">
                            <Shield className="h-6 w-6 text-obsidian " />
                        </div>
                        <div>
                            <h3 className="font- text-xl font-medium text-black">
                                Your Data is Your Edge.
                            </h3>
                            <p className="font- text-sm text-gray-600 mt-1">
                                Enterprise-grade security. SOC2 Type II Certified.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        {["SOC2", "GDPR", "Single-Tenant"].map((badge) => (
                            <span
                                key={badge}
                                className="px-3 py-1 rounded-full border border-gray-200  text-xs font- font-medium tracking-wide text-gray-600 "
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-14 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font- text-4xl md:text-4xl lg:text-5xl font-medium mb-8 tracking-tight"
                >
                    Stop Trading on
                    <br />
                    <span className="text-gray-900">Yesterday's Data.</span>
                    {/* <span className="text-gray-600">Yesterday's Data.</span> */}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <button className="group relative inline-flex items-center gap-2 bg-obsidian  px-8 py-4 text-lg font-semibold text-black  transition-transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                        <span>Request Access</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="font- text-sm text-gray-600">
                        Limited availability for Q4 2024.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200  ">
                <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font- text-xs text-gray-600">
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
