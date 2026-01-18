import React from "react";
import { UI, cn } from "../theme";

interface SoftCardProps {
    children: React.ReactNode;
    className?: string;
}

export function SoftCard({ children, className }: SoftCardProps) {
    return <div className={cn(UI.card, className)}>{children}</div>;
}
