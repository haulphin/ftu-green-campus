import { useState, useMemo } from "react";
import { UI, cn } from "../theme";
import { classesMock, campusUpdatesMock, eventsMock } from "../data";
import { SoftCard, AccentBar, StatPill } from "../components";

export function ScheduleScreen() {
    const [eventJoined, setEventJoined] = useState<Record<string, boolean>>({});
    const [updateExpanded, setUpdateExpanded] = useState<Record<string, boolean>>({});
    const [selected, setSelected] = useState<string>(classesMock[0].id);
    const selectedItem = useMemo(
        () => classesMock.find((c) => c.id === selected) ?? classesMock[0],
        [selected]
    );

    function toggleJoin(eventId: string) {
        setEventJoined((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
    }

    function toggleUpdate(id: string) {
        setUpdateExpanded((p) => ({ ...p, [id]: !p[id] }));
    }

    const greenEvents = eventsMock.filter((e) => e.isGreen);

    return (
        <div className="pb-28 pt-3">
            <div className="px-5">
                <AccentBar />
                <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>
                    Hôm nay
                </div>
                <div className={cn("mt-1 text-sm", UI.text.soft)}>
                    Lịch học & gợi ý xanh theo bối cảnh
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                    <StatPill label="Green Points" value="120" sub="+18 hôm nay" />
                    <StatPill label="CO₂" value="0.9 kg" sub="tuần này" />
                    <StatPill label="Streak" value="4 ngày" />
                </div>

                {/* Campus updates */}
                <div className="mt-5">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className={cn("text-sm font-semibold", UI.text.strong)}>Cập nhật FTU</div>
                            <div className={cn("text-xs", UI.text.faint)}>
                                Thông báo nhà trường • dự án CLB • sự kiện
                            </div>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-900/70 font-semibold">
                            Mới
                        </span>
                    </div>

                    <div className="mt-3 space-y-2">
                        {campusUpdatesMock.map((u) => {
                            const open = !!updateExpanded[u.id];
                            return (
                                <div key={u.id} className={cn(UI.card, "px-4 py-3")}>
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className={cn("text-sm font-semibold", UI.text.strong)}>{u.title}</div>
                                            <div className={cn("mt-1 text-xs", UI.text.faint)}>
                                                {u.source} • {u.time}
                                            </div>
                                            <div className={cn("mt-2 text-sm", UI.text.soft)}>
                                                {open ? u.summary : `${u.summary.slice(0, 90)}${u.summary.length > 90 ? "…" : ""}`}
                                            </div>
                                            {u.tags?.length ? (
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {u.tags.map((t) => (
                                                        <span
                                                            key={t}
                                                            className={cn(
                                                                "text-[11px] font-semibold px-2.5 py-1 rounded-full border",
                                                                t.toLowerCase().includes("green")
                                                                    ? "bg-emerald-50 border-emerald-200 text-emerald-900/80"
                                                                    : "bg-red-50 border-red-100 text-red-900/70"
                                                            )}
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="shrink-0 flex flex-col items-end gap-2">
                                            <button
                                                className="text-xs font-semibold text-red-700 hover:text-red-900"
                                                onClick={() => toggleUpdate(u.id)}
                                            >
                                                {open ? "Thu gọn" : "Mở"}
                                            </button>
                                            {u.linkLabel ? (
                                                <button
                                                    className={cn(
                                                        "text-xs px-3 py-2 rounded-2xl",
                                                        "bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold"
                                                    )}
                                                >
                                                    {u.linkLabel}
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Events that can be added into schedule */}
                <div className="mt-5">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className={cn("text-sm font-semibold", UI.text.strong)}>Sự kiện hôm nay</div>
                            <div className={cn("text-xs", UI.text.faint)}>
                                Sự kiện CLB/nhà trường sẽ hiển thị trong lịch
                            </div>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold">
                            🌿 Green bonus
                        </span>
                    </div>

                    <div className="mt-3 space-y-3">
                        {eventsMock.map((e) => {
                            const joined = !!eventJoined[e.id];
                            return (
                                <div key={e.id} className={cn(UI.card, "px-4 py-4")}>
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className={cn("text-xs", UI.text.faint)}>
                                                {e.start} – {e.end}
                                            </div>
                                            <div className={cn("mt-1 text-base font-semibold", UI.text.strong)}>
                                                {e.title}
                                            </div>
                                            <div className={cn("mt-1 text-sm", UI.text.mid)}>
                                                {e.location} • {e.organizer}
                                            </div>
                                            <div className={cn("mt-2 text-sm", UI.text.soft)}>{e.description}</div>
                                            {e.isGreen ? (
                                                <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80">
                                                    ♻️ Sự kiện xanh • thưởng lớn
                                                </div>
                                            ) : (
                                                <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-900/70">
                                                    🎓 Sự kiện campus
                                                </div>
                                            )}
                                        </div>

                                        <div className="shrink-0 flex flex-col items-end gap-2">
                                            <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-emerald-50 border border-red-100 text-red-900/70 font-semibold">
                                                +{e.points} pts
                                            </span>
                                            <button
                                                onClick={() => toggleJoin(e.id)}
                                                className={cn(
                                                    "rounded-2xl px-3 py-2 text-sm font-semibold border",
                                                    joined
                                                        ? "bg-emerald-50 border-emerald-200 text-emerald-900/80"
                                                        : "bg-white/80 border-red-100 text-red-900/80 hover:bg-red-50"
                                                )}
                                            >
                                                {joined ? "Đã lưu lịch" : "＋ Lưu vào Lịch"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {greenEvents.length ? (
                        <div className="mt-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-3 py-3">
                            <div className="text-sm font-semibold text-emerald-900">Tip</div>
                            <div className="mt-1 text-sm text-emerald-900/80">
                                Sự kiện xanh thường cộng điểm rất nhiều. Bạn chỉ cần check-in realtime tại sự kiện
                                để nhận bonus.
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div>
                        <div className={cn("text-sm font-semibold", UI.text.strong)}>Timeline lớp học</div>
                        <div className={cn("text-xs", UI.text.faint)}>Chọn 1 lớp để xem gợi ý xanh</div>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold">
                        🌱 Smart
                    </span>
                </div>

                <div className="mt-3 space-y-3">
                    {classesMock.map((c) => {
                        const active = c.id === selected;
                        return (
                            <button
                                key={c.id}
                                onClick={() => setSelected(c.id)}
                                className={cn(
                                    UI.card,
                                    "w-full text-left px-4 py-4 transition",
                                    active ? "ring-2 ring-emerald-200" : "hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                                )}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className={cn("text-xs", UI.text.faint)}>
                                            {c.start} – {c.end}
                                        </div>
                                        <div className={cn("mt-1 text-base font-semibold", UI.text.strong)}>
                                            {c.title}
                                        </div>
                                        <div className={cn("mt-1 text-sm", UI.text.mid)}>{c.room}</div>
                                        {c.tags?.length ? (
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {c.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-900/80"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}
                                        {c.gapHint ? (
                                            <div className="mt-3 text-sm text-red-900/70 bg-red-50 border border-red-100 rounded-2xl px-3 py-2">
                                                ⏱ {c.gapHint}
                                            </div>
                                        ) : null}
                                    </div>
                                    <span className="inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900/80 border border-emerald-200 font-semibold">
                                        +{(c.greenNudges ?? []).reduce((a, x) => a + x.points, 0)} pts
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <SoftCard className="mt-4 p-4">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className={cn("text-sm font-semibold", UI.text.strong)}>
                                Gợi ý xanh cho lớp đang chọn
                            </div>
                            <div className={cn("mt-1 text-sm", UI.text.soft)}>
                                Chọn 1–2 việc nhỏ, check-in realtime để cộng điểm.
                            </div>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-emerald-50 border border-red-100 text-red-900/70 font-semibold">
                            Context
                        </span>
                    </div>

                    <div className="mt-4 grid gap-3">
                        {(selectedItem.greenNudges ?? []).map((n, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl border border-red-100 bg-white/90 px-3 py-3 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-lg">{n.icon}</div>
                                    <div>
                                        <div className={cn("text-sm font-semibold", UI.text.strong)}>{n.label}</div>
                                        <div className={cn("text-xs", UI.text.faint)}>
                                            Gợi ý theo lịch học & khu vực
                                        </div>
                                    </div>
                                </div>
                                <span className="rounded-2xl px-3 py-2 text-sm font-semibold bg-emerald-50 border border-emerald-200 text-emerald-900/80">
                                    +{n.points}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex gap-3">
                        <button className={cn(UI.ghostBtn, "flex-1 py-3")}>Bản đồ xanh</button>
                        <button className={cn(UI.primaryBtn, "flex-1 py-3")}>Mở camera</button>
                    </div>
                </SoftCard>
            </div>
        </div>
    );
}
