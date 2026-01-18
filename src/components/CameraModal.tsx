import { useState, useEffect, useRef } from "react";
import { UI, cn } from "../theme";

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
            } catch {
                setErr("Không mở được camera. Hãy cho phép quyền Camera trong trình duyệt.");
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

    function close() {
        if (stream) stream.getTracks().forEach((t) => t.stop());
        setStream(null);
        setShot(null);
        setErr(null);
        onClose();
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-red-950/70" onClick={close} />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-md">
                <div className="rounded-t-3xl bg-white shadow-2xl border border-red-100 overflow-hidden">
                    <div className="px-5 pt-4 pb-3 flex items-center justify-between bg-gradient-to-r from-red-50 to-emerald-50 border-b border-red-100">
                        <div>
                            <div className={cn("text-base font-semibold tracking-tight", UI.text.strong)}>
                                Locket FTU
                            </div>
                            <div className={cn("text-xs", UI.text.soft)}>
                                Chụp realtime để check-in xanh
                            </div>
                        </div>
                        <button className={cn(UI.ghostBtn, "text-sm px-3 py-2")} onClick={close}>
                            Đóng
                        </button>
                    </div>

                    <div className="px-5 pb-4">
                        {err ? (
                            <div className="rounded-2xl bg-red-50 border border-red-100 px-3 py-3 text-sm text-red-900">
                                {err}
                            </div>
                        ) : (
                            <div className="rounded-3xl overflow-hidden border border-red-100 bg-red-950">
                                {shot ? (
                                    <img src={shot} alt="shot" className="w-full h-[360px] object-cover" />
                                ) : (
                                    <video
                                        ref={videoRef}
                                        className="w-full h-[360px] object-cover"
                                        playsInline
                                        muted
                                    />
                                )}
                            </div>
                        )}

                        <canvas ref={canvasRef} className="hidden" />

                        <div className="mt-4 flex items-center gap-3">
                            <button
                                className="flex-1 rounded-2xl px-4 py-3 bg-red-600 text-white font-semibold shadow-sm hover:bg-red-700"
                                onClick={capture}
                                disabled={!!err}
                            >
                                📸 Chụp
                            </button>
                            <button
                                className="flex-1 rounded-2xl px-4 py-3 bg-red-50 text-red-900 font-semibold hover:bg-red-100"
                                onClick={() => setShot(null)}
                                disabled={!shot}
                            >
                                Chụp lại
                            </button>
                        </div>

                        <div className="mt-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-3 py-3">
                            <div className="text-sm font-semibold text-emerald-900">Gợi ý check-in</div>
                            <div className="mt-1 text-sm text-emerald-900/80">
                                Refill / Không nhựa / Phân loại rác • tự gắn timestamp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
