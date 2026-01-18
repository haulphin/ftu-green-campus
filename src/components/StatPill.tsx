import { cn } from "../theme";

interface StatPillProps {
    label: string;
    value: string;
    sub?: string;
    icon?: string;
    variant?: "default" | "green" | "red";
}

export function StatPill({ label, value, sub, icon, variant = "default" }: StatPillProps) {
    const getVariantClasses = () => {
        switch (variant) {
            case "green":
                return "bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 text-white border-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)]";
            case "red":
                return "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 text-white border-red-300 shadow-[0_4px_20px_rgba(220,38,38,0.4)]";
            default:
                return "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white border-blue-300 shadow-[0_4px_20px_rgba(99,102,241,0.4)]";
        }
    };

    return (
        <div
            className={cn(
                "rounded-xl border-2 px-3 py-3 relative overflow-hidden",
                "hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
                "hover:scale-110 transition-all duration-300 cursor-pointer",
                "animate-gradient",
                getVariantClasses()
            )}
            style={{ backgroundSize: '200% 200%' }}
        >
            {/* Decorative shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 animate-shimmer" style={{ backgroundSize: '200% 200%' }} />

            <div className="relative z-10">
                {icon && <div className="text-2xl mb-1.5 animate-bounce-subtle">{icon}</div>}
                <div className="text-[9px] uppercase tracking-wider font-bold text-white/90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {label}
                </div>
                <div className="mt-1 text-xl font-black tracking-tight text-white" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                    {value}
                </div>
                {sub && (
                    <div className="text-[10px] mt-1 font-semibold text-white/80">
                        {sub}
                    </div>
                )}
            </div>
        </div>
    );
}
