interface FTULogoProps {
    className?: string;
}

export function FTULogo({ className }: FTULogoProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 128 128"
            role="img"
            aria-label="Foreign Trade University"
        >
            {/* Outer ring */}
            <circle cx="64" cy="64" r="62" fill="#C8102E" />
            <circle cx="64" cy="64" r="56" fill="none" stroke="white" strokeWidth="6" opacity="0.95" />
            {/* Inner badge */}
            <circle cx="64" cy="64" r="44" fill="#C8102E" stroke="white" strokeWidth="4" opacity="0.95" />
            {/* Simple FTU monogram (stylized) */}
            <path d="M38 46h52v10H69v34H59V56H38V46z" fill="white" opacity="0.95" />
            <path
                d="M80 56h10v34c0 10-8 18-18 18H52c-10 0-18-8-18-18V56h10v34c0 4 4 8 8 8h20c4 0 8-4 8-8V56z"
                fill="white"
                opacity="0.9"
            />
            {/* Tiny dots hinting circular text without copying it */}
            {Array.from({ length: 18 }).map((_, i) => {
                const a = (i / 18) * Math.PI * 2;
                const x = 64 + Math.cos(a) * 54;
                const y = 64 + Math.sin(a) * 54;
                return <circle key={i} cx={x} cy={y} r={1.2} fill="white" opacity="0.35" />;
            })}
        </svg>
    );
}
