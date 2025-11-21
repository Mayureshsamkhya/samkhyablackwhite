"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { AlertTriangle, Network, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuditCardProps {
    title: string;
    dataPoints: { label: string; value: string; color: string }[];
    icon: React.ReactNode;
    status: "critical" | "warning" | "success";
    position: string;
}

const AuditCard = ({ title, dataPoints, icon, status, position }: AuditCardProps) => {
    // Samkhya Card Style: High contrast, White background, Thick Black Border (2px)
    // Sharp corners (no huge rounded radii).
    // Typography: Truth = Mono (Machine/Precise).

    const borderColor = "border-black"; // Thick Black Border
    const bgColor = "bg-white";

    // Icon colors for the header
    const iconColor =
        status === "critical"
            ? "text-red-600"
            : status === "warning"
                ? "text-orange-600"
                : "text-emerald-600";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
                "absolute z-30 w-72 md:w-80 p-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black bg-white",
                position
            )}
        >
            {/* Header */}
            <div className="flex items-center gap-3 p-3 border-b-2 border-black bg-gray-50">
                <div className={cn("p-1", iconColor)}>{icon}</div>
                <span className="text-xs font-bold uppercase tracking-wider text-black font-mono">
                    SAMKHYA AUDIT
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
                <div className="font-mono text-sm font-bold text-black uppercase tracking-tight">
                    {title}
                </div>
                <div className="space-y-3">
                    {dataPoints.map((point, idx) => (
                        <div key={idx} className="space-y-1">
                            <div className="text-[10px] font- uppercase tracking-widest text-gray-600 font-bold font-mono">
                                {point.label}
                            </div>
                            <div className={cn("font-mono text-xs leading-relaxed font-medium", point.color)}>
                                {point.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Connector Line (Visual only, simplified) */}
            <div className="absolute top-4 -left-3 w-3 h-0.5 bg-black" />
        </motion.div>
    );
};

export const VerificationAudit_Light = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.4 });
    const [hoveredClaim, setHoveredClaim] = useState<number | null>(null);
    const [visibleStep, setVisibleStep] = useState(0);

    useEffect(() => {
        if (isInView) {
            const t1 = setTimeout(() => setVisibleStep(1), 500);
            const t2 = setTimeout(() => setVisibleStep(2), 1500);
            const t3 = setTimeout(() => setVisibleStep(3), 2500);
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
            };
        } else {
            setVisibleStep(0);
        }
    }, [isInView]);

    const claims = [
        {
            id: 1,
            text: "The company shows strong financial stability",
            vague: true,
            audit: {
                title: "FINANCIAL RISK DETECTED",
                status: "warning" as const,
                icon: <AlertTriangle className="w-5 h-5" />,
                // Position: Pop up connected to the highlight
                position: "-top-16 md:-top-20 left-0 md:left-[60%] md:-top-24",
                dataPoints: [
                    {
                        label: "open_charges",
                        value: "⚠️ FLAG: ₹45 Cr Charge Pending (HDFC Bank, Aug '24)",
                        color: "text-orange-700",
                    },
                ],
            },
        },
        {
            id: 2,
            text: "led by a standard board of directors.",
            vague: true,
            audit: {
                title: "GOVERNANCE CONFLICT",
                status: "critical" as const,
                icon: <Network className="w-5 h-5" />,
                position: "top-8 md:top-12 left-0 md:left-[40%] z-40",
                dataPoints: [
                    {
                        label: "director_network",
                        value: "🚨 NETWORK ALERT: Director linked to 2 struck-off entities.",
                        color: "text-red-700",
                    },
                ],
            },
        },
        {
            id: 3,
            text: "revenue estimated between $5M-$10M.",
            vague: true,
            audit: {
                title: "VERIFIED FINANCIALS",
                status: "success" as const,
                icon: <FileCheck className="w-5 h-5" />,
                position: "bottom-0 left-0 md:left-[50%] translate-y-1/3 md:translate-y-1/2",
                dataPoints: [
                    {
                        label: "financials_fy24",
                        value: "✅ VERIFIED: ₹42.18 Cr (FY24). Source: MCA Filing.",
                        color: "text-emerald-700",
                    },
                ],
            },
        },
    ];

    return (
        <section className="w-full py-1  text-black overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid-black.svg')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-20 text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font- font-bold tracking-widest uppercase text-gray-600 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse" />
                        The Auditor's Desk
                    </motion.div>

                    {/* <h2 className="text-3xl md:text-4xl lg:text-6xl font- font-bold tracking-tighter text-black">
                        Pretty stories vs. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600">
                            Brutal truth.
                        </span>
                    </h2> */}
                    <h2 className="text-3xl md:text-5xl font-bold font- text-black mb-6 tracking-tight">Pretty stories vs. 
                        {/* <span className="ms-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600"> */}
                        {/* <span className="ms-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600"> */}
                            Brutal truth.
                        {/* </span> */}
                        </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font- ">
                        Generic AI gives you a readable summary. Samkhya gives you the audit-ready reality.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto" ref={containerRef}>
                    {/* Paper/Document Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative bg-white text-gray-900 p-6 md:p-12 lg:p-20 rounded-sm shadow-xl border border-gray-100 font- min-h-[500px]"
                    >
                        {/* Document Header */}
                        <div className="flex justify-between items-end border-b-2 border-gray-900 mb-12 pb-4">
                            <div>
                                <div className="font- font-black text-2xl md:text-3xl tracking-tighter uppercase">Investment Memo</div>
                                <div className="font- italic text-gray-600 mt-1 text-xs md:text-sm">Generated by Generic LLM • Nov 21, 2025</div>
                            </div>
                            <div className="font- font-mono text-[10px] md:text-xs font-bold text-gray-600 border border-gray-200 px-2 py-1 rounded">
                                DOC_ID: 882-XJ-99
                            </div>
                        </div>

                        {/* Content - Story = Serif (Human/Vague) */}
                        <div className="space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 font-">
                            <div className="mb-8">
                                <span
                                    className="relative inline-block cursor-help group"
                                    onMouseEnter={() => setHoveredClaim(1)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-300 px-1 rounded-sm",
                                        (visibleStep >= 1 || hoveredClaim === 1)
                                            ? "bg-red-100 text-red-900 decoration-red-300 underline decoration-2 underline-offset-4"
                                            : "hover:bg-gray-100"
                                    )}>
                                        {claims[0].text}
                                    </span>
                                    <AnimatePresence>
                                        {(visibleStep >= 1 || hoveredClaim === 1) && (
                                            <AuditCard {...claims[0].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                despite recent market fluctuations. The operational efficiency has improved significantly over the last quarter.
                            </div>

                            <div className="mb-8">
                                The organization is
                                {" "}
                                <span
                                    className="relative inline-block cursor-help group"
                                    onMouseEnter={() => setHoveredClaim(2)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-300 px-1 rounded-sm",
                                        (visibleStep >= 2 || hoveredClaim === 2)
                                            ? "bg-red-100 text-red-900 decoration-red-300 underline decoration-2 underline-offset-4"
                                            : "hover:bg-gray-100"
                                    )}>
                                        {claims[1].text}
                                    </span>
                                    <AnimatePresence>
                                        {(visibleStep >= 2 || hoveredClaim === 2) && (
                                            <AuditCard {...claims[1].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                Governance structures appear adequate for a company of this size, with regular filings.
                            </div>

                            <div>
                                Current financial models indicate
                                {" "}
                                <span
                                    className="relative inline-block cursor-help group"
                                    onMouseEnter={() => setHoveredClaim(3)}
                                    onMouseLeave={() => setHoveredClaim(null)}
                                >
                                    <span className={cn(
                                        "transition-all duration-300 px-1 rounded-sm",
                                        (visibleStep >= 3 || hoveredClaim === 3)
                                            ? "bg-red-100 text-red-900 decoration-red-300 underline decoration-2 underline-offset-4"
                                            : "hover:bg-gray-100"
                                    )}>
                                        {claims[2].text}
                                    </span>
                                    <AnimatePresence>
                                        {(visibleStep >= 3 || hoveredClaim === 3) && (
                                            <AuditCard {...claims[2].audit} />
                                        )}
                                    </AnimatePresence>
                                </span>
                                {" "}
                                based on sector benchmarks and projected growth rates.
                            </div>
                        </div>

                        {/* Watermark/Footer */}
                        <div className="absolute bottom-4 md:bottom-8 right-6 md:right-12 opacity-[0.07] font- font-black text-4xl md:text-6xl -rotate-12 pointer-events-none select-none">
                            UNVERIFIED
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
