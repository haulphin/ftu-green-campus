import { cn } from "../theme";

interface AccentBarProps {
    className?: string;
}

export function AccentBar({ className }: AccentBarProps) {
    return (
        <div
            className={cn(
                "h-1.5 w-24 rounded-full relative overflow-hidden",
                "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
                "shadow-[0_2px_12px_rgba(220,38,38,0.5)]",
                "animate-gradient",
                className
            )}
            style={{ backgroundSize: '200% 200%' }}
        >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
        </div>
    );
}
