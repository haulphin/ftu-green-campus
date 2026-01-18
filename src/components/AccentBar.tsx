import { cn } from "../theme";

interface AccentBarProps {
    className?: string;
}

export function AccentBar({ className }: AccentBarProps) {
    return (
        <div
            className={cn(
                "h-1.5 w-20 rounded-full bg-gradient-to-r from-red-600 to-emerald-500",
                className
            )}
        />
    );
}
