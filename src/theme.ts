// UI Theme constants and utility functions

export const UI = {
    pageBg:
        "bg-[radial-gradient(900px_700px_at_10%_0%,rgba(220,38,38,0.10),transparent_55%),radial-gradient(900px_700px_at_95%_10%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(255,255,255,1))]",
    card:
        "rounded-3xl bg-white/88 backdrop-blur border border-red-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
    softBorder: "border border-red-100/80",
    text: {
        strong: "text-red-950",
        mid: "text-red-950/70",
        soft: "text-red-950/55",
        faint: "text-red-950/40",
    },
    primaryBtn:
        "rounded-2xl px-4 py-2 bg-red-600 text-white font-semibold shadow-sm hover:bg-red-700 active:bg-red-800",
    ghostBtn:
        "rounded-2xl px-4 py-2 bg-red-50 text-red-900 font-semibold hover:bg-red-100",
    chip:
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/25 text-white",
};

// Utility function to merge class names
export function cn(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
}
