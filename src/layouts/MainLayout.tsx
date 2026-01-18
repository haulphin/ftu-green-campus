// src/layouts/MainLayout.tsx
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

interface MainLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    onTabChange: (tab: string) => void;
    onOpenCamera: () => void;
}

export function MainLayout({ children, activeTab, onTabChange, onOpenCamera }: MainLayoutProps) {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f8f9fa' }}>
            {/* Sidebar */}
            <Sidebar activeTab={activeTab} onTabChange={onTabChange} onOpenCamera={onOpenCamera} />

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {/* Header */}
                <Header />

                {/* Content */}
                <main style={{ flex: 1, overflow: 'auto' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
