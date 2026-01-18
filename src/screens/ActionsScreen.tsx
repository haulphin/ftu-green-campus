import { UI, cn } from "../theme";
import { classesMock, todosMock } from "../data";
import { SoftCard, AccentBar } from "../components";

export function ActionsScreen() {
    const todayClasses = classesMock;

    return (
        <div className="pb-28 pt-3">
            <div className="px-5">
                <AccentBar />
                <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>
                    Todo theo môn
                </div>
                <div className={cn("mt-1 text-sm", UI.text.soft)}>
                    Việc học + việc xanh (Locket FTU)
                </div>

                <SoftCard className="mt-4 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className={cn("text-sm font-semibold", UI.text.strong)}>Quick add</div>
                            <div className={cn("text-xs", UI.text.faint)}>
                                Tự thêm việc (sẽ nhắc lại vào lần học sau)
                            </div>
                        </div>
                        <button className={cn(UI.primaryBtn, "text-sm px-3 py-2")}>＋ Thêm</button>
                    </div>
                    <div className="mt-3 rounded-2xl bg-red-50 border border-red-100 px-3 py-2 text-sm text-red-900/80">
                        Ví dụ: "Mang bình nước", "Note bài chương 3", "Không mua đồ nhựa sau break"
                    </div>
                </SoftCard>

                <div className="mt-4 space-y-4">
                    {todayClasses.map((cl) => {
                        const list = todosMock.filter((t) => t.relatedTo === cl.id);
                        return (
                            <SoftCard key={cl.id} className="p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className={cn("text-xs", UI.text.faint)}>
                                            {cl.start} – {cl.end}
                                        </div>
                                        <div className={cn("text-base font-semibold", UI.text.strong)}>{cl.title}</div>
                                        <div className={cn("text-sm", UI.text.mid)}>{cl.room}</div>
                                    </div>
                                    <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900/80 font-semibold">
                                        Nhắc trước giờ học
                                    </span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    {list.map((t) => (
                                        <div
                                            key={t.id}
                                            className="rounded-2xl bg-white/90 border border-red-100 px-3 py-3 flex items-start justify-between gap-3"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="text-2xl leading-none">{t.icon}</div>
                                                <div>
                                                    <div className={cn("text-sm font-semibold", UI.text.strong)}>
                                                        {t.title}
                                                    </div>
                                                    {t.desc ? (
                                                        <div className={cn("mt-1 text-sm", UI.text.soft)}>{t.desc}</div>
                                                    ) : null}
                                                    {t.rule ? (
                                                        <div className={cn("mt-1 text-xs", UI.text.faint)}>⏱ {t.rule}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {t.kind === "green" ? (
                                                <button className="rounded-2xl px-3 py-2 bg-gradient-to-br from-red-600 to-emerald-500 text-white text-sm font-semibold shadow-sm">
                                                    📸 +{t.points ?? 0}
                                                </button>
                                            ) : (
                                                <button className="rounded-2xl px-3 py-2 bg-red-50 border border-red-100 text-red-900/80 text-sm font-semibold">
                                                    ☐
                                                </button>
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
