import { UI, cn } from "../theme";

interface StatPillProps {
    label: string;
    value: string;
    sub?: string;
}

export function StatPill({ label, value, sub }: StatPillProps) {
    return (
        <div
            className={cn("rounded-2xl bg-white/75 backdrop-blur", UI.softBorder, "px-4 py-3")}
            style={{ boxShadow: "0 8px 22px rgba(0,0,0,0.04)" }}
        >
            <div className={cn("text-xs", UI.text.soft)}>{label}</div>
            <div className={cn("mt-1 text-lg font-semibold tracking-tight", UI.text.strong)}>
                {value}
            </div>
            {sub ? <div className={cn("text-xs mt-1", UI.text.faint)}>{sub}</div> : null}
        </div>
    );
}
