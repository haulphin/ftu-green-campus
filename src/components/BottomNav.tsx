import { cn } from "../theme";
import type { Tab } from "../types";

interface BottomNavProps {
    tab: Tab;
    setTab: (t: Tab) => void;
    onOpenCamera: () => void;
}

export function BottomNav({ tab, setTab, onOpenCamera }: BottomNavProps) {
    const Item = ({ id, label, icon }: { id: Tab; label: string; icon: string }) => {
        const active = tab === id;
        return (
            <button
                onClick={() => setTab(id)}
                className={cn(
                    "flex flex-col items-center justify-center gap-1 px-4 py-2.5 rounded-xl transition-all duration-200 min-w-[70px] relative overflow-hidden",
                    active
                        ? "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500 text-white shadow-[0_4px_16px_rgba(220,38,38,0.4)] scale-105"
                        : "text-gray-600 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 hover:text-gray-900 hover:scale-105"
                )}
            >
                {active && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 animate-shimmer" style={{ backgroundSize: '200% 200%' }} />
                )}
                <span className={cn("text-xl leading-none relative z-10", active && "animate-bounce-subtle")}>{icon}</span>
                <span className="text-[10px] font-bold relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>{label}</span>
            </button>
        );
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30">
            <div className="mx-auto max-w-md px-4 pb-4">
                <div className="relative rounded-2xl bg-white/95 backdrop-blur-md border-2 border-gray-200 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] px-2 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Item id="schedule" label="Lịch" icon="📅" />
                        <Item id="actions" label="Todo" icon="✅" />
                    </div>
                    <div className="flex items-center gap-1">
                        <Item id="impact" label="Impact" icon="🌿" />
                        <Item id="profile" label="Cá nhân" icon="👤" />
                    </div>

                    {/* Center camera button - super vibrant and eye-catching */}
                    <button
                        onClick={onOpenCamera}
                        className="absolute left-1/2 -translate-x-1/2 -top-8 h-20 w-20 rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white shadow-[0_12px_40px_rgba(220,38,38,0.6)] border-4 border-white flex items-center justify-center hover:scale-125 active:scale-95 transition-transform duration-200 animate-gradient animate-pulse-scale"
                        aria-label="Open camera"
                        title="Check-in xanh"
                        style={{ backgroundSize: '200% 200%' }}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 animate-shimmer" style={{ backgroundSize: '200% 200%' }} />
                        <span className="text-4xl relative z-10 animate-bounce-subtle">📷</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
