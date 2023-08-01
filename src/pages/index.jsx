import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/home/MainContent";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex h-screen max-h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
