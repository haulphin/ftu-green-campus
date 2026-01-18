// src/screens/ActionsScreen.tsx
import { classesMock, todosMock } from "../data";

export function ActionsScreen() {
    const todayClasses = classesMock;

    return (
        <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#333' }}>Todo theo môn</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Việc học + việc xanh (Locket FTU)</div>
            </div>

            {/* Quick Add Card */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontWeight: '700', fontSize: '16px', color: '#333', marginBottom: '4px' }}>Quick add</div>
                        <div style={{ fontSize: '13px', color: '#666' }}>Tự thêm việc (sẽ nhắc lại vào lần học sau)</div>
                    </div>
                    <button style={{
                        padding: '10px 20px',
                        background: '#fe2c55',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}>
                        ＋ Thêm
                    </button>
                </div>
                <div style={{ marginTop: '12px', background: '#fff7e6', border: '1px solid #ffe0b2', borderRadius: '8px', padding: '12px', fontSize: '13px', color: '#d35400' }}>
                    Ví dụ: "Mang bình nước", "Note bài chương 3", "Không mua đồ nhựa sau break"
                </div>
            </div>

            {/* Todo List by Class */}
            <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Danh sách Todo</h3>

                {todayClasses.map((cl) => {
                    const list = todosMock.filter((t) => t.relatedTo === cl.id);
                    if (list.length === 0) return null;

                    return (
                        <div key={cl.id} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '16px', overflow: 'hidden' }}>
                            {/* Class Header */}
                            <div style={{ background: '#f8f9fa', padding: '16px', borderBottom: '1px solid #e9ecef' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: '700', fontSize: '16px', color: '#333' }}>{cl.title}</div>
                                        <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                                            {cl.start} – {cl.end} • {cl.room}
                                        </div>
                                    </div>
                                    <span style={{ background: '#e6fffa', color: '#00b894', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                        Nhắc trước giờ học
                                    </span>
                                </div>
                            </div>

                            {/* Todo Items */}
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: '#fafafa', borderBottom: '1px solid #e9ecef' }}>
                                    <tr style={{ textAlign: 'left', color: '#6c757d', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        <th style={{ padding: '12px 16px' }}>Việc cần làm</th>
                                        <th style={{ padding: '12px 16px' }}>Quy tắc</th>
                                        <th style={{ padding: '12px 16px' }}>Loại</th>
                                        <th style={{ padding: '12px 16px', textAlign: 'center' }}>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((t) => (
                                        <tr key={t.id} style={{ borderBottom: '1px solid #f1f3f5' }}>
                                            <td style={{ padding: '16px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <span style={{ fontSize: '24px' }}>{t.icon}</span>
                                                    <div>
                                                        <div style={{ fontWeight: '600', fontSize: '14px', color: '#2c3e50' }}>{t.title}</div>
                                                        {t.desc && <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>{t.desc}</div>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ padding: '16px', fontSize: '13px', color: '#666' }}>
                                                {t.rule ? `⏱ ${t.rule}` : '—'}
                                            </td>
                                            <td style={{ padding: '16px' }}>
                                                {t.kind === 'green' ? (
                                                    <span style={{ background: '#e6fffa', color: '#00b894', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                                        🌿 Green (+{t.points ?? 0})
                                                    </span>
                                                ) : (
                                                    <span style={{ background: '#f1f2f6', color: '#747d8c', padding: '6px 12px', borderRadius: '30px', fontSize: '12px', fontWeight: 'bold' }}>
                                                        📚 Học tập
                                                    </span>
                                                )}
                                            </td>
                                            <td style={{ padding: '16px', textAlign: 'center' }}>
                                                {t.kind === 'green' ? (
                                                    <button style={{
                                                        padding: '8px 16px',
                                                        background: '#fe2c55',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '13px'
                                                    }}>
                                                        📸 Check-in
                                                    </button>
                                                ) : (
                                                    <button style={{
                                                        padding: '8px 16px',
                                                        background: '#f1f1f2',
                                                        color: '#161823',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '13px'
                                                    }}>
                                                        ☐ Đánh dấu
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
