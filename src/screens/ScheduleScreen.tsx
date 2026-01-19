// src/screens/ScheduleScreen.tsx
import { useState } from "react";
import { campusUpdatesMock, eventsMock } from "../data";

export function ScheduleScreen() {
    const [eventJoined, setEventJoined] = useState<Record<string, boolean>>({});

    function toggleJoin(eventId: string) {
        setEventJoined((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
    }

    return (
        <div style={{ padding: '20px', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px', paddingTop: '8px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#333' }}>Lịch học hôm nay</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '6px' }}>Lịch học & gợi ý xanh theo bối cảnh</div>
            </div>

            {/* Stats Cards - Beautiful Design */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>🌱</div>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '4px', fontWeight: '600' }}>Green Points</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#22c55e', marginBottom: '2px' }}>120</div>
                    <div style={{ fontSize: '10px', color: '#666', fontWeight: '500' }}>+18 hôm nay</div>
                </div>
                <div style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>🌍</div>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '4px', fontWeight: '600' }}>CO₂ Saved</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#3b82f6', marginBottom: '2px' }}>0.9kg</div>
                    <div style={{ fontSize: '10px', color: '#666', fontWeight: '500' }}>tuần này</div>
                </div>
                <div style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #fee2e2 100%)',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(239, 68, 68, 0.1)'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>🔥</div>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '4px', fontWeight: '600' }}>Streak</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#ef4444', marginBottom: '2px' }}>4</div>
                    <div style={{ fontSize: '10px', color: '#666', fontWeight: '500' }}>ngày</div>
                </div>
            </div>

            {/* Campus Updates - Mobile Cards */}
            <div style={{ marginBottom: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#333' }}>Cập nhật FTU</h3>
                        <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Thông báo • dự án • sự kiện</div>
                    </div>
                    <span style={{ background: 'linear-gradient(135deg, #fff7e6 0%, #ffedd5 100%)', color: '#d35400', padding: '8px 16px', borderRadius: '24px', fontSize: '12px', fontWeight: '700', boxShadow: '0 2px 8px rgba(211, 84, 0, 0.15)' }}>
                        ✨ Mới
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {campusUpdatesMock.map((u) => (
                        <div key={u.id} style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                            borderRadius: '20px',
                            padding: '18px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <div style={{ fontWeight: '700', fontSize: '16px', color: '#2c3e50', marginBottom: '8px' }}>{u.title}</div>
                            <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '12px' }}>{u.summary.slice(0, 100)}...</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#888' }}>
                                <span style={{ fontWeight: '500' }}>📢 {u.source} • {u.time}</span>
                                <div style={{ display: 'flex', gap: '6px' }}>
                                    {u.tags?.map((t) => (
                                        <span key={t} style={{
                                            background: t.toLowerCase().includes('green') ? 'linear-gradient(135deg, #e6fffa 0%, #ccfbf1 100%)' : 'linear-gradient(135deg, #fff7e6 0%, #ffedd5 100%)',
                                            color: t.toLowerCase().includes('green') ? '#00b894' : '#d35400',
                                            padding: '4px 10px', borderRadius: '12px', fontSize: '11px',
                                            fontWeight: '700', boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Events - Mobile Cards */}
            <div style={{ marginBottom: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0, color: '#333' }}>Sự kiện hôm nay</h3>
                        <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Sự kiện CLB/nhà trường</div>
                    </div>
                    <span style={{ background: 'linear-gradient(135deg, #e6fffa 0%, #ccfbf1 100%)', color: '#00b894', padding: '8px 16px', borderRadius: '24px', fontSize: '12px', fontWeight: '700', boxShadow: '0 2px 8px rgba(0, 184, 148, 0.15)' }}>
                        🌿 Green
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {eventsMock.map((e) => {
                        const joined = !!eventJoined[e.id];
                        return (
                            <div key={e.id} style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                                borderRadius: '20px',
                                padding: '18px',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: '700', fontSize: '16px', color: '#2c3e50', marginBottom: '6px' }}>{e.title}</div>
                                        <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px', lineHeight: '1.5' }}>{e.description}</div>
                                        {e.isGreen && (
                                            <span style={{ background: 'linear-gradient(135deg, #e6fffa 0%, #ccfbf1 100%)', color: '#00b894', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', display: 'inline-block', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
                                                ♻️ Sự kiện xanh
                                            </span>
                                        )}
                                    </div>
                                    <span style={{ background: 'linear-gradient(135deg, #fff7e6 0%, #ffedd5 100%)', color: '#d35400', padding: '6px 14px', borderRadius: '24px', fontSize: '13px', fontWeight: '800', whiteSpace: 'nowrap', marginLeft: '10px', boxShadow: '0 2px 8px rgba(211, 84, 0, 0.15)' }}>
                                        +{e.points}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #e5e7eb' }}>
                                    <div style={{ fontSize: '12px', color: '#888', fontWeight: '500' }}>
                                        <div>⏰ {e.start} – {e.end}</div>
                                        <div style={{ marginTop: '4px' }}>📍 {e.location}</div>
                                    </div>
                                    <button
                                        onClick={() => toggleJoin(e.id)}
                                        style={{
                                            padding: '8px 18px',
                                            background: joined ? 'linear-gradient(135deg, #00b894 0%, #00d2a0 100%)' : '#f3f4f6',
                                            color: joined ? 'white' : '#374151',
                                            border: 'none',
                                            borderRadius: '24px',
                                            cursor: 'pointer',
                                            fontWeight: '700',
                                            fontSize: '13px',
                                            boxShadow: joined ? '0 4px 12px rgba(0, 184, 148, 0.25)' : '0 2px 4px rgba(0,0,0,0.05)',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {joined ? '✓ Đã lưu' : '＋ Lưu'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
