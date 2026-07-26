import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back! Here's what's happening today.
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {today}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-neutral-900 border border-neutral-800 rounded-xl py-3 pl-11 pr-4 text-white outline-none focus:border-yellow-400 w-72"
          />

        </div>

        <button className="relative w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-yellow-400 transition">

          <Bell size={20} className="text-white" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2">

          <img
            src="https://ui-avatars.com/api/?name=Admin&background=FACC15&color=000"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="text-white font-semibold">
              Administrator
            </h3>

            <p className="text-xs text-gray-400">
              Super Admin
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}