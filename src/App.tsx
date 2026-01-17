import React, { useMemo, useState } from "react";

/**
 * FTU Green Campus – polished demo UI
 * Primary: FTU red
 * Accent: emerald
 * Includes: sticky top bar, bottom nav w/ center camera, schedule, todo-by-class, impact, profile.
 */

type Tab = "schedule" | "actions" | "impact" | "profile";

type ClassItem = {
  id: string;
  start: string;
  end: string;
  title: string;
  room: string;
  building?: string;
  teacher?: string;
  tags?: string[];
  gapHint?: string;
  greenNudges?: Array<{ icon: string; label: string; points: number }>;
};

type Todo = {
  id: string;
  icon: string;
  title: string;
  desc?: string;
  rule?: string;
  points?: number;
  relatedTo: string; // class id
  kind: "note" | "green";
};

type CampusUpdate = {
  id: string;
  title: string;
  source: "Nhà trường" | "CLB" | "Khoa";
  time: string;
  summary: string;
  tags?: string[];
  linkLabel?: string;
};

type EventItem = {
  id: string;
  start: string;
  end: string;
  title: string;
  location: string;
  organizer: string;
  description: string;
  isGreen: boolean;
  points: number; // bonus points when check-in
};

const UI = {
  pageBg:
    "bg-[radial-gradient(900px_700px_at_10%_0%,rgba(220,38,38,0.10),transparent_55%),radial-gradient(900px_700px_at_95%_10%,rgba(16,185,129,0.12),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.94),rgba(255,255,255,1))]",
  card:
    "rounded-3xl bg-white/88 backdrop-blur border border-red-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
  softBorder: "border border-red-100/80",
  text: {
    strong: "text-red-950",
    mid: "text-red-950/70",
    soft: "text-red-950/55",
    faint: "text-red-950/40",
  },
  primaryBtn:
    "rounded-2xl px-4 py-2 bg-red-600 text-white font-semibold shadow-sm hover:bg-red-700 active:bg-red-800",
  ghostBtn:
    "rounded-2xl px-4 py-2 bg-red-50 text-red-900 font-semibold hover:bg-red-100",
  chip:
    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/25 text-white",
};

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const classesMock: ClassItem[] = [
  {
    id: "c1",
    start: "07:00",
    end: "09:00",
    title: "Tư Duy Thiết Kế",
    room: "B201",
    tags: ["Hôm nay"],
    greenNudges: [
      { icon: "💧", label: "Mang bình nước / refill", points: 10 },
      { icon: "🚫🥤", label: "Không mua đồ nhựa sau break", points: 8 },
    ],
  },
  {
    id: "c2",
    start: "07:00",
    end: "09:00",
    title: "Marketing Quốc Tế",
    room: "B201",
    tags: ["Hôm nay"],
    greenNudges: [
      { icon: "📄", label: "Dùng slide online", points: 8 },
      { icon: "♻️", label: "Phân loại rác sau giờ học", points: 6 },
    ],
  },
];

const todosMock: Todo[] = [
  // --- Tư Duy Thiết Kế
  { id: "dt_note", icon: "📝", title: "Note bài", kind: "note", relatedTo: "c1" },
  {
    id: "dt_empathy",
    icon: "🧠",
    title: "Làm bài tập empathy",
    desc: "Ghi insight + pain points",
    kind: "note",
    relatedTo: "c1",
  },
  {
    id: "dt_no_plastic",
    icon: "🚫🥤",
    title: "Không mua đồ nhựa sau break",
    desc: "Chụp realtime để cộng điểm",
    points: 8,
    rule: "Trong 30 phút sau giờ học",
    kind: "green",
    relatedTo: "c1",
  },

  // --- Marketing Quốc Tế
  { id: "mk_meet", icon: "👥", title: "Họp nhóm", kind: "note", relatedTo: "c2" },
  { id: "mk_ch3", icon: "📚", title: "Note bài chương 3", kind: "note", relatedTo: "c2" },
  {
    id: "mk_sort",
    icon: "♻️",
    title: "Phân loại rác sau giờ học",
    desc: "Chụp realtime để cộng điểm",
    points: 6,
    rule: "Ngay sau khi rời lớp",
    kind: "green",
    relatedTo: "c2",
  },
];

const campusUpdatesMock: CampusUpdate[] = [
  {
    id: "u1",
    title: "Thông báo: Đăng ký học phần bổ sung",
    source: "Nhà trường",
    time: "Hôm nay • 09:15",
    summary: "Mở cổng đăng ký học phần bổ sung đến 23:59. Kiểm tra danh sách lớp trước khi đăng ký.",
    tags: ["Học vụ"],
    linkLabel: "Xem chi tiết",
  },
  {
    id: "u2",
    title: "Dự án CLB: Green Campus Week",
    source: "CLB",
    time: "Hôm nay • 12:00",
    summary: "Tuyển tình nguyện viên cho chuỗi hoạt động giảm nhựa & phân loại rác trong khuôn viên.",
    tags: ["Green", "TNV"],
    linkLabel: "Đăng ký",
  },
  {
    id: "u3",
    title: "Khoa: Talkshow ‘Sustainable Trade’",
    source: "Khoa",
    time: "Ngày mai • 08:30",
    summary: "Khách mời doanh nghiệp chia sẻ về thương mại bền vững và cơ hội nghề nghiệp.",
    tags: ["Seminar"],
    linkLabel: "Lưu lịch",
  },
];

const eventsMock: EventItem[] = [
  {
    id: "e1",
    start: "10:00",
    end: "11:30",
    title: "Green Campus Cleanup",
    location: "Sân trước tòa A",
    organizer: "CLB Môi trường FTU",
    description: "Dọn rác + phân loại, check-in realtime để nhận thưởng.",
    isGreen: true,
    points: 80,
  },
  {
    id: "e2",
    start: "15:00",
    end: "17:00",
    title: "Workshop: Refill & Zero Plastic",
    location: "Hội trường B",
    organizer: "Đoàn Thanh Niên",
    description: "Hướng dẫn thói quen xanh + cam kết không nhựa 7 ngày.",
    isGreen: true,
    points: 120,
  },
  {
    id: "e3",
    start: "18:30",
    end: "20:00",
    title: "Demo Day dự án CLB",
    location: "Phòng B203",
    organizer: "CLB Khởi nghiệp",
    description: "Giới thiệu dự án học kỳ, networking.",
    isGreen: false,
    points: 15,
  },
];

function SoftCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn(UI.card, className)}>{children}</div>;
}

function AccentBar({ className }: { className?: string }) {
  return <div className={cn("h-1.5 w-20 rounded-full bg-gradient-to-r from-red-600 to-emerald-500", className)} />;
}

function StatPill({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div
      className={cn("rounded-2xl bg-white/75 backdrop-blur", UI.softBorder, "px-4 py-3")}
      style={{ boxShadow: "0 8px 22px rgba(0,0,0,0.04)" }}
    >
      <div className={cn("text-xs", UI.text.soft)}>{label}</div>
      <div className={cn("mt-1 text-lg font-semibold tracking-tight", UI.text.strong)}>{value}</div>
      {sub ? <div className={cn("text-xs mt-1", UI.text.faint)}>{sub}</div> : null}
    </div>
  );
}

function FTULogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      role="img"
      aria-label="Foreign Trade University"
    >
      {/* Outer ring */}
      <circle cx="64" cy="64" r="62" fill="#C8102E" />
      <circle cx="64" cy="64" r="56" fill="none" stroke="white" strokeWidth="6" opacity="0.95" />
      {/* Inner badge */}
      <circle cx="64" cy="64" r="44" fill="#C8102E" stroke="white" strokeWidth="4" opacity="0.95" />
      {/* Simple FTU monogram (stylized) */}
      <path
        d="M38 46h52v10H69v34H59V56H38V46z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M80 56h10v34c0 10-8 18-18 18H52c-10 0-18-8-18-18V56h10v34c0 4 4 8 8 8h20c4 0 8-4 8-8V56z"
        fill="white"
        opacity="0.9"
      />
      {/* Tiny dots hinting circular text without copying it */}
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2;
        const x = 64 + Math.cos(a) * 54;
        const y = 64 + Math.sin(a) * 54;
        return <circle key={i} cx={x} cy={y} r={1.2} fill="white" opacity="0.35" />;
      })}
    </svg>
  );
}

function TopBar({ title, subtitle, onOpenProfile }: { title: string; subtitle?: string; onOpenProfile?: () => void }) {
  return (
    <div className="sticky top-0 z-40">
      <div className="mx-auto max-w-md">
        <div className="px-4 pt-3">
          <div className="rounded-3xl overflow-hidden shadow-[0_12px_30px_rgba(220,38,38,0.22)]">
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700">
              <div className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 border border-white/25 overflow-hidden">
                      <FTULogo className="h-7 w-7" />
                    </span>
                    <div className="text-white font-semibold tracking-tight truncate">{title}</div>
                    <div className="text-[11px] text-white/75 font-medium truncate">Foreign Trade University</div>
                  </div>
                  {subtitle ? <div className="mt-1 text-white/80 text-xs truncate">{subtitle}</div> : null}
                </div>

                <button onClick={onOpenProfile} className={cn(UI.chip, "shrink-0")} title="Tài khoản">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/30 border border-white/25">⭐</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-white/30 border border-white/25 flex items-center justify-center">👤</span>
                    <span className="text-left leading-tight">
                      <span className="block text-xs font-semibold">Lê Thành Nguyên</span>
                      <span className="block text-[11px] text-white/80">2312155138</span>
                    </span>
                    <span className="text-white/80">▾</span>
                  </span>
                </button>
              </div>
              <div className="h-2 bg-gradient-to-b from-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CameraModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [shot, setShot] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    async function start() {
      if (!open) return;
      setErr(null);
      setShot(null);
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
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
              <div className={cn("text-base font-semibold tracking-tight", UI.text.strong)}>Locket FTU</div>
              <div className={cn("text-xs", UI.text.soft)}>Chụp realtime để check-in xanh</div>
            </div>
            <button className={cn(UI.ghostBtn, "text-sm px-3 py-2")} onClick={close}>
              Đóng
            </button>
          </div>

          <div className="px-5 pb-4">
            {err ? (
              <div className="rounded-2xl bg-red-50 border border-red-100 px-3 py-3 text-sm text-red-900">{err}</div>
            ) : (
              <div className="rounded-3xl overflow-hidden border border-red-100 bg-red-950">
                {shot ? (
                  <img src={shot} alt="shot" className="w-full h-[360px] object-cover" />
                ) : (
                  <video ref={videoRef} className="w-full h-[360px] object-cover" playsInline muted />
                )}
              </div>
            )}

            <canvas ref={canvasRef} className="hidden" />

            <div className="mt-4 flex items-center gap-3">
              <button className="flex-1 rounded-2xl px-4 py-3 bg-red-600 text-white font-semibold shadow-sm hover:bg-red-700" onClick={capture} disabled={!!err}>
                📸 Chụp
              </button>
              <button className="flex-1 rounded-2xl px-4 py-3 bg-red-50 text-red-900 font-semibold hover:bg-red-100" onClick={() => setShot(null)} disabled={!shot}>
                Chụp lại
              </button>
            </div>

            <div className="mt-3 rounded-2xl bg-emerald-50 border border-emerald-200 px-3 py-3">
              <div className="text-sm font-semibold text-emerald-900">Gợi ý check-in</div>
              <div className="mt-1 text-sm text-emerald-900/80">Refill / Không nhựa / Phân loại rác • tự gắn timestamp.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav({ tab, setTab, onOpenCamera }: { tab: Tab; setTab: (t: Tab) => void; onOpenCamera: () => void }) {
  const Item = ({ id, label, icon }: { id: Tab; label: string; icon: string }) => {
    const active = tab === id;
    return (
      <button
        onClick={() => setTab(id)}
        className={cn(
          "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition",
          active ? "bg-red-600 text-white shadow-sm" : "text-red-950/70 hover:bg-red-50"
        )}
      >
        <span className="text-lg leading-none">{icon}</span>
        <span className="text-[11px] font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-md px-4 pb-4">
        <div className="relative rounded-3xl bg-white/90 backdrop-blur border border-red-100 shadow-lg px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Item id="schedule" label="Lịch" icon="📅" />
            <Item id="actions" label="Todo" icon="✅" />
          </div>
          <div className="flex items-center gap-1">
            <Item id="impact" label="Impact" icon="🌿" />
            <Item id="profile" label="Tài khoản" icon="👤" />
          </div>

          <button
            onClick={onOpenCamera}
            className="absolute left-1/2 -translate-x-1/2 -top-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-red-600 to-emerald-500 text-white shadow-xl border border-white/70 flex items-center justify-center ring-4 ring-white/70"
            aria-label="Open camera"
            title="Locket FTU"
          >
            <span className="text-2xl">📷</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ScheduleScreen() {
  const [eventJoined, setEventJoined] = useState<Record<string, boolean>>({});
  const [updateExpanded, setUpdateExpanded] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<string>(classesMock[0].id);
  const selectedItem = useMemo(() => classesMock.find((c) => c.id === selected) ?? classesMock[0], [selected]);

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
        <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>Hôm nay</div>
        <div className={cn("mt-1 text-sm", UI.text.soft)}>Lịch học & gợi ý xanh theo bối cảnh</div>

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
              <div className={cn("text-xs", UI.text.faint)}>Thông báo nhà trường • dự án CLB • sự kiện</div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-900/70 font-semibold">Mới</span>
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
                        <button className={cn("text-xs px-3 py-2 rounded-2xl", "bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold")}
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
              <div className={cn("text-xs", UI.text.faint)}>Sự kiện CLB/nhà trường sẽ hiển thị trong lịch</div>
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
                      <div className={cn("text-xs", UI.text.faint)}>{e.start} – {e.end}</div>
                      <div className={cn("mt-1 text-base font-semibold", UI.text.strong)}>{e.title}</div>
                      <div className={cn("mt-1 text-sm", UI.text.mid)}>{e.location} • {e.organizer}</div>
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
                Sự kiện xanh thường cộng điểm rất nhiều. Bạn chỉ cần check-in realtime tại sự kiện để nhận bonus.
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className={cn("text-sm font-semibold", UI.text.strong)}>Timeline lớp học</div>
            <div className={cn("text-xs", UI.text.faint)}>Chọn 1 lớp để xem gợi ý xanh</div>
          </div>
          <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold">🌱 Smart</span>
        </div>

        <div className="mt-3 space-y-3">
          {classesMock.map((c) => {
            const active = c.id === selected;
            return (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={cn(UI.card, "w-full text-left px-4 py-4 transition", active ? "ring-2 ring-emerald-200" : "hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={cn("text-xs", UI.text.faint)}>{c.start} – {c.end}</div>
                    <div className={cn("mt-1 text-base font-semibold", UI.text.strong)}>{c.title}</div>
                    <div className={cn("mt-1 text-sm", UI.text.mid)}>{c.room}</div>
                    {c.tags?.length ? (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-900/80">{t}</span>
                        ))}
                      </div>
                    ) : null}
                    {c.gapHint ? (
                      <div className="mt-3 text-sm text-red-900/70 bg-red-50 border border-red-100 rounded-2xl px-3 py-2">⏱ {c.gapHint}</div>
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
              <div className={cn("text-sm font-semibold", UI.text.strong)}>Gợi ý xanh cho lớp đang chọn</div>
              <div className={cn("mt-1 text-sm", UI.text.soft)}>Chọn 1–2 việc nhỏ, check-in realtime để cộng điểm.</div>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-emerald-50 border border-red-100 text-red-900/70 font-semibold">Context</span>
          </div>

          <div className="mt-4 grid gap-3">
            {(selectedItem.greenNudges ?? []).map((n, idx) => (
              <div key={idx} className="rounded-2xl border border-red-100 bg-white/90 px-3 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-lg">{n.icon}</div>
                  <div>
                    <div className={cn("text-sm font-semibold", UI.text.strong)}>{n.label}</div>
                    <div className={cn("text-xs", UI.text.faint)}>Gợi ý theo lịch học & khu vực</div>
                  </div>
                </div>
                <span className="rounded-2xl px-3 py-2 text-sm font-semibold bg-emerald-50 border border-emerald-200 text-emerald-900/80">+{n.points}</span>
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

function ActionsScreen() {
  const todayClasses = classesMock;

  return (
    <div className="pb-28 pt-3">
      <div className="px-5">
        <AccentBar />
        <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>Todo theo môn</div>
        <div className={cn("mt-1 text-sm", UI.text.soft)}>Việc học + việc xanh (Locket FTU)</div>

        <SoftCard className="mt-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className={cn("text-sm font-semibold", UI.text.strong)}>Quick add</div>
              <div className={cn("text-xs", UI.text.faint)}>Tự thêm việc (sẽ nhắc lại vào lần học sau)</div>
            </div>
            <button className={cn(UI.primaryBtn, "text-sm px-3 py-2")}>＋ Thêm</button>
          </div>
          <div className="mt-3 rounded-2xl bg-red-50 border border-red-100 px-3 py-2 text-sm text-red-900/80">
            Ví dụ: “Mang bình nước”, “Note bài chương 3”, “Không mua đồ nhựa sau break”
          </div>
        </SoftCard>

        <div className="mt-4 space-y-4">
          {todayClasses.map((cl) => {
            const list = todosMock.filter((t) => t.relatedTo === cl.id);
            return (
              <SoftCard key={cl.id} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={cn("text-xs", UI.text.faint)}>{cl.start} – {cl.end}</div>
                    <div className={cn("text-base font-semibold", UI.text.strong)}>{cl.title}</div>
                    <div className={cn("text-sm", UI.text.mid)}>{cl.room}</div>
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold">Nhắc trước giờ học</span>
                </div>

                <div className="mt-3 space-y-2">
                  {list.map((t) => (
                    <div key={t.id} className="rounded-2xl bg-white/90 border border-red-100 px-3 py-3 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl leading-none">{t.icon}</div>
                        <div>
                          <div className={cn("text-sm font-semibold", UI.text.strong)}>{t.title}</div>
                          {t.desc ? <div className={cn("mt-1 text-sm", UI.text.soft)}>{t.desc}</div> : null}
                          {t.rule ? <div className={cn("mt-1 text-xs", UI.text.faint)}>⏱ {t.rule}</div> : null}
                        </div>
                      </div>

                      {t.kind === "green" ? (
                        <button className="rounded-2xl px-3 py-2 bg-gradient-to-br from-red-600 to-emerald-500 text-white text-sm font-semibold shadow-sm">📸 +{t.points ?? 0}</button>
                      ) : (
                        <button className="rounded-2xl px-3 py-2 bg-red-50 border border-red-100 text-red-900/80 text-sm font-semibold">☐</button>
                      )}
                    </div>
                  ))}
                </div>
              </SoftCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ImpactScreen() {
  return (
    <div className="pb-28 pt-3">
      <div className="px-5">
        <AccentBar />
        <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>Green Impact</div>
        <div className={cn("mt-1 text-sm", UI.text.soft)}>Tổng hợp hành vi xanh (realtime) & quy đổi</div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatPill label="Tổng điểm xanh" value="420" sub="Quy đổi điểm rèn luyện" />
          <StatPill label="CO₂ tiết kiệm" value="3.2 kg" sub="ước tính" />
          <StatPill label="Refill nước" value="18 lần" sub="~18 chai nhựa" />
          <StatPill label="Check-in hợp lệ" value="31" sub="realtime" />
        </div>

        <SoftCard className="mt-4 p-4">
          <div className={cn("text-sm font-semibold", UI.text.strong)}>Tiến độ điểm rèn luyện</div>
          <div className={cn("mt-1 text-sm", UI.text.soft)}>Đạt 500 điểm xanh để cộng +5 điểm rèn luyện</div>
          <div className="mt-3 h-3 rounded-full bg-red-50 border border-red-100 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-emerald-500" style={{ width: "84%" }} />
          </div>
          <div className={cn("mt-2 text-xs", UI.text.faint)}>420 / 500 điểm</div>
        </SoftCard>

        <SoftCard className="mt-4 p-4">
          <div className={cn("text-sm font-semibold", UI.text.strong)}>Green Timeline</div>
          <div className={cn("mt-1 text-sm", UI.text.soft)}>Nhật ký ảnh hoạt động xanh (kiểu Locket)</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">📸</div>
            <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">📸</div>
            <div className="h-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center">📸</div>
          </div>
        </SoftCard>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="pb-28 pt-3">
      <div className="px-5">
        <AccentBar />
        <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>Tài khoản sinh viên</div>
        <div className={cn("mt-1 text-sm", UI.text.soft)}>Thông tin cá nhân & học tập</div>

        <SoftCard className="mt-4 p-4">
          <div className="flex items-start gap-4">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center text-3xl">👤</div>
            <div className="min-w-0">
              <div className={cn("text-base font-semibold", UI.text.strong)}>Lê Thành Nguyên</div>
              <div className={cn("text-sm", UI.text.soft)}>MSSV: 2312155138</div>
              <div className={cn("text-sm", UI.text.soft)}>Trạng thái: Đang học</div>
            </div>
          </div>
        </SoftCard>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<Tab>("schedule");
  const [cameraOpen, setCameraOpen] = useState(false);

  return (
    <div className={cn("min-h-screen", UI.pageBg)}>
      <TopBar title="FTU Green Campus" subtitle="Check-in xanh realtime • tích điểm rèn luyện" onOpenProfile={() => setTab("profile")} />

      <div className="mx-auto max-w-md">
        {tab === "schedule" ? <ScheduleScreen /> : null}
        {tab === "actions" ? <ActionsScreen /> : null}
        {tab === "impact" ? <ImpactScreen /> : null}
        {tab === "profile" ? <ProfileScreen /> : null}
      </div>

      <CameraModal open={cameraOpen} onClose={() => setCameraOpen(false)} />
      <BottomNav tab={tab} setTab={setTab} onOpenCamera={() => setCameraOpen(true)} />
    </div>
  );
}
