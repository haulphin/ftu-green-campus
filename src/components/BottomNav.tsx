import type { Tab } from "../types";

interface BottomNavProps {
    tab: Tab;
    setTab: (t: Tab) => void;
    onOpenCamera: () => void;
}

export function BottomNav({ tab, setTab, onOpenCamera }: BottomNavProps) {
    const getItemStyle = (id: Tab) => {
        const isActive = tab === id;
        return {
            flex: 1,
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 8px',
            background: 'transparent',
            color: isActive ? '#fe2c55' : '#666666',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: isActive ? '700' : '500',
            fontSize: '10px',
            gap: '4px'
        };
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.08)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '0',
                height: '60px'
            }}>
                {/* Lịch */}
                <button onClick={() => setTab('schedule')} style={getItemStyle('schedule')}>
                    <span style={{ fontSize: '22px' }}>📅</span>
                    <span>Lịch</span>
                </button>

                {/* Todo */}
                <button onClick={() => setTab('actions')} style={getItemStyle('actions')}>
                    <span style={{ fontSize: '22px' }}>✅</span>
                    <span>Todo</span>
                </button>

                {/* Camera Button - Center (larger) */}
                <button
                    onClick={onOpenCamera}
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative'
                    }}
                >
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #fe2c55 0%, #ff6b6b 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(254, 44, 85, 0.4)',
                        transition: 'all 0.2s ease',
                        fontSize: '26px'
                    }}>
                        📷
                    </div>
                </button>

                {/* Impact */}
                <button onClick={() => setTab('impact')} style={getItemStyle('impact')}>
                    <span style={{ fontSize: '22px' }}>🌿</span>
                    <span>Impact</span>
                </button>

                {/* Profile */}
                <button onClick={() => setTab('profile')} style={getItemStyle('profile')}>
                    <span style={{ fontSize: '22px' }}>👤</span>
                    <span>Cá nhân</span>
                </button>
            </div>
        </div>
    );
}
