"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SignalVisual from "@/components/SignalVisual";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ARTICLES } from "../../lib/articles";

export default function PerspectivePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#050A14] text-[#0A0A0A] dark:text-gray-100 font-sans selection:bg-gray-200 dark:selection:bg-gray-800 transition-colors duration-300">
            {/* Navigation (Simple Sticky) */}
            {/* <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] dark:border-gray-800 bg-white/80 dark:bg-[#050A14]/80 backdrop-blur-md transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-sm font-bold tracking-tight">SAMKHYA.AI</div>
                    <div className="flex items-center gap-4">
                        <div className="text-xs font-medium text-[#666666] dark:text-gray-400 uppercase tracking-wider">Perspective</div>
                        <ThemeToggle />
                    </div>
                </div>
            </nav> */}

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex flex-col-reverse md:flex-row border-b border-[#E5E5E5] dark:border-gray-800 transition-colors duration-300">
                    {/* Left: Text */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-0 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="block text-xs font-mono text-[#666666] dark:text-gray-400 mb-6 uppercase tracking-widest">
                                The Manifesto
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">
                                The 'Bloomberg Moment' for Private Markets.
                            </h1>
                            <p className="text-xl text-[#666666] dark:text-gray-400 max-w-md leading-relaxed mb-10">
                                In 1984, transparency transformed the bond market. Today, it’s coming for Indian venture capital.
                            </p>
                            <Link
                                href="/perspective/the-bloomberg-moment-for-private-markets"
                                className="inline-flex items-center text-lg font-medium border-b border-black dark:border-white pb-1 hover:text-[#666666] dark:hover:text-gray-300 hover:border-[#666666] dark:hover:border-gray-300 transition-colors group"
                            >
                                Read the Essay
                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Visual */}
                    <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative opacity-100 pointer-events-auto">
                        <SignalVisual />
                    </div>
                </section>

                {/* Feed Section */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-24">
                    <div className="flex flex-col space-y-0">
                        {ARTICLES.filter(a => a.id !== 'bloomberg-moment').map((article) => (
                            <Link href={`/perspective/${article.slug}`} key={article.id} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 md:py-12 border-t border-[#E5E5E5] dark:border-gray-800 hover:bg-[#F5F5F5] dark:hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm cursor-pointer"
                                >
                                    {/* Col 1: Meta */}
                                    <div className="md:col-span-3 flex flex-col space-y-2">
                                        <time className="text-xs font-mono text-[#666666] dark:text-gray-400">{article.date}</time>
                                        <span className="text-xs font-medium tracking-wider uppercase text-black dark:text-white">{article.category}</span>
                                    </div>

                                    {/* Col 2: Content */}
                                    <div className="md:col-span-9 flex flex-col space-y-3">
                                        <h2 className="text-2xl font-semibold tracking-tight group-hover:underline decoration-1 underline-offset-4 text-[#0A0A0A] dark:text-white">
                                            {article.title}
                                        </h2>
                                        <p className="text-[#666666] dark:text-gray-400 leading-relaxed max-w-2xl">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
