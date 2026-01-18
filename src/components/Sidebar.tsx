// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    onOpenCamera: () => void;
}

export function Sidebar({ activeTab, onTabChange, onOpenCamera }: SidebarProps) {
    const getLinkStyle = (id: string) => {
        const isActive = activeTab === id;
        return {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 20px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: isActive ? '700' : '500',
            color: isActive ? '#fe2c55' : '#161823',
            backgroundColor: isActive ? 'rgba(254, 44, 85, 0.06)' : 'transparent',
            borderRight: isActive ? '4px solid #fe2c55' : '4px solid transparent',
            transition: 'all 0.2s ease-in-out',
            borderRadius: '0 8px 8px 0',
            marginRight: '10px',
            cursor: 'pointer',
            border: 'none',
            width: '100%',
            textAlign: 'left' as const
        };
    };

    return (
        <aside style={{
            width: '260px',
            background: '#ffffff',
            height: '100vh',
            borderRight: '1px solid #e3e3e4',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            paddingTop: '20px'
        }}>
            {/* Logo */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '0 24px 30px 24px',
                fontSize: '26px', fontWeight: '800'
            }}>
                <span>FTU Green <span style={{ color: '#fe2c55' }}>Campus</span></span>
            </div>

            {/* Menu */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <button onClick={() => onTabChange('schedule')} style={getLinkStyle('schedule')}>
                    <span style={{ fontSize: '18px' }}>📅</span>
                    <span>Lịch học</span>
                </button>

                <button onClick={() => onTabChange('actions')} style={getLinkStyle('actions')}>
                    <span style={{ fontSize: '18px' }}>✅</span>
                    <span>Todo</span>
                </button>

                <button onClick={() => onTabChange('impact')} style={getLinkStyle('impact')}>
                    <span style={{ fontSize: '18px' }}>🌿</span>
                    <span>Green Impact</span>
                </button>

                <button onClick={() => onTabChange('profile')} style={getLinkStyle('profile')}>
                    <span style={{ fontSize: '18px' }}>👤</span>
                    <span>Tài khoản</span>
                </button>
            </nav>

            {/* Camera Button */}
            <div style={{ padding: '20px' }}>
                <button
                    onClick={onOpenCamera}
                    style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                        width: '100%', padding: '12px',
                        background: '#fe2c55', color: 'white',
                        border: 'none', borderRadius: '8px',
                        fontWeight: '700', cursor: 'pointer', transition: '0.3s',
                        fontSize: '15px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#e02849'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#fe2c55'}
                >
                    <span style={{ fontSize: '18px' }}>📷</span> Check-in xanh
                </button>
            </div>
        </aside>
    );
}
