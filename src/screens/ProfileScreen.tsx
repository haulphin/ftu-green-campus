// src/screens/ProfileScreen.tsx
export function ProfileScreen() {
    return (
        <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#333' }}>Tài khoản sinh viên</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Thông tin cá nhân & học tập</div>
            </div>

            {/* Profile Card */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, #fe2c55 0%, #00b894 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        color: 'white',
                        fontWeight: '700',
                        flexShrink: 0
                    }}>
                        LN
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '700', fontSize: '20px', color: '#333', marginBottom: '4px' }}>Lê Thành Nguyên</div>
                        <div style={{ fontSize: '14px', color: '#666', marginBottom: '2px' }}>MSSV: 2312155138</div>
                        <div style={{ fontSize: '14px', color: '#666' }}>Trạng thái: <span style={{ color: '#00b894', fontWeight: '600' }}>Đang học</span></div>
                    </div>
                    <button style={{
                        padding: '10px 20px',
                        background: '#f1f1f2',
                        color: '#161823',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}>
                        Chỉnh sửa
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Green Points</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#00b894' }}>420</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Streak</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#fe2c55' }}>4 ngày</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Điểm rèn luyện</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#333' }}>85</div>
                </div>
            </div>

            {/* Settings */}
            <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Cài đặt</h3>
                <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                    <div style={{ padding: '16px', borderBottom: '1px solid #f1f3f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#333' }}>Thông báo</div>
                            <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>Nhận thông báo về lịch học và sự kiện</div>
                        </div>
                        <div style={{ width: '40px', height: '20px', background: '#00b894', borderRadius: '10px', position: 'relative' }}>
                            <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ padding: '16px', borderBottom: '1px solid #f1f3f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#333' }}>Chế độ tối</div>
                            <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>Giao diện tối cho mắt</div>
                        </div>
                        <div style={{ width: '40px', height: '20px', background: '#e9ecef', borderRadius: '10px', position: 'relative' }}>
                            <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }} />
                        </div>
                    </div>
                    <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <div>
                            <div style={{ fontWeight: '600', fontSize: '14px', color: '#333' }}>Ngôn ngữ</div>
                            <div style={{ fontSize: '13px', color: '#666', marginTop: '2px' }}>Tiếng Việt</div>
                        </div>
                        <span style={{ color: '#888' }}>→</span>
                    </div>
                </div>
            </div>

            {/* Logout Button */}
            <div style={{ marginTop: '24px' }}>
                <button style={{
                    width: '100%',
                    padding: '14px',
                    background: '#fff',
                    color: '#e74c3c',
                    border: '1px solid #e74c3c',
                    borderRadius: '8px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '15px'
                }}>
                    Đăng xuất
                </button>
            </div>
        </div>
    );
}
