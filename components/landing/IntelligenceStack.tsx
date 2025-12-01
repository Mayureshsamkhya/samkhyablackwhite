"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, AlertTriangle, FileSearch, ArrowDown, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

// --- Audit Card Component (Reused) ---
interface AuditCardProps {
    title: string;
    dataPoints: { label: string; value: string; color: string }[];
    icon: React.ReactNode;
    status: "critical" | "warning" | "success";
    position: string;
}

const AuditCard = ({ title, dataPoints, icon, status, position }: AuditCardProps) => {
    const borderColor =
        status === "critical"
            ? "border-red-500/50"
            : status === "warning"
                ? "border-orange-500/50"
                : "border-emerald-500/50";

    const iconColor =
        status === "critical"
            ? "text-red-500"
            : status === "warning"
                ? "text-orange-500"
                : "text-emerald-500";

    const bgColor =
        status === "critical"
            ? "bg-red-950/90"
            : status === "warning"
                ? "bg-orange-950/90"
                : "bg-emerald-950/90";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
                "absolute z-40 w-72 md:w-80 p-4 rounded-lg backdrop-blur-md shadow-xl border",
                borderColor,
                bgColor,
                position
            )}
        >
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                <div className={cn("p-1.5 rounded-md bg-white/5", iconColor)}>{icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                    Samkhya Intelligence
                </span>
            </div>

            <div className="space-y-3">
                {dataPoints.map((point, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
                            {point.label}
                        </div>
                        <div className={cn("font-mono text-xs md:text-sm leading-relaxed", point.color)}>
                            {point.value}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export const IntelligenceVerification = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const [hoveredClaim, setHoveredClaim] = useState<number | null>(null);

    const claims = [
        {
            id: 1,
            text: "The company appears financially stable.",
            vague: true,
            audit: {
                title: "Financial Risk Detected",
                status: "warning" as const,
                icon: <AlertTriangle className="w-4 h-4" />,
                position: "-top-24 left-0 md:-left-4 md:-top-32",
                dataPoints: [
                    {
                        label: "open_charges",
                        value: "⚠️ ₹45 Cr Charge (HDFC Bank, 12-Aug-2024)",
                        color: "text-orange-400",
                    },
                    {
                        label: "credit_ratings",
                        value: "Downgraded to BBB- (CRISIL)",
                        color: "text-orange-300",
                    },
                ],
            },
        },
        {
            id: 2,
            text: "Standard board composition.",
            vague: true,
            audit: {
                title: "Governance Conflict",
                status: "critical" as const,
                icon: <ShieldAlert className="w-4 h-4" />,
                position: "top-12 -right-4 md:-right-12",
                dataPoints: [
                    {
                        label: "director_network",
                        value: "🚨 Conflict: Director A linked to 2 struck-off entities.",
                        color: "text-red-400",
                    },
                    {
                        label: "related_party_transactions",
                        value: "₹12 Cr Related Party Loan Detected.",
                        color: "text-red-300",
                    },
                ],
            },
        },
        {
            id: 3,
            text: "Revenue estimated at $5M-$10M.",
            vague: true,
            audit: {
                title: "Verified Financials",
                status: "success" as const,
                icon: <CheckCircle2 className="w-4 h-4" />,
                position: "bottom-0 left-4 md:left-12 translate-y-full pt-4",
                dataPoints: [
                    {
                        label: "financials_fy24",
                        value: "✅ Verified Revenue: ₹42.18 Cr",
                        color: "text-[#10B981]",
                    },
                    {
                        label: "auditor_name",
                        value: "Deloitte Haskins & Sells",
                        color: "text-emerald-300",
                    },
                ],
            },
        },
    ];

    return (
        <section className="w-full pt-24 pb-32 bg-white text-gray-900 overflow-hidden relative border-b border-gray-200">


            <div className="max-w-6xl mx-auto px-6">

                {/* --- PART 1: THE STACK --- */}
                <div className="mb-12 text-center space-y-6">
                    <SectionHeader
                        title="The Intelligence Stack"
                        description="Built to reason, not just predict. Our purpose-built architecture transforms unstructured regulatory filings into audit-ready intelligence."
                        maxWidth="3xl"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 relative z-10 max-w-5xl mx-auto"
                    >
                        <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
                            <Image
                                src="/aidemo.png"
                                // src="/intelligence-stack.png"
                                alt="Intelligence Stack Architecture"
                                width={1300}
                                height={800}
                                className="w-full h-auto"
                            />
                            {/* Overlay gradient to blend bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* --- CONNECTOR --- */}
                <div className="relative h-48 flex justify-center items-center my-[-2rem] z-20">
                    {/* Animated Stream Line */}
                    <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-100/0 via-indigo-200 to-indigo-100/0">
                        <motion.div
                            animate={{ y: [0, 200] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-indigo-500 blur-sm"
                        />
                    </div>

                    {/* Badge */}
                    <div className="relative bg-white border border-indigo-100 px-4 py-2 rounded-full text-xs font-mono text-gray-600 shadow-lg shadow-indigo-100">
                        PROCESSING TRUTH
                    </div>
                </div>

                {/* --- PART 2: THE AUDIT --- */}
                <div className="mt-12 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-emerald-100 text-xs font-medium text-gray-600"
                    >
                        <FileSearch className="w-3 h-3" />
                        <span>THE RESULT</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-500">
                        Zero hallucination. <br />
                        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                            100% Auditable.
                        </span> */}
                        <span className="font-bold  text-gray-900">
                            100% Auditable.
                        </span>
                    </h2>
                </div>

                <div className="relative max-w-3xl mx-auto mt-16" ref={containerRef}>
                    {/* Paper/Document Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-white text-black p-8 md:p-16 rounded-sm shadow-xl font-sans min-h-[400px]"
                    >
                        {/* Header of the "Document" */}
                        <div className="flex justify-between items-end border-b-2 border-black mb-8 pb-2">
                            <div className="font-sans font-bold text-2xl tracking-tighter">GENERATED REPORT</div>
                            <div className="font-mono text-xs text-gray-500">ID: 882-XJ-99</div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 font-sans italic ">
                            <div className="mb-6">
                                Based on available public data, the target entity shows promising signs of growth.
                                {" "}
                                <span
                                    className="relative inline-block cursor-pointer group"
                                    onMouseEnter={() => setHoveredClaim(1)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-500 decoration-2 underline-offset-4",
                                        (isInView || hoveredClaim === 1) ? "underline decoration-red-500 decoration-wavy text-red-700 bg-red-50" : ""
                                    )}>
                                        {claims[0].text}
                                    </span>
                                    <AnimatePresence>
                                        {(isInView || hoveredClaim === 1) && (
                                            <AuditCard {...claims[0].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                Market sentiment is generally positive, though specific details are scarce.
                            </div>

                            <div className="mb-6">
                                The leadership team has a
                                {" "}
                                <span
                                    className="relative inline-block cursor-pointer group"
                                    onMouseEnter={() => setHoveredClaim(2)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-500 decoration-2 underline-offset-4",
                                        (isInView || hoveredClaim === 2) ? "underline decoration-red-500 decoration-wavy text-red-700 bg-red-50" : ""
                                    )}>
                                        {claims[1].text}
                                    </span>
                                    <AnimatePresence>
                                        {(isInView || hoveredClaim === 2) && (
                                            <AuditCard {...claims[1].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                with no immediate red flags visible in standard searches.
                            </div>

                            <div>
                                Regarding financial performance,
                                {" "}
                                <span
                                    className="relative inline-block cursor-pointer group"
                                    onMouseEnter={() => setHoveredClaim(3)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-500 decoration-2 underline-offset-4",
                                        (isInView || hoveredClaim === 3) ? "underline decoration-red-500 decoration-wavy text-red-700 bg-red-50" : ""
                                    )}>
                                        {claims[2].text}
                                    </span>
                                    <AnimatePresence>
                                        {(isInView || hoveredClaim === 3) && (
                                            <AuditCard {...claims[2].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                suggesting a mid-sized operation.
                            </div>
                        </div>

                        {/* Watermark/Footer */}
                        <div className="absolute bottom-4 right-8 opacity-10 font-sans font-bold text-4xl -rotate-12 pointer-events-none">
                            UNVERIFIED
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
