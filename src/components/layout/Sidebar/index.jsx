import { useGlobalContext } from "@/contexts/AppContext";
import React from "react";

const Sidebar = () => {
  const { sidebarOpen } = useGlobalContext();
  return (
    <div
      className={`${sidebarOpen ? "w-72" : "w-20"} bg-blue-500 h-screen px-2`}
    >
      sidebar
    </div>
  );
};

export default Sidebar;
