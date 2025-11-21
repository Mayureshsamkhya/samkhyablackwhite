import React from 'react';
import { FileText, Shield, Check, Zap } from 'lucide-react';

export function SocialProof() {
    return (
        <section className="py-20 bg-white  border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    {/* <h2 className="font- text-sm font-semibold tracking-[0.2em] text-gray-600 uppercase">
                        Trusted by Forward-Thinking Capital Allocators
                    </h2> */}
                    <h2  className="text-3xl md:text-5xl font-bold font- text-black mb-6 tracking-tight">Trusted by Forward-Thinking Capital Allocators</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: The Velocity Engine (Accenture Ventures) */}
                    <div className="group relative bg-white border border-gray-200 p-8 rounded-sm hover:border-gray-300 transition-colors duration-300">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-12">
                            <div>
                                <h3 className="text-black font- text-lg font-medium tracking-wide">Accenture Ventures</h3>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                                    <span className="text-xs font-bold font-mono text-green-700 uppercase tracking-wide">DEPLOYED</span>
                                </div>
                            </div>
                            <Zap className="w-5 h-5 text-black opacity-80" />
                        </div>

                        {/* Visual: Timeline Collapse */}
                        <div className="space-y-6 mb-12">
                            {/* Standard Diligence */}
                            <div className="relative">
                                <div className="flex justify-between text-xs font-bold font-mono text-gray-500 mb-2 uppercase tracking-wide">
                                    <span>Standard: 8 Weeks</span>
                                </div>
                                <div className="h-3 w-full bg-gray-50 rounded-sm overflow-hidden border border-dashed border-gray-300">
                                    <div className="h-full w-full bg-gray-200/50"></div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center -my-2 relative z-10">
                                <div className="bg-white px-2 text-[10px] font-bold font-mono text-indigo-600 border border-indigo-100 rounded-sm uppercase tracking-wide">
                                    87% Efficiency Gain
                                </div>
                            </div>

                            {/* Samkhya Engine */}
                            <div className="relative">
                                <div className="flex justify-between text-xs font-bold font-mono text-indigo-600 mb-2 uppercase tracking-wide">
                                    <span>Samkhya: 5 Days</span>
                                </div>
                                <div className="h-3 w-full bg-indigo-50 rounded-sm overflow-hidden border border-indigo-100">
                                    <div className="h-full w-[10%] bg-indigo-600"></div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                            <div className="text-xs font- font-bold font-mono text-gray-600 uppercase tracking-wide">
                                Deployment Timeline
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font- font-mono text-black font-bold">12x</div>
                                <div className="text-[10px] font- text-gray-600 uppercase tracking-wider font-bold">Faster Execution</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: The Verification Audit (Upekkha) */}
                    <div className="group relative bg-white border border-gray-200 p-8 rounded-sm hover:border-gray-300 transition-colors duration-300">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <h3 className="text-black font- text-lg font-medium tracking-wide">Upekkha</h3>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-bold font-mono bg-green-100 text-green-800 border border-green-200 uppercase tracking-wide">
                                        IC-READY
                                    </span>
                                </div>
                            </div>
                            <Shield className="w-5 h-5 text-black opacity-80" />
                        </div>

                        {/* Visual: Document Audit */}
                        <div className="relative mb-10 p-6 bg-gray-50 border border-gray-200 rounded-sm">
                            {/* Document Icon & Overlay */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <FileText className="w-10 h-10 text-gray-400 stroke-1" />
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-green-200 shadow-sm">
                                        <div className="bg-green-100 p-0.5 rounded-full">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font- text-black font-mono font-medium">Investment Memo.pdf</div>
                                    <div className="text-[10px] font- text-green-600 font-mono font-bold uppercase tracking-wide">Verified Source</div>
                                </div>
                            </div>

                            {/* Checklist */}
                            <div className="space-y-3">
                                {[
                                    "Source Documents Tethers (Active)",
                                    "Financial Logic (Verified)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 flex items-center justify-center rounded-xs bg-green-100 border border-green-200">
                                            <Check className="w-2.5 h-2.5 text-green-700" />
                                        </div>
                                        <span className="text-xs font- text-gray-600 font-mono font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="pt-6 border-t border-gray-100">
                            <p className="text-sm font- text-gray-600 italic leading-relaxed">
                                "Held up against rigorous IC debate. <span className="text-black not-italic font-mono font-medium">Zero hallucinations.</span>"
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
