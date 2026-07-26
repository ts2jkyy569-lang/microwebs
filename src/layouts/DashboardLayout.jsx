import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-neutral-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}