// src/screens/ScheduleScreen.tsx
import { useState, useMemo } from "react";
import { classesMock, campusUpdatesMock, eventsMock } from "../data";

export function ScheduleScreen() {
    const [eventJoined, setEventJoined] = useState<Record<string, boolean>>({});
    const [selected, setSelected] = useState<string>(classesMock[0].id);
    const selectedItem = useMemo(
        () => classesMock.find((c) => c.id === selected) ?? classesMock[0],
        [selected]
    );

    function toggleJoin(eventId: string) {
        setEventJoined((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
    }

    const greenEvents = eventsMock.filter((e) => e.isGreen);

    return (
        <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#333' }}>Lịch học hôm nay</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Lịch học & gợi ý xanh theo bối cảnh</div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌱</div>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Green Points</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginTop: '4px' }}>120</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>+18 hôm nay</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌍</div>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CO₂ Saved</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginTop: '4px' }}>0.9 kg</div>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>tuần này</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔥</div>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Streak</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#333', marginTop: '4px' }}>4 ngày</div>
                </div>
            </div>

            {/* Campus Updates Table */}
            <div style={{ marginBottom: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#333' }}>Cập nhật FTU</h3>
                        <div style={{ fontSize: '13px', color: '#666' }}>Thông báo nhà trường • dự án CLB • sự kiện</div>
                    </div>
                    <span style={{ background: '#fff7e6', color: '#d35400', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                        ✨ Mới
                    </span>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
                            <tr style={{ textAlign: 'left', color: '#6c757d', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                <th style={{ padding: '16px' }}>Tiêu đề</th>
                                <th style={{ padding: '16px' }}>Nguồn</th>
                                <th style={{ padding: '16px' }}>Thời gian</th>
                                <th style={{ padding: '16px' }}>Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {campusUpdatesMock.map((u) => (
                                <tr key={u.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                                    <td style={{ padding: '16px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px', color: '#2c3e50', marginBottom: '4px' }}>{u.title}</div>
                                        <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>{u.summary.slice(0, 100)}...</div>
                                    </td>
                                    <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{u.source}</td>
                                    <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{u.time}</td>
                                    <td style={{ padding: '16px' }}>
                                        {u.tags?.map((t) => (
                                            <span key={t} style={{
                                                background: t.toLowerCase().includes('green') ? '#e6fffa' : '#fff7e6',
                                                color: t.toLowerCase().includes('green') ? '#00b894' : '#d35400',
                                                padding: '4px 8px', borderRadius: '12px', fontSize: '11px',
                                                fontWeight: 'bold', marginRight: '4px'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Events Table */}
            <div style={{ marginBottom: '24px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#333' }}>Sự kiện hôm nay</h3>
                        <div style={{ fontSize: '13px', color: '#666' }}>Sự kiện CLB/nhà trường sẽ hiển thị trong lịch</div>
                    </div>
                    <span style={{ background: '#e6fffa', color: '#00b894', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                        🌿 Green bonus
                    </span>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: '#f8f9fa', borderBottom: '1px solid #e9ecef' }}>
                            <tr style={{ textAlign: 'left', color: '#6c757d', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                <th style={{ padding: '16px' }}>Sự kiện</th>
                                <th style={{ padding: '16px' }}>Thời gian</th>
                                <th style={{ padding: '16px' }}>Địa điểm</th>
                                <th style={{ padding: '16px' }}>Điểm</th>
                                <th style={{ padding: '16px' }}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventsMock.map((e) => {
                                const joined = !!eventJoined[e.id];
                                return (
                                    <tr key={e.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                                        <td style={{ padding: '16px' }}>
                                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#2c3e50', marginBottom: '4px' }}>{e.title}</div>
                                            <div style={{ fontSize: '13px', color: '#666' }}>{e.description}</div>
                                            {e.isGreen && (
                                                <span style={{ background: '#e6fffa', color: '#00b894', padding: '4px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', marginTop: '4px', display: 'inline-block' }}>
                                                    ♻️ Sự kiện xanh
                                                </span>
                                            )}
                                        </td>
                                        <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{e.start} – {e.end}</td>
                                        <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>{e.location}</td>
                                        <td style={{ padding: '16px' }}>
                                            <span style={{ background: '#fff7e6', color: '#d35400', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                                +{e.points} pts
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px' }}>
                                            <button
                                                onClick={() => toggleJoin(e.id)}
                                                style={{
                                                    padding: '8px 16px',
                                                    background: joined ? '#00b894' : '#f1f1f2',
                                                    color: joined ? 'white' : '#161823',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: 'pointer',
                                                    fontWeight: '600',
                                                    fontSize: '13px'
                                                }}
                                            >
                                                {joined ? '✓ Đã lưu' : '＋ Lưu lịch'}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
