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
                    "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition",
                    active ? "bg-red-600 text-white shadow-sm" : "text-red-950/70 hover:bg-red-50"
                )}
            >
                <span className="text-lg leading-none">{icon}</span>
                <span className="text-[11px] font-medium">{label}</span>
            </button>
        );
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30">
            <div className="mx-auto max-w-md px-4 pb-4">
                <div className="relative rounded-3xl bg-white/90 backdrop-blur border border-red-100 shadow-lg px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Item id="schedule" label="Lịch" icon="📅" />
                        <Item id="actions" label="Todo" icon="✅" />
                    </div>
                    <div className="flex items-center gap-1">
                        <Item id="impact" label="Impact" icon="🌿" />
                        <Item id="profile" label="Tài khoản" icon="👤" />
                    </div>

                    <button
                        onClick={onOpenCamera}
                        className="absolute left-1/2 -translate-x-1/2 -top-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-red-600 to-emerald-500 text-white shadow-xl border border-white/70 flex items-center justify-center ring-4 ring-white/70"
                        aria-label="Open camera"
                        title="Locket FTU"
                    >
                        <span className="text-2xl">📷</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
