"use client";

import { useEffect, useRef, useState } from "react";

export default function BentoGrid() {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-white  transition-colors duration-300">
            <div className="grid grid-cols-3 gap-6 auto-rows-fr">
                {/* Card 1: Scout - Spans 2 columns */}
                <ScoutCard />

                {/* Card 2: Prajna - Spans 1 column */}
                <PrajnaCard />

                {/* Card 3: MetricX - Spans 3 columns (full width) */}
                <MetricXCard />
            </div>
        </section>
    );
}

// Scout Card - Map with pulsing dots
function ScoutCard() {
    return (
        <div className="col-span-2 border border-gray-200  bg-white  p-8 overflow-hidden relative shadow-sm">
            <h3 className="font-sans text-3xl font-medium mb-6 text-black ">Scout</h3>
            <div className="relative w-full h-64">
                <MapWithDots />
            </div>
        </div>
    );
}

// Map SVG with pulsing dots
function MapWithDots() {
    const dots = [
        { x: 15, y: 20 },
        { x: 35, y: 45 },
        { x: 60, y: 30 },
        { x: 75, y: 60 },
        { x: 85, y: 25 },
        { x: 45, y: 70 },
        { x: 25, y: 55 },
    ];

    return (
        <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Light map background with grid pattern */}
            <defs>
                <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        className="text-gray-200 "
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>

            <rect width="100" height="100" className="fill-gray-50 " />
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Abstract landmass shapes - Dark outlines */}
            <path
                d="M 10 30 Q 20 25, 30 28 L 35 35 Q 30 40, 25 38 L 15 35 Z"
                className="fill-gray-100  stroke-gray-300 "
                strokeWidth="0.5"
            />
            <path
                d="M 50 15 Q 60 12, 70 18 L 75 25 Q 70 30, 60 28 L 55 22 Z"
                className="fill-gray-100  stroke-gray-300 "
                strokeWidth="0.5"
            />
            <path
                d="M 40 60 Q 50 55, 60 62 L 65 70 Q 55 75, 45 68 Z"
                className="fill-gray-100  stroke-gray-300 "
                strokeWidth="0.5"
            />

            {/* Pulsing dots - International Orange */}
            {dots.map((dot, i) => (
                <g key={i}>
                    {/* Outer pulse ring */}
                    <circle
                        cx={dot.x}
                        cy={dot.y}
                        r="2"
                        fill="none"
                        stroke="#FF4F00"
                        strokeWidth="0.5"
                        opacity="0.6"
                    >
                        <animate
                            attributeName="r"
                            from="2"
                            to="6"
                            dur="2s"
                            begin={`${i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="opacity"
                            from="0.6"
                            to="0"
                            dur="2s"
                            begin={`${i * 0.3}s`}
                            repeatCount="indefinite"
                        />
                    </circle>

                    {/* Core dot */}
                    <circle
                        cx={dot.x}
                        cy={dot.y}
                        r="1.5"
                        fill="#FF4F00"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0.5;1"
                            dur="1.5s"
                            begin={`${i * 0.2}s`}
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
            ))}
        </svg>
    );
}

// Prajna Card - Chat interface with typing code
function PrajnaCard() {
    const [lines, setLines] = useState<string[]>([]);
    const codeLines = [
        "const analyze = async () => {",
        "  const data = await fetch('/api');",
        "  return process(data);",
        "};",
        "",
        "// Processing insights...",
        "insights.map(i => i.score)",
    ];

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < codeLines.length) {
                setLines((prev) => [...prev, codeLines[currentLine]]);
                currentLine++;
            } else {
                // Reset and loop
                setLines([]);
                currentLine = 0;
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="col-span-1 border border-gray-200  bg-white  p-8 overflow-hidden shadow-sm">
            <h3 className="font-sans text-3xl font-medium mb-6 text-black ">Prajna</h3>
            <div className="bg-gray-50  border border-gray-200  rounded-none p-4 h-64 overflow-hidden font-mono text-sm">
                {lines.map((line, i) => (
                    <div
                        key={i}
                        className="text-gray-800  mb-1 animate-fade-in"
                        style={{
                            animation: `fadeIn 0.3s ease-in`,
                        }}
                    >
                        {line || "\u00A0"}
                    </div>
                ))}
                <div className="inline-block w-2 h-4 bg-obsidian  animate-pulse" />
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}

// MetricX Card - Animated line chart
function MetricXCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const width = rect.width;
        const height = rect.height;

        // Generate data points
        const dataPoints = 50;
        const data: number[] = [];
        for (let i = 0; i < dataPoints; i++) {
            const base = 50 + Math.sin(i / 5) * 20;
            const noise = Math.random() * 15;
            data.push(base + noise);
        }

        let progress = 0;
        const animationSpeed = 0.02;

        function animate() {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, width, height);

            // Draw grid
            ctx.strokeStyle = "rgba(128, 128, 128, 0.1)";
            ctx.lineWidth = 1;

            // Horizontal grid lines
            for (let i = 0; i <= 4; i++) {
                const y = (height / 4) * i;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Vertical grid lines
            for (let i = 0; i <= 10; i++) {
                const x = (width / 10) * i;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Draw animated line chart
            const pointsToShow = Math.floor(data.length * progress);

            if (pointsToShow > 1) {
                // Draw gradient fill
                const gradient = ctx.createLinearGradient(0, 0, 0, height);
                gradient.addColorStop(0, "rgba(10, 133, 209, 0.2)"); // Notion Blue tint
                gradient.addColorStop(1, "rgba(10, 133, 209, 0)");

                ctx.beginPath();
                ctx.moveTo(0, height);

                for (let i = 0; i < pointsToShow; i++) {
                    const x = (width / (dataPoints - 1)) * i;
                    const y = height - (data[i] / 100) * height;
                    if (i === 0) {
                        ctx.lineTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.lineTo((width / (dataPoints - 1)) * (pointsToShow - 1), height);
                ctx.closePath();
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw line
                ctx.beginPath();
                for (let i = 0; i < pointsToShow; i++) {
                    const x = (width / (dataPoints - 1)) * i;
                    const y = height - (data[i] / 100) * height;
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.strokeStyle = "#0A85D1"; // Notion Blue
                ctx.lineWidth = 2;
                ctx.stroke();

                // Draw glow effect on the last point
                if (pointsToShow > 0) {
                    const lastX = (width / (dataPoints - 1)) * (pointsToShow - 1);
                    const lastY = height - (data[pointsToShow - 1] / 100) * height;

                    ctx.beginPath();
                    ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
                    ctx.fillStyle = "#0A85D1";
                    ctx.fill();
                }
            }

            // Update progress
            progress += animationSpeed;
            if (progress >= 1) {
                progress = 0; // Loop animation
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="col-span-3 border border-gray-200  bg-white  p-8 overflow-hidden shadow-sm">
            <h3 className="font-sans text-3xl font-medium mb-6 text-black ">MetricX</h3>
            <div className="relative w-full h-64">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    );
}
