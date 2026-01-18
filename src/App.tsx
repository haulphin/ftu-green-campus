/**
 * FTU Green Campus – Main App Entry Point
 * 
 * Admin-web style layout with sidebar navigation
 * Primary: FTU red | Accent: emerald
 * 
 * Features:
 * - Sidebar navigation (left)
 * - Header with search and user info (top)
 * - Desktop-first layout
 * - Schedule, Todo, Impact, and Profile screens
 */

import { useState } from "react";
import { UI, cn } from "./theme";
import type { Tab } from "./types";
import { MainLayout } from "./layouts/MainLayout";
import { CameraModal } from "./components";
import { ScheduleScreen, ActionsScreen, ImpactScreen, ProfileScreen } from "./screens";

export default function App() {
  const [tab, setTab] = useState<Tab>("schedule");
  const [cameraOpen, setCameraOpen] = useState(false);

  return (
    <div className={cn("min-h-screen", UI.pageBg)}>
      <MainLayout
        activeTab={tab}
        onTabChange={(t) => setTab(t as Tab)}
        onOpenCamera={() => setCameraOpen(true)}
      >
        {tab === "schedule" && <ScheduleScreen />}
        {tab === "actions" && <ActionsScreen />}
        {tab === "impact" && <ImpactScreen />}
        {tab === "profile" && <ProfileScreen />}
      </MainLayout>

      <CameraModal open={cameraOpen} onClose={() => setCameraOpen(false)} />
    </div>
  );
}
