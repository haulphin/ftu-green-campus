import { UI, cn } from "../theme";
import { SoftCard, AccentBar } from "../components";

export function ProfileScreen() {
    return (
        <div className="pb-28 pt-3">
            <div className="px-5">
                <AccentBar />
                <div className={cn("mt-3 text-xl font-semibold tracking-tight", UI.text.strong)}>
                    Tài khoản sinh viên
                </div>
                <div className={cn("mt-1 text-sm", UI.text.soft)}>Thông tin cá nhân & học tập</div>

                <SoftCard className="mt-4 p-4">
                    <div className="flex items-start gap-4">
                        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-red-100 to-emerald-100 border border-red-100 flex items-center justify-center text-3xl">
                            👤
                        </div>
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
