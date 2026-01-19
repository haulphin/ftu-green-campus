import { useState, useEffect, useRef } from "react";

interface CameraModalProps {
    open: boolean;
    onClose: () => void;
}

export function CameraModal({ open, onClose }: CameraModalProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [shot, setShot] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        async function start() {
            if (!open) return;
            setErr(null);
            setShot(null);
            try {
                const s = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" },
                    audio: false,
                });
                if (!mounted) return;
                setStream(s);
                if (videoRef.current) {
                    videoRef.current.srcObject = s;
                    await videoRef.current.play();
                }
            } catch (error: any) {
                if (!mounted) return;
                console.error("Camera error:", error);

                // Provide specific error messages
                if (error.name === 'NotAllowedError') {
                    setErr("Bạn đã từ chối quyền camera. Vui lòng cho phép quyền Camera trong cài đặt trình duyệt.");
                } else if (error.name === 'NotFoundError') {
                    setErr("Không tìm thấy camera. Vui lòng kiểm tra thiết bị của bạn.");
                } else if (error.name === 'NotReadableError') {
                    setErr("Camera đang được sử dụng bởi ứng dụng khác. Vui lòng đóng ứng dụng đó và thử lại.");
                } else if (error.name === 'NotSupportedError') {
                    setErr("Trình duyệt không hỗ trợ camera hoặc cần HTTPS. Vui lòng sử dụng HTTPS.");
                } else {
                    setErr(`Không mở được camera: ${error.message || 'Lỗi không xác định'}`);
                }
            }
        }
        start();
        return () => {
            mounted = false;
            if (stream) stream.getTracks().forEach((t) => t.stop());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    function capture() {
        const v = videoRef.current;
        const c = canvasRef.current;
        if (!v || !c) return;
        const w = v.videoWidth || 720;
        const h = v.videoHeight || 1280;
        c.width = w;
        c.height = h;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(v, 0, 0, w, h);
        setShot(c.toDataURL("image/jpeg", 0.9));
    }

    function confirmPhoto() {
        // Wait 1 second then close
        setTimeout(() => {
            close();
        }, 1000);
    }

    function close() {
        if (stream) stream.getTracks().forEach((t) => t.stop());
        setStream(null);
        setShot(null);
        setErr(null);
        onClose();
    }

    if (!open) return null;

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(127, 29, 29, 0.7)' }} onClick={close} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, margin: '0 auto', maxWidth: '28rem' }}>
                <div style={{ borderTopLeftRadius: '24px', borderTopRightRadius: '24px', background: 'white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #fee2e2', overflow: 'hidden' }}>
                    <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(to right, #fef2f2, #f0fdf4)', borderBottom: '1px solid #fee2e2' }}>
                        <div>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#991b1b' }}>
                                Locket FTU
                            </div>
                            <div style={{ fontSize: '12px', color: '#666' }}>
                                Chụp realtime để check-in xanh
                            </div>
                        </div>
                        <button
                            style={{ padding: '8px 12px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#666', fontWeight: '600' }}
                            onClick={close}
                        >
                            Đóng
                        </button>
                    </div>

                    <div style={{ padding: '0 20px 16px' }}>
                        {err ? (
                            <div style={{ borderRadius: '16px', background: '#fef2f2', border: '1px solid #fee2e2', padding: '12px', fontSize: '14px', color: '#991b1b', marginTop: '16px' }}>
                                {err}
                            </div>
                        ) : (
                            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #e5e7eb', background: 'transparent', marginTop: '16px', position: 'relative' }}>
                                {shot ? (
                                    <img src={shot} alt="shot" style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
                                ) : (
                                    <video
                                        ref={videoRef}
                                        style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                                        playsInline
                                        muted
                                    />
                                )}

                                {/* Circular capture button */}
                                {!shot && (
                                    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                                        <button
                                            onClick={capture}
                                            disabled={!!err}
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '50%',
                                                background: 'white',
                                                border: '4px solid rgba(255, 255, 255, 0.8)',
                                                cursor: 'pointer',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.2s',
                                                opacity: err ? 0.5 : 1
                                            }}
                                        >
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                background: 'white'
                                            }} />
                                        </button>
                                    </div>
                                )}

                                {/* Confirm button when photo is taken */}
                                {shot && (
                                    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                                        <button
                                            onClick={confirmPhoto}
                                            style={{
                                                padding: '12px 24px',
                                                borderRadius: '24px',
                                                background: 'rgba(34, 197, 94, 0.9)',
                                                color: 'white',
                                                border: 'none',
                                                cursor: 'pointer',
                                                fontWeight: '600',
                                                fontSize: '14px',
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                        >
                                            ✓ Xác nhận
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <canvas ref={canvasRef} style={{ display: 'none' }} />

                        <div style={{ marginTop: '12px', borderRadius: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '12px' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: '#166534' }}>Gợi ý check-in</div>
                            <div style={{ marginTop: '4px', fontSize: '14px', color: 'rgba(22, 101, 52, 0.8)' }}>
                                Refill / Không nhựa / Phân loại rác • tự gắn timestamp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
