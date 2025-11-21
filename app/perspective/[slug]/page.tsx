"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { ARTICLES } from "../../../lib/articles";
import { notFound, useParams } from "next/navigation";

export default function ArticlePage() {
    const params = useParams();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link href="/perspective" className="text-blue-400 hover:underline">
                        Back to Perspective
                    </Link>
                </div>
            </div>
        );
    }

    const isBloomberg = article.id === "bloomberg-moment";

    return (
        <main className="min-h-screen bg-[#050A14] text-gray-300 selection:bg-blue-500/30 font-serif-body">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[20%_60%_20%] gap-8 relative">

                {/* Left Sidebar: Sticky Metadata */}
                <aside className="hidden lg:block relative">
                    <div className="sticky top-24 px-6 space-y-8">
                        <Link href="/perspective" className="flex items-center text-sm text-gray-500 hover:text-blue-400 transition-colors group font-sans">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Perspective
                        </Link>

                        <div className="space-y-4 font-sans">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Published</p>
                                <p className="text-gray-300">{article.date}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Read Time</p>
                                <p className="text-gray-300">{article.readTime}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Author</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700" />
                                    <div>
                                        <p className="text-gray-300 text-sm font-medium">{article.author.name}</p>
                                        <p className="text-gray-500 text-xs">{article.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 flex space-x-4">
                            <button className="p-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-blue-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-blue-400 transition-colors">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <article className="px-6 py-12 lg:py-24 max-w-[720px] mx-auto w-full">
                    {/* Header */}
                    <header className="mb-16 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-3 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-6 font-sans">
                            <span>{article.category}</span>
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            <span>Vol. 01</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
                            {article.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed">
                            {article.excerpt}
                        </p>
                    </header>

                    {isBloomberg ? (
                        <>
                            {/* Blitz Summary */}
                            <div className="mb-16 bg-blue-900/10 border-l-2 border-blue-500 p-8 rounded-r-lg backdrop-blur-sm">
                                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-blue-400 mb-6">
                                    The 30-Second Thesis
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Private markets are undergoing a shift from relationship-based access to data-driven transparency.",
                                        "The 'Black Box' problem of Generative AI creates a trust deficit in financial decision making.",
                                        "Canonical extraction is the only way to build a verifiable 'Glass Box' intelligence layer."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-blue-400" />
                                                </div>
                                            </div>
                                            <span className="text-gray-300 font-sans text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Article Body */}
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="font-serif text-xl leading-relaxed text-gray-300 mb-8">
                                    In the 1980s, the bond market was opaque, paper-based, and relationship-driven. If you wanted a price, you called a guy. Then the Bloomberg Terminal arrived.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    It didn't just digitize bonds; it turned opaque data into <Citation source="Bloomberg History, 2019">canonical truth</Citation>.
                                    <Sidenote id="1" content="Michael Bloomberg founded the company in 1981 with the goal of bringing transparency to capital markets." />
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-12">
                                    Indian private markets today are exactly where the US bond market was in 1984. Success depends on Access (who you know). But as AUM explodes, Access is becoming commoditized.
                                </p>

                                <blockquote className="my-12 pl-8 border-l-4 border-blue-500 font-serif italic text-3xl text-white leading-tight py-2">
                                    "If I can't see the source, I can't trust it."
                                </blockquote>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    We are building the Operating System for Verified Intelligence. Not a better CRM, but a glass box for truth.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-white mt-16 mb-8">The Trust Deficit</h2>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    In an era of hallucinating LLMs, the premium on verified truth has never been higher. Financial institutions cannot afford to trade on probability; they need certainty.
                                    <Sidenote id="2" content="A 2024 study showed that 73% of financial analysts cite 'data reliability' as their primary barrier to AI adoption." />
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="font-serif text-xl leading-relaxed text-gray-300 mb-8">
                                This is a placeholder for the full article content. The actual content for "{article.title}" would go here.
                            </p>
                            <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <blockquote className="my-12 pl-8 border-l-4 border-blue-500 font-serif italic text-3xl text-white leading-tight py-2">
                                "Insight is the currency of the future."
                            </blockquote>
                            <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    )}
                </article>

                {/* Right Sidebar: Table of Contents & Sidenotes Container (Desktop) */}
                <aside className="hidden lg:block relative">
                    <div className="sticky top-24 px-6">
                        <div className="mb-12">
                            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500 mb-4">Contents</h4>
                            <ul className="space-y-3 text-sm font-sans text-gray-400">
                                {isBloomberg ? (
                                    <>
                                        <li className="text-blue-400 pl-2 border-l-2 border-blue-400">The Bloomberg Moment</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">The Trust Deficit</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">Canonical Extraction</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">The 100x Analyst</li>
                                    </>
                                ) : (
                                    <>
                                        <li className="text-blue-400 pl-2 border-l-2 border-blue-400">Introduction</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">Key Findings</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">Conclusion</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Sidenotes Placeholder */}
                        <div className="space-y-8">
                            {/* This is a visual representation of where sidenotes would live in this column layout */}
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}

function Citation({ children, source }: { children: React.ReactNode; source: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span
            className="relative inline-block cursor-help group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="border-b-2 border-dotted border-blue-500/50 text-blue-300 group-hover:text-blue-400 transition-colors">
                {children}
            </span>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-[#0A101F]/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                    >
                        <div className="text-xs font-sans text-gray-400">
                            <span className="block text-blue-400 font-bold mb-1 uppercase tracking-wider text-[10px]">Source</span>
                            {source}
                        </div>
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0A101F]/90 border-r border-b border-white/10 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
}

function Sidenote({ id, content }: { id: string; content: string }) {
    return (
        <>
            <span className="lg:hidden inline-block align-super text-[10px] text-blue-400 font-bold ml-1 cursor-pointer border border-blue-500/30 rounded-full w-4 h-4 text-center leading-3">
                {id}
            </span>
            <span className="hidden lg:block absolute left-[105%] top-0 w-[280px] text-sm text-gray-500 font-sans border-l border-blue-500/30 pl-4 py-1">
                <span className="text-blue-400 font-bold mr-2">{id}.</span>
                {content}
            </span>
        </>
    );
}
