// UI Theme constants and utility functions - Vibrant and Dynamic

export const UI = {
    // Page backgrounds - vibrant gradient
    pageBg:
        "bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 animate-gradient",

    // Card variants - colorful with strong shadows
    card:
        "rounded-2xl bg-white border-2 border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300",
    cardGlass:
        "rounded-2xl bg-white/95 backdrop-blur-md border-2 border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300",
    cardGreen:
        "rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-green-100 border-2 border-emerald-300 shadow-[0_4px_24px_rgba(16,185,129,0.2)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-all duration-300",
    cardRed:
        "rounded-2xl bg-gradient-to-br from-red-100 via-rose-50 to-pink-100 border-2 border-red-300 shadow-[0_4px_24px_rgba(220,38,38,0.2)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.3)] hover:scale-[1.02] transition-all duration-300",
    vibrantCard:
        "rounded-2xl bg-gradient-to-br from-white via-rose-50 to-orange-50 border-2 border-rose-200 shadow-[0_4px_24px_rgba(220,38,38,0.15)] hover:shadow-[0_12px_48px_rgba(220,38,38,0.25)] hover:scale-[1.02] transition-all duration-300",

    // Borders
    softBorder: "border-2 border-gray-200",

    // Text hierarchy - bold and vibrant
    text: {
        strong: "text-gray-900",
        mid: "text-gray-700",
        soft: "text-gray-600",
        faint: "text-gray-500",
    },

    // Buttons - vibrant gradients with strong shadows
    primaryBtn:
        "rounded-xl px-5 py-3 bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white font-bold shadow-[0_6px_24px_rgba(220,38,38,0.4)] hover:shadow-[0_8px_32px_rgba(220,38,38,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 animate-gradient",
    ghostBtn:
        "rounded-xl px-5 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-bold border-2 border-gray-300 hover:from-gray-200 hover:to-gray-300 hover:scale-110 active:scale-95 transition-all duration-200 shadow-md",
    greenBtn:
        "rounded-xl px-5 py-3 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 text-white font-bold shadow-[0_6px_24px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 animate-gradient",
    glowBtn:
        "rounded-xl px-5 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-[0_6px_24px_rgba(220,38,38,0.4)] hover:scale-110 active:scale-95 transition-all duration-200 animate-glow",

    // Chips and badges - colorful
    chip:
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border-2 border-white/40 text-white text-sm backdrop-blur-md hover:bg-white/30 transition-all duration-200 font-semibold shadow-lg",
    badge:
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs transition-all duration-200 hover:scale-110 shadow-md border-2",
    badgeGreen:
        "bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-400 text-emerald-800",
    badgeRed:
        "bg-gradient-to-r from-red-100 to-rose-100 border-red-400 text-red-800",
    badgeAnimated:
        "bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 border-orange-400 text-orange-800 animate-gradient",

    // Stat cards - vibrant
    statCard:
        "rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:scale-110 transition-all duration-300",
};

// Utility function to merge class names
export function cn(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
}
