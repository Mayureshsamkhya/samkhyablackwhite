"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";

export function Hero() {

    // const onDemoClick = () => {
    // try {
    //   if (typeof window !== "undefined") {
    //     window.open("https://calendly.com/abhiverma/25min", "_blank")
    //   }
    // } catch (e) {
    //   console.error("Navigation failed", e)
    // }
  // }


    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-white  transition-colors duration-300 border-b border-gray-200 ">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] " />

            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-8 md:gap-12 px-4 lg:grid-cols-2 lg:gap-8">
                {/* Left Side: Copy */}
                <div className="flex flex-col justify-center text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-2 mb-2 md:mb-3 mt-4"
                    >
                        {/* <span className="h-px w-6 md:w-8 bg-international-orange" /> */}
                        <span className="font-mono text-[10px] md:text-xs font-medium tracking-wider text-international-orange uppercase">
                            {/* <span className="block text-xs text-[#666666] dark:text-gray-400 mb-2 md:mb-2 uppercase tracking-widest"> */}
                            THE OPERATING SYSTEM FOR PRIVATE MARKET INVESTORS
                        </span>

                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        // className="font- text-4xl font-medium leading-[1.1] tracking-tight text-obsidian sm:text-5xl md:text-6xl mb-4 md:mb-6 font-text-4xl"
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white"
                    >
                        {/* Invest with Conviction.
                        <br />
                        <span className="text-slate-500">Not Just Gut Feel.</span> */}

                        The financial truth for India’s private markets
                        {/* <span className="text-gray-400">Not Just Gut Feel.</span> */}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl text-[#666666] dark:text-gray-400 max-w-md leading-relaxed mb-10"
                    >
                        {/* The only AI platform that reconciles conflicting data sources, structures 10 years of financials, and gives you IC-ready analysis. Every number sourced. */}
                        Samkhya ingests India’s regulatory filings, the numbers companies must report, not just the ones they choose to share and transforms them with AI to surface signals often missed. Conviction, not hope.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col w-full sm:w-auto items-stretch sm:items-start gap-3 sm:flex-row sm:gap-4"
                    >
                        {/* <button className="group relative flex items-center justify-center gap-2 overflow-hidden bg-obsidian px-6 md:px-8 py-3 md:py-4 text-md font-medium text-white transition-all bg-gray-900 hover:shadow-lg" onClick={onDemoClick}>
                            <span className="relative z-10 ">Request Access</span>
                            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button> */}
                        <ContactDialog />
                        {/* <a
                            href="#"
                            className="group relative flex items-center justify-center px-6 py-3 md:py-4 font- text-sm font-medium border border-gray-300 shadow-md text-gray-600 transition-colors hover:text-obsidian"
                        >
                            <span>See the Case Study</span>
                            <span className="absolute bottom-2 md:bottom-3 left-6 h-px w-[calc(100%-3rem)] scale-x-0 bg-obsidian transition-transform duration-300 group-hover:scale-x-100" />
                        </a> */}
                        <Link
                            href="/case-study"
                            className="group relative flex items-center justify-center px-6 py-3 md:py-4 font-sans text-md font-medium text-gray-600 transition-colors hover:text-obsidian"
                        >
                            <span>See the Case Study</span>
                            <span className="absolute bottom-2 md:bottom-3 left-6 h-px w-[calc(100%-3rem)] scale-x-0 bg-obsidian transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    </motion.div>

                    {/* Mobile financial X-ray */}
                    <div className="relative flex items-center justify-center perspective-1000 lg:hidden mt-8">
                        <FinancialXRay isMobile={true} />
                    </div>
                </div>

                {/* Right Side: The Visualization (X-Ray Engine) */}
                <div className="relative hidden items-center justify-center perspective-1000 lg:flex">
                    <FinancialXRay isMobile={false} />
                </div>
            </div>
        </section>
    );
}

function FinancialXRay({ isMobile }: { isMobile: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 5, rotateY: -5, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className={`relative w-full max-w-xl rounded-lg md:rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden ${isMobile ? "aspect-square" : "aspect-[4/5] sm:aspect-[4/5] md:aspect-square lg:aspect-[6/5]"
                }`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Layer A: The Chaos (Background) */}
            <div className="absolute inset-0 z-0 opacity-30 overflow-hidden pointer-events-none">
                {/* Scattered Documents */}
                <ScatteredDocuments />
            </div>

            {/* Layer B: The Structure (Foreground) */}
            <div className="absolute inset-0 z-10 flex flex-col bg-white/90 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-3 md:px-4 py-2 md:py-3 bg-gray-50">
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500" />
                        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500" />
                        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="font-mono text-[8px] md:text-[10px] text-gray-500 uppercase tracking-wider">
                        FY 2014 - 2024 FINANCIALS (AUDITED)
                    </div>
                </div>

                {/* Data Grid */}
                <div className="flex-1 overflow-hidden p-2 md:p-4 font-mono text-[9px] md:text-xs text-obsidian">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200  text-gray-500">
                                <th className="py-2 text-left font-medium">METRIC</th>
                                <th className="py-2 text-right font-medium">FY24</th>
                                <th className="py-2 text-right font-medium">FY23</th>
                                <th className="py-2 text-right font-medium">FY22</th>
                                <th className="py-2 text-right font-medium hidden sm:table-cell">FY21</th>
                                <th className="py-2 text-right font-medium hidden sm:table-cell">FY20</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DataRow
                                label="Op. Revenue"
                                values={["₹9,854 Cr", "₹4,500 Cr", "₹2,100 Cr", "₹980 Cr", "₹450 Cr"]}
                                trend="up"
                                highlight
                            />
                            <DataRow
                                label="EBITDA Margin"
                                values={["-2.4%", "-12.1%", "-25.4%", "-40.2%", "-65.1%"]}
                                trend="up"
                                colorCode
                            />
                            <DataRow
                                label="Free Cash Flow"
                                values={["(₹240 Cr)", "(₹540 Cr)", "(₹890 Cr)", "(₹1,200 Cr)", "(₹900 Cr)"]}
                            />
                            <tr className="h-4"><td colSpan={6}></td></tr>
                            <DataRow
                                label="Shareholding"
                                values={["Accel (14%)", "Sequoia (12%)", "Founders (45%)", "ESOP (10%)", "Others (19%)"]}
                                isText
                            />
                            <DataRow
                                label="Compliance"
                                values={["12 Charges", "Clean", "Clean", "Clean", "Clean"]}
                                isText
                            />
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Scanner Animation */}
            <ScannerOverlay />

            {/* Annotation Tags */}
            <AnnotationTag top="35%" left="5%" text="Source: MGT-7, Pg 42" delay={2} />
            <AnnotationTag top="65%" left="5%" text="₹50Cr Loan Facility - HDFC Bank" delay={3.5} />
        </motion.div>
    );
}

function DataRow({ label, values, trend, highlight, colorCode, isText }: { label: string, values: string[], trend?: "up" | "down", highlight?: boolean, colorCode?: boolean, isText?: boolean }) {
    return (
        <tr className={`border-b border-gray-100  ${highlight ? "bg-gray-50/50 " : ""}`}>
            <td className="py-3 font-medium flex items-center gap-2">
                {label}
                {trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
            </td>
            {values.map((val, i) => (
                <td key={i} className={`py-3 text-right ${i > 2 ? "hidden sm:table-cell" : ""} ${colorCode ? (val.includes("-") ? "text-red-500" : "text-green-500") : ""}`}>
                    {val}
                </td>
            ))}
        </tr>
    );
}

function ScannerOverlay() {
    return (
        <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ top: "-10%" }}
            animate={{ top: "120%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
        >
            <div className="h-[2px] w-full bg-international-orange shadow-[0_0_20px_rgba(255,79,0,0.5)]" />
            <div className="h-20 w-full bg-gradient-to-b from-international-orange/10 to-transparent" />
        </motion.div>
    );
}

function AnnotationTag({ top, left, text, delay }: { top: string, left: string, text: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.3, type: "spring" }}
            className="absolute z-30 flex items-center gap-0.5 md:gap-1 bg-white px-1.5 md:px-2 py-0.5 md:py-1 shadow-lg border border-international-orange/20 rounded-sm"
            style={{ top, left }}
        >
            <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-international-orange animate-pulse" />
            <span className="font-mono text-[7px] md:text-[8px] font-medium text-international-orange whitespace-nowrap">
                {text}
            </span>
        </motion.div>
    );
}

function ScatteredDocuments() {
    const [documents, setDocuments] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const docs = [...Array(8)].map((_, i) => ({
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            width: `${Math.random() * 150 + 100}px`,
            height: `${Math.random() * 200 + 150}px`,
            rotate: `${Math.random() * 30 - 15}deg`,
        }));
        setDocuments(docs);
    }, []);

    if (!mounted || documents.length === 0) return null;

    return (
        <>
            {documents.map((doc, i) => (
                <div
                    key={i}
                    className="absolute bg-gray-100 border border-gray-300 p-4 shadow-sm"
                    style={{
                        top: doc.top,
                        left: doc.left,
                        width: doc.width,
                        height: doc.height,
                        transform: `rotate(${doc.rotate})`,
                    }}
                >
                    <div className="space-y-2">
                        <div className="h-2 w-3/4 bg-gray-300 rounded" />
                        <div className="h-2 w-full bg-gray-300 rounded" />
                        <div className="h-2 w-5/6 bg-gray-300 rounded" />
                        <div className="h-2 w-1/2 bg-gray-300 rounded" />
                    </div>
                    <FileText className="absolute bottom-2 right-2 h-6 w-6 text-gray-400" />
                </div>
            ))}
        </>
    );
}
