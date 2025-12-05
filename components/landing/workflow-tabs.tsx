"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GrowthInvestorsTab from "./growth-investors-tab";

import CvcTab from "./cvc-tab";

import FamilyOfficeTab from "./family-office-tab";

type WorkflowTab = "growth-vc" | "cvc" | "family-office";

interface TabContent {
    id: WorkflowTab;
    label: string;
    headline: string;
    description: string;
    component?: React.ReactNode;
}

const tabs: TabContent[] = [
    {
        id: "growth-vc",
        label: "Growth Investors",
        headline: "Automate the Drudgery.",
        description: "From Government Filings to 3-Statement Model",
        component: <GrowthInvestorsTab />,
    },
    {
        id: "cvc",
        label: "Corporate Venture Funds",
        headline: "Quantify Strategic Fit.",
        description: "Map startups to your business units.",
        component: <CvcTab />,
    },
    {
        id: "family-office",
        label: "Family Office",
        headline: "Vigilance, Automated.",
        description: "Real-time NAV & Portfolio alerts.",
        component: <FamilyOfficeTab />,
    },
];

export default function WorkflowTabs() {
    const [activeTab, setActiveTab] = useState<WorkflowTab>("growth-vc");

    const activeContent = tabs.find((tab) => tab.id === activeTab);

    if (!activeContent) return null;

    return (
        <section className="w-full bg-white py-12 md:scroll-py-14 px-4 md:px-6 transition-colors duration-300 border border-b border-gray-200">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">The Intelligence Engine</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The only workflow built for the specific anxieties of private market investors.
                    </p>
                </div>

                {/* Desktop Tab Navigation */}
                <div className="hidden md:flex gap-8 mb-4 border-b border-gray-200 pb-1 justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-2 text-lg font-medium transition-all duration-300 relative ${activeTab === tab.id
                                ? "text-black"
                                : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Desktop Content Area */}
                <div className="hidden md:block relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {activeContent.component ? (
                                <div className="w-full">
                                    <div className="mb-8 text-center">
                                        <h3 className="text-3xl md:text-4xl mb-3 text-black font-medium">
                                            {activeContent.headline}
                                        </h3>
                                        <p className="text-lg text-gray-600">
                                            {activeContent.description}
                                        </p>
                                    </div>
                                    {activeContent.component}
                                </div>
                            ) : (
                                <div className="border border-gray-200 bg-white p-10 shadow-sm max-w-4xl mx-auto">
                                    <h3 className="text-4xl md:text-5xl mb-6 text-black font-medium">
                                        {activeContent.headline}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {activeContent.description}
                                    </p>
                                    <div className="mt-8 h-64 bg-gray-50 rounded flex items-center justify-center text-gray-400">
                                        Content for {activeContent.label}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Accordion Layout */}
                <div className="md:hidden space-y-4">
                    {tabs.map((tab) => (
                        <div key={tab.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeTab === tab.id ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <div>
                                    <h3 className={`text-lg font-medium mb-1 ${activeTab === tab.id ? "text-black" : "text-gray-600"
                                        }`}>
                                        {tab.label}
                                    </h3>
                                    {activeTab === tab.id && (
                                        <p className="text-sm text-gray-600">{tab.headline}</p>
                                    )}
                                </div>
                                <div className={`transform transition-transform duration-300 ${activeTab === tab.id ? "rotate-180" : ""
                                    }`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeTab === tab.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 pt-0 border-t border-gray-100">
                                            <div className="pt-4">
                                                {tab.component || (
                                                    <div className="p-6 bg-gray-50 rounded text-center text-gray-500">
                                                        Content for {tab.label}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
