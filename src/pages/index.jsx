import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { useGlobalContext } from "@/contexts/AppContext";
import MainContent from "@/components/home/MainContent";

export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { setSidebarOpen } = useGlobalContext();
  return (
    <div className="flex overflow-y-hidden">
      <Sidebar />
      <MainContent />
    </div>
  );
}
