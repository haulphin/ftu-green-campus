// src/screens/ImpactScreen.tsx
export function ImpactScreen() {
    return (
        <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#333' }}>Green Impact</h2>
                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>Tổng hợp hành vi xanh (realtime) & quy đổi</div>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Tổng điểm xanh</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>420</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Quy đổi điểm rèn luyện</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>CO₂ tiết kiệm</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>3.2 kg</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>ước tính</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Refill nước</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>18 lần</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>~18 chai nhựa</div>
                </div>
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Check-in hợp lệ</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', color: '#333', marginBottom: '4px' }}>31</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>realtime</div>
                </div>
            </div>

            {/* Progress Card */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                <div style={{ fontWeight: '700', fontSize: '16px', color: '#333', marginBottom: '8px' }}>Tiến độ điểm rèn luyện</div>
                <div style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>
                    Đạt 500 điểm xanh để cộng +5 điểm rèn luyện
                </div>
                <div style={{ height: '12px', borderRadius: '99px', background: '#f1f2f6', overflow: 'hidden', marginBottom: '8px' }}>
                    <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #fe2c55 0%, #00b894 100%)' }} />
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>420 / 500 điểm (84%)</div>
            </div>

            {/* Green Timeline */}
            <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>Green Timeline</h3>
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                        Nhật ký ảnh hoạt động xanh (kiểu Locket)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} style={{
                                aspectRatio: '3/4',
                                background: 'linear-gradient(135deg, #fff7e6 0%, #e6fffa 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '32px',
                                border: '1px solid #e9ecef'
                            }}>
                                📸
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
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
                            Xem tất cả
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
