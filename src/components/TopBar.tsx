import { FTULogo } from "./FTULogo";

interface TopBarProps {
    title: string;
    subtitle?: string;
    onOpenProfile?: () => void;
}

export function TopBar({ title, subtitle, onOpenProfile }: TopBarProps) {
    return (
        <div className="sticky top-0 z-40">
            <div className="mx-auto max-w-md">
                <div className="px-4 pt-3 pb-2">
                    {/* Vibrant gradient header with glassmorphism */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-rose-600 shadow-[0_8px_32px_rgba(220,38,38,0.35)] animate-gradient">
                        <div className="px-4 py-4 flex items-center justify-between gap-3 backdrop-blur-sm bg-white/10">
                            {/* Left: Logo and title */}
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg animate-float-subtle">
                                    <FTULogo className="h-7 w-7 text-white" />
                                </div>
                                <div className="min-w-0">
                                    <div className="font-bold text-white tracking-tight truncate text-lg" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                                        {title}
                                    </div>
                                    {subtitle && (
                                        <div className="text-xs text-white/90 truncate mt-0.5 font-medium">{subtitle}</div>
                                    )}
                                </div>
                            </div>

                            {/* Right: User profile button with vibrant design */}
                            <button
                                onClick={onOpenProfile}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0 shadow-lg"
                                title="Tài khoản"
                            >
                                <div className="flex items-center gap-2">
                                    {/* Points badge with gradient */}
                                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 text-white text-xs font-bold shadow-md animate-pulse-scale">
                                        <span className="text-sm">⭐</span>
                                        <span>120</span>
                                    </div>

                                    {/* Avatar with gradient border */}
                                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-base font-semibold shadow-md">
                                        👤
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Decorative bottom gradient */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
