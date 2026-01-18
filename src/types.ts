// Types for FTU Green Campus application

export type Tab = "schedule" | "actions" | "impact" | "profile";

export type ClassItem = {
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

export type Todo = {
    id: string;
    icon: string;
    title: string;
    desc?: string;
    rule?: string;
    points?: number;
    relatedTo: string; // class id
    kind: "note" | "green";
};

export type CampusUpdate = {
    id: string;
    title: string;
    source: "Nhà trường" | "CLB" | "Khoa";
    time: string;
    summary: string;
    tags?: string[];
    linkLabel?: string;
};

export type EventItem = {
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
