import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
    className?: string;
    children?: React.ReactNode;
}

export function SectionHeader({
    title,
    description,
    align = "center",
    maxWidth = "3xl",
    className,
    children,
}: SectionHeaderProps) {
    const alignClasses = {
        left: "text-left mx-0",
        center: "text-center mx-auto",
        right: "text-right ml-auto mr-0",
    };

    const maxWidthClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        full: "max-w-full",
    };

    return (
        <div className={cn(alignClasses[align], maxWidthClasses[maxWidth], className)}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-balance text-[#0A0A0A] dark:text-white">
                {title}
            </h2>
            {description && (
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
}