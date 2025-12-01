"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hash, setHash] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        setHash(window.location.hash);
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => {
        // Handle hash links for sections on the home page
        if (path.startsWith("/#")) {
            return pathname === "/" && hash === path.substring(1);
        }
        return pathname === path;
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] dark:border-gray-800 bg-white/80 dark:bg-[#050A14]/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="text-sm font-bold tracking-tight">
                    {/* <Link
                        href="/"
                        className={`text-sm md:text-base font-medium font-sans transition-colors`}
                    >
                        SAMKHYA.AI
                    </Link> */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden transition-all">
                            <Image
                                src="/samkhya_logo.png"
                                alt="Samkhya Logo"
                                // fill
                                className="object-contain"
                                height={60}
                                width={60}
                            />
                        </div>
                        <span className="text-xl font-bold  bg-clip-text text-primary hidden sm:block">
                            {/* <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:block"> */}
                            samkhya.ai
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 md:gap-8">
                    <Link
                        href="/#product"
                        className={`text-xs md:text-sm font-medium font-sans transition-all duration-300 relative group ${isActive("/#product")
                            ? "text-gray-900 dark:text-blue-400 font-semibold"
                            : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                            }`}
                    >
                        Product
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 dark:bg-blue-400 transition-all duration-300 ${isActive("/#product")
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}
                        />
                    </Link>
                    <Link
                        href="/perspective"
                        className={`text-xs md:text-sm font-medium font-sans transition-all duration-300 relative group ${isActive("/perspective")
                            ? "text-gray-900 dark:text-blue-400 font-semibold"
                            : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
                            }`}
                    >
                        Perspectives
                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 dark:bg-blue-400 transition-all duration-300 ${isActive("/perspective")
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 text-black dark:text-white focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-[#E5E5E5] dark:border-gray-800 bg-white dark:bg-[#050A14]">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            href="/#product"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-base font-medium font-sans transition-colors py-2 border-l-4 pl-3 ${isActive("/#product")
                                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950"
                                : "border-transparent text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-300"
                                }`}
                        >
                            Product
                        </Link>
                        <Link
                            href="/perspective"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-base font-medium font-sans transition-colors py-2 border-l-4 pl-3 ${isActive("/perspective")
                                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950"
                                : "border-transparent text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-300"
                                }`}
                        >
                            Perspectives
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
