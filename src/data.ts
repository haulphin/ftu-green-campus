// Mock data for FTU Green Campus application

import type { ClassItem, Todo, CampusUpdate, EventItem } from "./types";

export const classesMock: ClassItem[] = [
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

export const todosMock: Todo[] = [
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

export const campusUpdatesMock: CampusUpdate[] = [
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
        title: "Khoa: Talkshow 'Sustainable Trade'",
        source: "Khoa",
        time: "Ngày mai • 08:30",
        summary: "Khách mời doanh nghiệp chia sẻ về thương mại bền vững và cơ hội nghề nghiệp.",
        tags: ["Seminar"],
        linkLabel: "Lưu lịch",
    },
];

export const eventsMock: EventItem[] = [
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
