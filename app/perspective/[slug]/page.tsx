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
        <main className="min-h-screen bg-[#050A14] text-gray-300 selection:bg-blue-500/30 font-serif-body overflow-x-hidden">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[20%_60%_20%] gap-8 relative">

                {/* Left Sidebar: Sticky Metadata (Desktop) */}
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

                        {/* <div className="pt-8 border-t border-white/5 flex space-x-4">
                            <button className="p-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-blue-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-blue-400 transition-colors">
                                <Bookmark className="w-5 h-5" />
                            </button>
                        </div> */}
                    </div>
                </aside>

                {/* Main Content */}
                <article className="px-6 py-12 lg:py-24 max-w-[720px] mx-auto w-full">
                    {/* Mobile Header Navigation */}
                    <div className="lg:hidden mb-8">
                        <Link href="/perspective" className="flex items-center text-sm text-gray-500 hover:text-blue-400 transition-colors group font-sans mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Perspective
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12 lg:mb-16 text-left">
                        <div className="flex items-center justify-start space-x-3 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-6 font-sans">
                            <span>{article.category}</span>
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            <span>Vol. 01</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
                            {article.title}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-serif italic leading-relaxed mb-8">
                            {article.excerpt}
                        </p>

                        {/* Mobile Metadata */}
                        <div className="lg:hidden flex flex-wrap gap-6 py-6 border-y border-white/10 font-sans">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Published</p>
                                <p className="text-gray-300 text-sm">{article.date}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Read Time</p>
                                <p className="text-gray-300 text-sm">{article.readTime}</p>
                            </div>
                            <div className="w-full sm:w-auto">
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Author</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700" />
                                    <div>
                                        <p className="text-gray-300 text-sm font-medium">{article.author.name}</p>
                                        <p className="text-gray-500 text-xs">{article.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <div className="prose prose-invert prose-lg max-w-none break-words overflow-hidden">
                                <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-8">I. The Shift</h2>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    In 1982, if you wanted a bond price, you had to call someone. Literally. Traders hoarded quotes like trade secrets. Information asymmetry wasn't a bug; it was the entire business model.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    Then Bloomberg built a terminal that did something dangerous: it made prices visible to everyone, at the same time. The "I know a guy" premium evaporated overnight. The informed won because suddenly, everyone was informed.
                                    <Sidenote id="1" content="Michael Bloomberg founded the company in 1981 with the goal of bringing transparency to capital markets." />
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 font-bold text-white">
                                    Private markets today are flying the same blind flight path.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    Deal flow lives in WhatsApp groups and warm intros. Analysts spend 80+ hours per company playing data archaeologist - excavating numbers from PDFs, transcribing them into spreadsheets, praying the pitch deck matches the MCA filing. (It usually doesn't.)
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    The spreadsheet becomes "truth" by default. The analyst who built the model leaves. The next analyst starts from scratch. Institutional memory? Zero.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-12">
                                    Here's the uncomfortable reality: <strong>success in private markets still depends more on who you know than what you know.</strong>
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    But the winds are shifting. AUM in Indian alternatives has crossed $100 billion, growing at 25%+ annually. LPs are demanding process, not vibes. But the reality is that most investors still rely on tools that weren't built for emerging markets—leaving them with incomplete data, manual workarounds, and weeks of delayed decisions.
                                    <Sidenote id="2" content="India alternative investment AUM and growth rate: Avendus Capital Report (Dec 2024); PMS Bazaar Industry Study (2024)." />
                                </p>

                                <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-6">Here's where the skeptics get it wrong.</h3>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    Some say India is a smaller market. The data says otherwise. India's alternative investment industry has crossed <strong>$400 billion in AUM</strong>, growing at <strong>25-30% annually</strong>—twice the rate of developed markets. SEBI-registered Alternative Investment Funds alone manage <strong>$130+ billion in commitments</strong>, up <strong>3.6x since FY20</strong>.
                                    <Sidenote id="3" content="Total alternatives market size and growth rate: Avendus Capital Report (Dec 2024). India's alternative assets market estimated at $400 billion, projected to reach $2 trillion by 2034." />
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8 relative">
                                    Add global institutional capital flowing in—FPIs pumped <strong>$23.8 billion into Indian equities in FY24 alone</strong>—and the opportunity becomes undeniable.
                                    <Sidenote id="4" content="Foreign Portfolio Investment inflows: IBEF analysis (Oct 2024) based on SEBI/NSDL data." />
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    This isn't a frontier market. It's the proving ground.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-12">
                                    India isn't a smaller market. It's the <em>hardest</em> market. The data is messiest. The infrastructure is weakest. MCA filings contain audited financials for every Indian company—locked in PDFs nobody reconciles. We're unlocking them. If we can build here, we can build anywhere.
                                </p>

                                <hr className="border-gray-800 my-12" />

                                <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-8">II. The Problem With AI (And What We're Building Instead)</h2>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    GPTs are an incredible tool. We use it daily. But it has one fatal flaw for investment decisions: <strong>it's a confident liar.</strong>
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    Ask it about a startup's revenue. It will give you a number. That number might be fabricated, confused with another company, or pulled from a press release three years old. You have no way to know—because AI is a black box. Information goes in. Answers come out. What happened in between? Nobody knows.
                                </p>

                                <div className="pl-6 border-l-2 border-gray-700 my-8 italic text-gray-400">
                                    <p className="mb-2">"The model said revenue was $6 million."</p>
                                    <p className="mb-2">"Where did it get that?"</p>
                                    <p className="mb-2">"I don't know."</p>
                                    <p className="mb-2">"Can we verify it?"</p>
                                    <p>"Not really."</p>
                                </div>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    Would you bet $12 million on that? Neither would we.
                                </p>

                                <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-6">So we're building a Glass Box instead.</h3>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    Every insight traces to a verifiable source. Every number carries its provenance. "Revenue: $5.6 million" → <em>MCA Annual Filing FY24, Page 12, Line Item 3.</em> Click through. See the original document. Always.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    We don't aggregate data (Crunchbase says X, LinkedIn says Y, here's both). We <em>reconcile</em> it. If the numbers don't match, we flag it. If they do, you know they've been verified across sources.
                                </p>

                                <blockquote className="my-12 pl-8 border-l-4 border-blue-500 font-serif italic text-3xl text-white leading-tight py-2">
                                    "You don't trust us. You verify us."
                                </blockquote>

                                <hr className="border-gray-800 my-12" />

                                <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-8">III. What This Actually Looks Like</h2>

                                <div className="grid md:grid-cols-2 gap-8 my-12">
                                    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                                        <h4 className="text-red-400 font-bold mb-4 uppercase tracking-wider text-sm">The Old Way</h4>
                                        <ul className="space-y-3 text-sm text-gray-400">
                                            <li>• Analyst searches Tracxn (15 min)</li>
                                            <li>• Cross-references Crunchbase (20 min)</li>
                                            <li>• Downloads MCA filings (30 min)</li>
                                            <li>• Manually enters data into Excel (3-4 hours)</li>
                                            <li>• Realizes numbers don't match pitch deck</li>
                                            <li>• Calls founder. Waits 2-3 days.</li>
                                        </ul>
                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <p className="font-bold text-white">Total: 80+ hours</p>
                                            <p className="text-xs text-gray-500 mt-1">Confidence: "Pretty sure, but..."</p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                                        <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-wider text-sm">The New Way</h4>
                                        <ul className="space-y-3 text-sm text-gray-300">
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> <span>Enter company name</span></li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> <span>System pulls & reconciles 7 sources</span></li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> <span>Canonical financials auto-generated</span></li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> <span>Health metrics flagged automatically</span></li>
                                            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-blue-400 mt-0.5" /> <span>Memo drafted with traced sources</span></li>
                                        </ul>
                                        <div className="mt-6 pt-6 border-t border-blue-500/20">
                                            <p className="font-bold text-white">Total: Hours, not weeks</p>
                                            <p className="text-xs text-blue-300 mt-1">Confidence: "Verified against MCA"</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-12">
                                    This isn't theoretical. Accenture Ventures ran a 20-day pilot. Their analysts refused to go back to the old workflow. Verdict: <strong>"10x faster than our internal process."</strong>
                                </p>

                                <hr className="border-gray-800 my-12" />

                                <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-8">IV. What We Believe</h2>

                                <div className="space-y-8 mb-12">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Speed without trust is theater.</h3>
                                        <p className="text-gray-400">Anyone can build a fast AI. The question is whether you'd stake your fund's reputation on its output. If not, the speed is worthless.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Hard markets first.</h3>
                                        <p className="text-gray-400">The tools that work in New York don't work in Mumbai. MCA filings contain audited financials for every Indian company—locked in PDFs nobody reconciles. We're unlocking them.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">AI should show its work.</h3>
                                        <p className="text-gray-400">Black boxes are for magicians. Investment decisions require Glass Boxes—systems that explain themselves, cite their sources, and invite verification.</p>
                                    </div>
                                </div>

                                <hr className="border-gray-800 my-12" />

                                <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-8">V. The Invitation</h2>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    We're not building for everyone.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    We're building for Growth VCs, CVCs, and family offices tired of missing deals because diligence took too long. Tired of presenting to IC with data they can't fully verify. Tired of watching analysts burn out on copy-paste work that a machine should do.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    If that's you, we'd like to build <em>with</em> you.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-12">
                                    We're onboarding 5 design partners. Not customers—co-creators. Funds who want to shape what investment intelligence becomes.
                                </p>

                                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-xl mb-12">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-white font-bold mb-4">What you get:</h4>
                                            <ul className="space-y-2 text-gray-400 text-sm">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Early access</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Direct input on the roadmap</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"/> Never manually enter MCA data again</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-4">What we ask:</h4>
                                            <ul className="space-y-2 text-gray-400 text-sm">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500"/> Honest feedback</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500"/> Access to real workflows</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500"/> Patience while we iterate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    The Bloomberg Terminal didn't just change trading. It changed who could trade.
                                </p>

                                <div className="my-8 space-y-4">
                                    <p className="font-serif italic text-gray-400">Before Bloomberg: "I've been in this market 30 years. I know people."</p>
                                    <p className="font-serif italic text-white">After Bloomberg: "Here's the data. Make your own call."</p>
                                </div>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    Private markets are next. The funds clinging to access will get outmaneuvered by funds with better systems. The analysts drowning in Excel will lose to analysts augmented by verified AI. The memos based on vibes will lose to memos backed by canonical data.
                                </p>

                                <p className="font-serif text-lg leading-relaxed text-gray-300 mb-8">
                                    We're starting in India. MCA filings today. Companies House tomorrow. EDGAR after that.
                                </p>

                                <p className="font-serif text-xl font-bold text-white mb-12">
                                    The only question: which side of the shift will you be on?
                                </p>

                                <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
                                    <p className="font-bold text-lg mb-2">If you can't see the source, you can't trust the insight.</p>
                                    <p className="text-blue-100 mb-6">We're building the Glass Box for private markets.</p>
                                    <Link href="/" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                        samkhya.ai
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="prose prose-invert prose-lg max-w-none break-words overflow-hidden">
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
                <aside className="hidden lg:block relative w-full">
                    <div className="sticky top-24 px-6">
                        <div className="mb-12">
                            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gray-500 mb-4">Contents</h4>
                            <ul className="space-y-3 text-sm font-sans text-gray-400">
                                {isBloomberg ? (
                                    <>
                                        <li className="text-blue-400 pl-2 border-l-2 border-blue-400">I. The Shift</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">II. The Problem With AI</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">III. What This Actually Looks Like</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">IV. What We Believe</li>
                                        <li className="hover:text-gray-200 pl-2 border-l-2 border-transparent transition-colors cursor-pointer">V. The Invitation</li>
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
            <span className="hidden lg:block absolute left-full ml-4 top-0 w-48 xl:w-64 text-sm text-gray-500 font-sans border-l border-blue-500/30 pl-4 py-1">
                <span className="text-blue-400 font-bold mr-2">{id}.</span>
                {content}
            </span>
        </>
    );
}
