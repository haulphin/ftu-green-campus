import { UI, cn } from "../theme";
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
                <div className="px-4 pt-3">
                    <div className="rounded-3xl overflow-hidden shadow-[0_12px_30px_rgba(220,38,38,0.22)]">
                        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700">
                            <div className="px-4 py-3 flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 border border-white/25 overflow-hidden">
                                            <FTULogo className="h-7 w-7" />
                                        </span>
                                        <div className="text-white font-semibold tracking-tight truncate">
                                            {title}
                                        </div>
                                        <div className="text-[11px] text-white/75 font-medium truncate">
                                            Foreign Trade University
                                        </div>
                                    </div>
                                    {subtitle ? (
                                        <div className="mt-1 text-white/80 text-xs truncate">{subtitle}</div>
                                    ) : null}
                                </div>

                                <button
                                    onClick={onOpenProfile}
                                    className={cn(UI.chip, "shrink-0")}
                                    title="Tài khoản"
                                >
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/30 border border-white/25">
                                        ⭐
                                    </span>
                                    <span className="inline-flex items-center gap-2">
                                        <span className="h-7 w-7 rounded-full bg-white/30 border border-white/25 flex items-center justify-center">
                                            👤
                                        </span>
                                        <span className="text-left leading-tight">
                                            <span className="block text-xs font-semibold">Lê Thành Nguyên</span>
                                            <span className="block text-[11px] text-white/80">2312155138</span>
                                        </span>
                                        <span className="text-white/80">▾</span>
                                    </span>
                                </button>
                            </div>
                            <div className="h-2 bg-gradient-to-b from-white/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
