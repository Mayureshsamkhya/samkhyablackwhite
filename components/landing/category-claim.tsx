// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Shield, Zap, Filter, FileText, CheckCircle2 } from "lucide-react";

// export const CategoryClaim = () => {
//     const [activeItem, setActiveItem] = useState(0);

//     const items = [
//         {
//             id: 0,
//             title: "No Black Boxes.",
//             description: "Every insight is linked to a verifiable source document.",
//             icon: Shield,
//         },
//         {
//             id: 1,
//             title: "No Data Lag.",
//             description: "Real-time agents, not quarterly databases.",
//             icon: Zap,
//         },
//         {
//             id: 2,
//             title: "No Noise.",
//             description: "Proprietary financial reasoning models, not generic LLMs.",
//             icon: Filter,
//         },
//     ];

//     return (
//         <section className="relative w-full bg-white py-24 overflow-hidden border-t border-slate-100">
//             {/* Background Grid */}
//             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
//             <div className="absolute inset-0 bg-grid-slate-100 bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

//             <div className="container mx-auto px-4 md:px-6 relative z-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Column: Copy & List */}
//                     <div className="space-y-8">
//                         <div className="space-y-4">
//                             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
//                                 Generic AI Hallucinates. <br />
//                                 <span className="text-black drop-shadow-sm">
//                                     Samkhya Verifies.
//                                 </span>
//                             </h2>
//                             <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-md leading-relaxed">
//                                 You are making ₹100 Cr decisions. You can't afford "creative"
//                                 answers.
//                             </p>
//                         </div>

//                         <div className="space-y-4">
//                             {items.map((item, index) => (
//                                 <div
//                                     key={item.id}
//                                     onMouseEnter={() => setActiveItem(index)}
//                                     className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${activeItem === index
//                                         ? "bg-slate-50 border-electric-blue/50 shadow-sm"
//                                         : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200"
//                                         }`}
//                                 >
//                                     <div className="flex items-start gap-4">
//                                         <div
//                                             className={`p-2 rounded-lg transition-colors ${activeItem === index
//                                                 ? "bg-slate-100 text-black"
//                                                 : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
//                                                 }`}
//                                         >
//                                             <item.icon className="w-6 h-6" />
//                                         </div>
//                                         <div>
//                                             <h3
//                                                 className={`text-lg font-semibold transition-colors ${activeItem === index ? "text-black" : "text-gray-600"
//                                                     }`}
//                                             >
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-gray-600 text-sm mt-1">
//                                                 {item.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right Column: Interactive Visual */}
//                     <div className="h-[350px] md:h-[500px] w-full relative flex items-center justify-center bg-slate-50/50 rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden">
//                         <div className="absolute inset-0 bg-grid-slate-200/50 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
//                         <AnimatePresence mode="wait">
//                             {activeItem === 0 && <TetherVisual key="tether" />}
//                             {activeItem === 1 && <NoLagVisual key="nolag" />}
//                             {activeItem === 2 && <NoNoiseVisual key="nonoise" />}
//                         </AnimatePresence>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// const TetherVisual = () => {
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="relative w-full h-full flex items-center justify-center"
//         >
//             {/* Source Document (Background) - Adjusted for mobile */}
//             <motion.div
//                 initial={{ x: 50, opacity: 0, rotateY: 10 }}
//                 animate={{ x: [80, 160], opacity: 1, rotateY: -10 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="absolute w-48 h-64 md:w-64 md:h-80 bg-white border border-slate-200 rounded-lg p-3 md:p-4 shadow-lg transform perspective-1000"
//             >
//                 <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4 opacity-50">
//                     <FileText className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
//                     <div className="h-1.5 md:h-2 w-16 md:w-20 bg-slate-200 rounded-full"></div>
//                 </div>
//                 <div className="space-y-1.5 md:space-y-2">
//                     {[...Array(8)].map((_, i) => (
//                         <div
//                             key={i}
//                             className={`h-1.5 md:h-2 rounded-full w-full ${i === 4 ? "bg-terminal-green/20 shadow-sm" : "bg-slate-100"
//                                 }`}
//                         ></div>
//                     ))}
//                 </div>
//             </motion.div>

//             {/* Insight Card (Foreground) - Adjusted for mobile */}
//             <motion.div
//                 initial={{ x: -50, scale: 0.9, opacity: 0 }}
//                 animate={{ x: [-60, -120], scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="absolute z-20 w-60 md:w-72 bg-white border border-slate-200 rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl"
//             >
//                 <div className="flex justify-between items-start mb-3 md:mb-4">
//                     <div className="text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-wider">
//                         Key Insight
//                     </div>
//                     <div className="bg-electric-blue/10 text-electric-blue text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 md:py-1 rounded-full border border-electric-blue/20">
//                         CONFIDENCE: HIGH
//                     </div>
//                 </div>
//                 <div className="text-gray-600 text-xs md:text-sm mb-1">Revenue Growth (YoY)</div>
//                 <div className="text-3xl md:text-4xl font-bold text-black tracking-tight flex items-center gap-2">
//                     24.5%
//                     <div className="relative flex h-3 w-3">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-3 w-3 bg-terminal-green"></span>
//                     </div>
//                 </div>
//             </motion.div>

//             {/* Tether Line - Updated path for wider separation */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
//                 <motion.path
//                     d="M 200 250 C 300 250, 300 220, 450 220" // Adjusted for new positions
//                     fill="none"
//                     stroke="url(#gradient)"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0, opacity: 0 }}
//                     animate={{ pathLength: 1, opacity: 1 }}
//                     transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
//                 />
//                 <defs>
//                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                         <stop offset="0%" stopColor="#3B82F6" />
//                         <stop offset="100%" stopColor="#10B981" />
//                     </linearGradient>
//                 </defs>
//             </svg>

//             {/* Verified Badge - Repositioned */}
//             <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.8 }}
//                 className="absolute top-[42%] left-[50%] -translate-x-1/2 bg-white border border-terminal-green/30 text-terminal-green text-xs px-2 py-1 rounded-full shadow-sm flex items-center gap-1 z-30"
//             >
//                 <CheckCircle2 className="w-3 h-3" />
//                 Verified Source
//             </motion.div>
//         </motion.div>
//     );
// };

// const NoLagVisual = () => {
//     const [events, setEvents] = useState([
//         { id: 1, text: "Reliance Industries: 10-K Filed", time: "Just now" },
//         { id: 2, text: "HDFC Bank: Insider Trade", time: "2s ago" },
//         { id: 3, text: "Infosys: Press Release", time: "5s ago" },
//     ]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const newEvents = [
//                 "TCS: Dividend Declared",
//                 "Wipro: CEO Statement",
//                 "Adani Ent: Q3 Earnings",
//                 "Bajaj Finance: Rate Hike",
//                 "Kotak Bank: New Branch",
//             ];
//             const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
//             setEvents((prev) => [
//                 { id: Date.now(), text: randomEvent, time: "Just now" },
//                 ...prev.slice(0, 4),
//             ]);
//         }, 1500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative w-full h-full flex flex-col p-6 overflow-hidden">
//             <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
//                     <span className="text-xs font-mono text-terminal-green uppercase tracking-wider">
//                         Live Event Stream
//                     </span>
//                 </div>
//                 <span className="text-xs text-slate-400 font-mono">LATENCY: 14ms</span>
//             </div>
//             <div className="space-y-3 relative z-10">
//                 <AnimatePresence initial={false}>
//                     {events.map((event) => (
//                         <motion.div
//                             key={event.id}
//                             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//                             animate={{ opacity: 1, y: 0, scale: 1 }}
//                             exit={{ opacity: 0, y: -20, scale: 0.95 }}
//                             transition={{ duration: 0.4 }}
//                             className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm flex justify-between items-center"
//                         >
//                             <span className="text-sm text-black font-medium">
//                                 {event.text}
//                             </span>
//                             <span className="text-xs text-slate-400 font-mono">
//                                 {event.time}
//                             </span>
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>
//             {/* Gradient fade at bottom */}
//             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
//         </div>
//     );
// };

// const CountingNumber = ({ value }: { value: number }) => {
//     // Simple simulation of changing numbers
//     const [count, setCount] = useState(value);

//     // In a real app, use a proper hook or animation library for numbers
//     return <span>{count}</span>;
// }


// const NoNoiseVisual = () => {
//     return (
//         <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
//             <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full">
//                 {/* Raw Input */}
//                 <div className="flex-1 w-full space-y-2 opacity-50 blur-[1px]">
//                     {["Analyst rumors...", "Twitter speculation...", "Unverified report...", "Market gossip..."].map((text, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ x: -20, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             transition={{ delay: i * 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
//                             className="text-[10px] md:text-xs text-slate-400 font-mono bg-slate-100 p-1.5 md:p-2 rounded"
//                         >
//                             {text}
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* Filter Lens */}
//                 <div className="relative z-10 flex flex-col items-center justify-center">
//                     <div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-neon-purple rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] z-20">
//                         <Filter className="w-4 h-4 md:w-5 md:h-5 text-neon-purple" />
//                     </div>
//                 </div>

//                 {/* Structured Output */}
//                 <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                     className="flex-1 w-full bg-white border border-neon-purple/30 p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg"
//                 >
//                     <div className="text-[9px] md:text-[10px] text-neon-purple font-bold uppercase tracking-wider mb-1">
//                         Verified Signal
//                     </div>
//                     <div className="text-base md:text-lg font-bold text-black">
//                         EPS: ₹45.2
//                     </div>
//                     <div className="text-[10px] md:text-xs text-slate-500 mt-1">
//                         Source: Q3 Filing (Pg. 12)
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };





"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Zap, Filter,   FileText, AlertTriangle, Calculator, CheckCircle2,  } from "lucide-react";

export const CategoryClaim = () => {
    const [activeItem, setActiveItem] = useState(0);

    const items = [
        {
            id: 0,
            title: "No Black Boxes.",
            description: "Every insight is linked to a verifiable source document.",
            icon: Shield,
        },
        {
            id: 1,
            title: "No Data Lag.",
            description: "Real-time agents, not quarterly databases.",
            icon: Zap,
        },
        {
            id: 2,
            title: "No Noise.",
            description: "Proprietary financial reasoning models, not generic LLMs.",
            icon: Filter,
        },
    ];

    return (
        <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden border-t border-slate-100">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-grid-slate-100 bg-[length:50px_50px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
                    {/* Left Column: Copy & List */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-3 md:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
                                Generic AI Hallucinates. <br />
                                <span className="text-black drop-shadow-sm">
                                    Samkhya Verifies.
                                </span>
                            </h2>
                            <p className="text-xl text-[#666666] dark:text-gray-400 max-w-md leading-relaxed mb-10">
                                You are making ₹100 Cr decisions. You can't afford "creative"
                                answers.
                            </p>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveItem(index)}
                                    onClick={() => setActiveItem(index)}
                                    className={`group p-3 sm:p-4 rounded-lg md:rounded-xl border transition-all duration-300 cursor-pointer ${
                                        activeItem === index
                                            ? "bg-slate-50 border-electric-blue/50 shadow-sm"
                                            : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200"
                                    }`}
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div
                                            className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                                                activeItem === index
                                                    ? "bg-slate-100 text-black"
                                                    : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                                            }`}
                                        >
                                            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div>
                                            <h3
                                                className={`text-base sm:text-lg font-semibold transition-colors ${
                                                    activeItem === index ? "text-black" : "text-gray-600"
                                                }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Interactive Visual */}
                    <div className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full relative flex items-center justify-center bg-slate-50/50 rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-100 overflow-hidden">
                        <div className="absolute inset-0 bg-grid-slate-200/50 bg-[length:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                        <AnimatePresence mode="wait">
                            {activeItem === 0 && <TetherVisual key="tether" />}
                            {activeItem === 1 && <NoLagVisual key="nolag" />}
                            {activeItem === 2 && <NoNoiseVisual key="nonoise" />}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TetherVisual = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center px-2 sm:px-4"
        >
            {/* Source Document (Background) */}
            <motion.div
                initial={{ x: 30, opacity: 0, rotateY: 10 }}
                animate={{ x: [40, 80], opacity: 1, rotateY: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-32 h-48 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 bg-white border border-slate-200 rounded-lg p-2 sm:p-3 md:p-4 shadow-lg transform perspective-1000"
                style={{ willChange: "transform" }}
            >
                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4 opacity-50">
                    <FileText className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-slate-400" />
                    <div className="h-1 sm:h-1.5 md:h-2 w-12 sm:w-16 md:w-20 bg-slate-200 rounded-full"></div>
                </div>
                <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 sm:h-1.5 md:h-2 rounded-full w-full ${
                                i === 4 ? "bg-terminal-green/20 shadow-sm" : "bg-slate-100"
                            }`}
                        ></div>
                    ))}
                </div>
            </motion.div>

            {/* Insight Card (Foreground) */}
            <motion.div
                initial={{ x: -30, scale: 0.9, opacity: 0 }}
                animate={{ x: [-40, -80], scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute z-20 w-48 sm:w-60 md:w-64 lg:w-72 bg-white border border-slate-200 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 shadow-xl"
                style={{ willChange: "transform" }}
            >
                <div className="flex justify-between items-start mb-2 sm:mb-3 md:mb-4">
                    <div className="text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-600 uppercase tracking-wider">
                        Key Insight
                    </div>
                    <div className="bg-electric-blue/10 text-electric-blue text-[8px] sm:text-[9px] md:text-[10px] px-1 sm:px-1.5 md:px-2 py-0.5 md:py-1 rounded-full border border-electric-blue/20">
                        CONFIDENCE: HIGH
                    </div>
                </div>
                <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm mb-1">Revenue Growth (YoY)</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight flex items-center gap-2">
                    24.5%
                    <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-terminal-green"></span>
                    </div>
                </div>
            </motion.div>

            {/* Tether Line - Responsive path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <motion.path
                    d="M 35% 50% C 45% 50%, 55% 45%, 65% 45%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Verified Badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute top-[42%] left-[50%] -translate-x-1/2 bg-white border border-terminal-green/30 text-terminal-green text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-sm flex items-center gap-1 z-30"
            >
                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span className="hidden sm:inline">Verified Source</span>
                <span className="sm:hidden">Verified</span>
            </motion.div>
        </motion.div>
    );
};

const NoLagVisual = () => {
    const [events, setEvents] = useState([
        { id: 1, text: "Reliance Industries: 10-K Filed", time: "Just now" },
        { id: 2, text: "HDFC Bank: Insider Trade", time: "2s ago" },
        { id: 3, text: "Infosys: Press Release", time: "5s ago" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newEvents = [
                "TCS: Dividend Declared",
                "Wipro: CEO Statement",
                "Adani Ent: Q3 Earnings",
                "Bajaj Finance: Rate Hike",
                "Kotak Bank: New Branch",
            ];
            const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
            setEvents((prev) => [
                { id: Date.now(), text: randomEvent, time: "Just now" },
                ...prev.slice(0, 4),
            ]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex flex-col p-3 sm:p-4 md:p-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-terminal-green rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-mono text-terminal-green uppercase tracking-wider">
                        Live Event Stream
                    </span>
                </div>
                <span className="text-[9px] sm:text-xs text-slate-400 font-mono">LATENCY: 14ms</span>
            </div>
            <div className="space-y-2 sm:space-y-3 relative z-10">
                <AnimatePresence initial={false}>
                    {events.slice(0, 5).map((event) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white border border-slate-200 p-2 sm:p-3 rounded-md sm:rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0"
                            style={{ willChange: "transform" }}
                        >
                            <span className="text-xs sm:text-sm text-black font-medium">
                                {event.text}
                            </span>
                            <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                                {event.time}
                            </span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
        </div>
    );
};

const NoNoiseVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full">
                {/* Raw Input */}
                <div className="flex-1 w-full space-y-1.5 sm:space-y-2 opacity-50 blur-[0.5px] sm:blur-[1px]">
                    {["Analyst rumors...", "Twitter speculation...", "Unverified report...", "Market gossip..."].map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                            className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 font-mono bg-slate-100 p-1 sm:p-1.5 md:p-2 rounded"
                        >
                            {text}
                        </motion.div>
                    ))}
                </div>

                {/* Filter Lens */}
                <div className="relative z-10 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white border border-neon-purple rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] sm:shadow-[0_0_20px_rgba(139,92,246,0.3)] z-20">
                        <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-neon-purple" />
                    </div>
                </div>

                {/* Structured Output */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex-1 w-full bg-white border border-neon-purple/30 p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg"
                    style={{ willChange: "transform" }}
                >
                    <div className="text-[8px] sm:text-[9px] md:text-[10px] text-neon-purple font-bold uppercase tracking-wider mb-0.5 sm:mb-1">
                        Verified Signal
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-bold text-black">
                        EPS: ₹45.2
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 mt-0.5 sm:mt-1">
                        Source: Q3 Filing (Pg. 12)
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
