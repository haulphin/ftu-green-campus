import { UI, cn } from "../theme";
import { SoftCard, AccentBar, StatPill } from "../components";

export function ImpactScreen() {
    return (
        <div className="pb-28 pt-3">
            <div className="px-5">
                <AccentBar />
                <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>
                    Green Impact
                </div>
                <div className={cn("mt-1 text-sm", UI.text.soft)}>
                    Tổng hợp hành vi xanh (realtime) & quy đổi
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <StatPill label="Tổng điểm xanh" value="420" sub="Quy đổi điểm rèn luyện" />
                    <StatPill label="CO₂ tiết kiệm" value="3.2 kg" sub="ước tính" />
                    <StatPill label="Refill nước" value="18 lần" sub="~18 chai nhựa" />
                    <StatPill label="Check-in hợp lệ" value="31" sub="realtime" />
                </div>

                <SoftCard className="mt-4 p-4">
                    <div className={cn("text-sm font-semibold", UI.text.strong)}>Tiến độ điểm rèn luyện</div>
                    <div className={cn("mt-1 text-sm", UI.text.soft)}>
                        Đạt 500 điểm xanh để cộng +5 điểm rèn luyện
                    </div>
                    <div className="mt-3 h-3 rounded-full bg-red-50 border border-red-100 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-red-600 to-emerald-500"
                            style={{ width: "84%" }}
                        />
                    </div>
                    <div className={cn("mt-2 text-xs", UI.text.faint)}>420 / 500 điểm</div>
                </SoftCard>

                <SoftCard className="mt-4 p-4">
                    <div className={cn("text-sm font-semibold", UI.text.strong)}>Green Timeline</div>
                    <div className={cn("mt-1 text-sm", UI.text.soft)}>
                        Nhật ký ảnh hoạt động xanh (kiểu Locket)
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">
                            📸
                        </div>
                        <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">
                            📸
                        </div>
                        <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">
                            📸
                        </div>
                    </div>
                </SoftCard>
            </div>
        </div>
    );
}
