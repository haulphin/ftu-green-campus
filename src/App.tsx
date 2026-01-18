/**
 * FTU Green Campus – Main App Entry Point
 * 
 * A polished demo UI for FTU's green campus initiative.
 * Primary: FTU red | Accent: emerald
 * 
 * Features:
 * - Sticky top bar with user info
 * - Bottom navigation with center camera button
 * - Schedule, Todo, Impact, and Profile screens
 */

import { useState } from "react";
import { UI, cn } from "./theme";
import type { Tab } from "./types";
import { TopBar, BottomNav, CameraModal } from "./components";
import { ScheduleScreen, ActionsScreen, ImpactScreen, ProfileScreen } from "./screens";

export default function App() {
  const [tab, setTab] = useState<Tab>("schedule");
  const [cameraOpen, setCameraOpen] = useState(false);

  return (
    <div className={cn("min-h-screen", UI.pageBg)}>
      <TopBar
        title="FTU Green Campus"
        subtitle="Check-in xanh realtime • tích điểm rèn luyện"
        onOpenProfile={() => setTab("profile")}
      />

      <div className="mx-auto max-w-md">
        {tab === "schedule" && <ScheduleScreen />}
        {tab === "actions" && <ActionsScreen />}
        {tab === "impact" && <ImpactScreen />}
        {tab === "profile" && <ProfileScreen />}
      </div>

      <CameraModal open={cameraOpen} onClose={() => setCameraOpen(false)} />
      <BottomNav tab={tab} setTab={setTab} onOpenCamera={() => setCameraOpen(true)} />
    </div>
  );
}
