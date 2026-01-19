// src/screens/ProfileScreen.tsx
export function ProfileScreen() {
    return (
        <div style={{ padding: '12px', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#333' }}>Tài khoản sinh viên</h2>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>Thông tin cá nhân & học tập</div>
            </div>

            {/* Profile Card */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #fe2c55 0%, #00b894 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        color: 'white',
                        fontWeight: '700',
                        flexShrink: 0
                    }}>
                        LN
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#333', marginBottom: '3px' }}>Lê Thành Nguyên</div>
                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '2px' }}>MSSV: 2312155138</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>Trạng thái: <span style={{ color: '#00b894', fontWeight: '600' }}>Đang học</span></div>
                    </div>
                    <button style={{
                        padding: '6px 12px',
                        background: '#f1f1f2',
                        color: '#161823',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '12px',
                        flexShrink: 0
                    }}>
                        Sửa
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
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
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#22c55e', marginBottom: '2px' }}>420</div>
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
                <div style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
                    borderRadius: '10px',
                    padding: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(59, 130, 246, 0.1)'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '6px' }}>📚</div>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '4px', fontWeight: '600' }}>Điểm RL</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#3b82f6', marginBottom: '2px' }}>85</div>
                </div>
            </div>

            {/* Settings */}
            <div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: '#333' }}>Cài đặt</h3>
                <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <div style={{ padding: '12px', borderBottom: '1px solid #f1f3f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: '600', fontSize: '13px', color: '#333' }}>Thông báo</div>
                            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Nhận thông báo về lịch học</div>
                        </div>
                        <div style={{ width: '36px', height: '18px', background: '#00b894', borderRadius: '9px', position: 'relative', flexShrink: 0, marginLeft: '8px' }}>
                            <div style={{ width: '14px', height: '14px', background: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ padding: '12px', borderBottom: '1px solid #f1f3f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: '600', fontSize: '13px', color: '#333' }}>Chế độ tối</div>
                            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Giao diện tối cho mắt</div>
                        </div>
                        <div style={{ width: '36px', height: '18px', background: '#e9ecef', borderRadius: '9px', position: 'relative', flexShrink: 0, marginLeft: '8px' }}>
                            <div style={{ width: '14px', height: '14px', background: 'white', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: '600', fontSize: '13px', color: '#333' }}>Ngôn ngữ</div>
                            <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Tiếng Việt</div>
                        </div>
                        <span style={{ color: '#888', fontSize: '14px', flexShrink: 0 }}>→</span>
                    </div>
                </div>
            </div>

            {/* Logout Button */}
            <div style={{ marginTop: '16px' }}>
                <button style={{
                    width: '100%',
                    padding: '12px',
                    background: '#fff',
                    color: '#e74c3c',
                    border: '1px solid #e74c3c',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '13px'
                }}>
                    Đăng xuất
                </button>
            </div>
        </div>
    );
}
