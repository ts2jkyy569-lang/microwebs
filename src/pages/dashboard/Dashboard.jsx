import Header from "../../components/dashboard/Header";
import DashboardCard from "../../components/dashboard/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Projects"
          value="0"
        />

        <DashboardCard
          title="Orders"
          value="0"
        />

        <DashboardCard
          title="Payments"
          value="₦0"
        />

        <DashboardCard
          title="Messages"
          value="0"
        />

      </div>

      <div className="mt-10 bg-neutral-900 rounded-2xl p-8 border border-neutral-800">

        <h2 className="text-2xl font-bold mb-4">
          Welcome to Microwebs
        </h2>

        <p className="text-gray-400">
          Order websites, track projects, chat with our team,
          make secure payments, and monitor your project
          progress all from one dashboard.
        </p>

      </div>
    </>
  );
}