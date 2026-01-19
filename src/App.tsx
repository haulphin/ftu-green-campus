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
  const [savedEvents, setSavedEvents] = useState<string[]>([]); // IDs of saved events

  const toggleSaveEvent = (eventId: string) => {
    setSavedEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className={cn("min-h-screen", UI.pageBg)}>
      <MainLayout
        activeTab={tab}
        onTabChange={(t) => setTab(t as Tab)}
        onOpenCamera={() => setCameraOpen(true)}
      >
        {tab === "schedule" && <ScheduleScreen savedEvents={savedEvents} onToggleSave={toggleSaveEvent} />}
        {tab === "actions" && <ActionsScreen savedEvents={savedEvents} />}
        {tab === "impact" && <ImpactScreen />}
        {tab === "profile" && <ProfileScreen />}
      </MainLayout>

      <CameraModal open={cameraOpen} onClose={() => setCameraOpen(false)} />
    </div>
  );
}
