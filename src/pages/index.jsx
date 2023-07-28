import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/home/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
