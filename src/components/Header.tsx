// src/components/Header.tsx
import React from "react";

export function Header() {
    return (
        <header style={{
            height: '70px', background: 'white', borderBottom: '1px solid #e3e3e4',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px',
            position: 'sticky', top: 0, zIndex: 100
        }}>
            {/* Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#f1f1f2', padding: '10px 15px', borderRadius: '99px', width: '300px' }}>
                <span style={{ color: '#a6a6a6', marginRight: '10px' }}>🔍</span>
                <input
                    placeholder="Tìm kiếm..."
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px' }}
                />
            </div>

            {/* User Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Lê Thành Nguyên</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>2312155138</div>
                </div>
                <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#fe2c55', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', fontSize: '16px'
                }}>
                    LN
                </div>
            </div>
        </header>
    );
}
