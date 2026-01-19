// src/layouts/MainLayout.tsx
import React from "react";
import { BottomNav } from "../components/BottomNav";
import type { Tab } from "../types";

interface MainLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    onTabChange: (tab: string) => void;
    onOpenCamera: () => void;
}

export function MainLayout({ children, activeTab, onTabChange, onOpenCamera }: MainLayoutProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #fef2f2 0%, #fef9f5 50%, #f0fdf4 100%)',
            position: 'relative',
            maxWidth: '100vw'
        }}>
            {/* Main Content Area - Mobile optimized */}
            <main style={{
                flex: 1,
                overflow: 'auto',
                paddingBottom: '100px', // Space for bottom navigation + extra margin
                maxWidth: '600px',
                width: '100%',
                margin: '0 auto',
                boxSizing: 'border-box'
            }}>
                {children}
            </main>

            {/* Bottom Navigation */}
            <BottomNav
                tab={activeTab as Tab}
                setTab={(t) => onTabChange(t)}
                onOpenCamera={onOpenCamera}
            />
        </div>
    );
}
