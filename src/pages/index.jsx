import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 px-5 py-2">main content</div>
    </div>
  );
}
