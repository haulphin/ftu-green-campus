import React from "react";
import { UI, cn } from "../theme";

interface SoftCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "green" | "red";
}

export function SoftCard({ children, className, variant = "default" }: SoftCardProps) {
    const getVariantClass = () => {
        switch (variant) {
            case "glass":
                return UI.cardGlass;
            case "green":
                return UI.cardGreen;
            case "red":
                return UI.cardRed;
            default:
                return UI.card;
        }
    };

    return (
        <div className={cn(getVariantClass(), "animate-fade-in relative overflow-hidden", className)}>
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
