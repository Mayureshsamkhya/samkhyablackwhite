"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductVisualization() {
    return (
        <section className="w-full bg-white py-12 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-base md:text-lg text-gray-700">
                            <h2 className="text-3xl md:text-5xl font-bold font- text-black mb-6 tracking-tight">Scale your conviction with Verified Intelligence.</h2>
                            <p>Screen 200+ deals confidently. Samkhya replaces manual workflows with regulatory-verified AI, delivering the speed and audit trails required to convince your Investment Committee.</p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative w-full lg:w-1/2 flex justify-center"
                    >
                        {/* Image Container with subtle float animation */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-xl"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-4  rounded-full -z-10 " />

                            <Image
                                src="/aidemo3.png"
                                // src="/intelligence-stack.png"
                                alt="Samkhya Intelligence Stack - Exploded View"
                                width={1200}
                                height={1200}
                                className="w-full h-auto rounded-2xl  border border-gray-100"
                                // className="w-full h-auto rounded-2xl shadow-2xl border border-gray-100"
                                priority={false}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
