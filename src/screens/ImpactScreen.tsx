// src/screens/ImpactScreen.tsx
export function ImpactScreen() {
    return (
        <div style={{ padding: '12px', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '16px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '800', margin: 0, color: '#333' }}>Green Impact</h2>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>Tổng hợp hành vi xanh & quy đổi</div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
                <div style={{ background: 'white', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '6px' }}>Tổng điểm xanh</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '2px' }}>420</div>
                    <div style={{ fontSize: '10px', color: '#666' }}>Quy đổi điểm rèn luyện</div>
                </div>
                <div style={{ background: 'white', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '6px' }}>CO₂ tiết kiệm</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '2px' }}>3.2 kg</div>
                    <div style={{ fontSize: '10px', color: '#666' }}>ước tính</div>
                </div>
                <div style={{ background: 'white', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '6px' }}>Refill nước</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '2px' }}>18 lần</div>
                    <div style={{ fontSize: '10px', color: '#666' }}>~18 chai nhựa</div>
                </div>
                <div style={{ background: 'white', borderRadius: '10px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.3px', marginBottom: '6px' }}>Check-in hợp lệ</div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '2px' }}>31</div>
                    <div style={{ fontSize: '10px', color: '#666' }}>realtime</div>
                </div>
            </div>

            {/* Progress Card */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', fontSize: '13px', color: '#333', marginBottom: '6px' }}>Tiến độ điểm rèn luyện</div>
                <div style={{ fontSize: '11px', color: '#666', marginBottom: '10px' }}>
                    Đạt 500 điểm xanh để cộng +5 điểm rèn luyện
                </div>
                <div style={{ height: '10px', borderRadius: '99px', background: '#f1f2f6', overflow: 'hidden', marginBottom: '6px' }}>
                    <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #fe2c55 0%, #00b894 100%)' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#666' }}>420 / 500 điểm (84%)</div>
            </div>

            {/* Green Timeline */}
            <div>
                <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '12px', color: '#333' }}>Green Timeline</h3>
                <div style={{ background: 'white', borderRadius: '10px', padding: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '12px' }}>
                        Nhật ký ảnh hoạt động xanh (kiểu Locket)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} style={{
                                aspectRatio: '3/4',
                                background: 'linear-gradient(135deg, #fff7e6 0%, #e6fffa 100%)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                border: '1px solid #e9ecef'
                            }}>
                                📸
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '12px', textAlign: 'center' }}>
                        <button style={{
                            padding: '8px 16px',
                            background: '#f1f1f2',
                            color: '#161823',
                            border: 'none',
                            borderRadius: '6px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}>
                            Xem tất cả
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
