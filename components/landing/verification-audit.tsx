"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, Network, AlertTriangle, FileSearch } from "lucide-react";
import { cn } from "@/lib/utils";

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
                "absolute z-20 w-72 md:w-80 p-4 rounded-lg backdrop-blur-md shadow-2xl border",
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

export const VerificationAudit = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.4 });
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
        <section className="w-full py-24 bg-[#05050A] text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400"
                    >
                        <FileSearch className="w-3 h-3" />
                        <span>THE RED PEN AUDIT</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Generic AI guesses. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Samkhya verifies.
                        </span>
                    </h2>
                </div>

                <div className="relative max-w-3xl mx-auto" ref={containerRef}>
                    {/* Paper/Document Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-white text-black p-8 md:p-16 rounded-sm shadow-2xl font-sans min-h-[400px]"
                    >
                        {/* Header of the "Document" */}
                        <div className="flex justify-between items-end border-b-2 border-black mb-8 pb-2">
                            <div className="font-sans font-bold text-2xl tracking-tighter">GENERATED REPORT</div>
                            <div className="font-mono text-xs text-gray-500">ID: 882-XJ-99</div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800 font-sans italic">
                            <p>
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
                            </p>

                            <p>
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
                            </p>

                            <p>
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
                            </p>
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
