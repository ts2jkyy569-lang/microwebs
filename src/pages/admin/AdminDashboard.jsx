import DashboardHeader from "../../components/admin/DashboardHeader";
import StatCard from "../../components/admin/StatCard";
import RevenueChart from "../../components/admin/RevenueChart";
import OrdersChart from "../../components/admin/OrdersChart";
import RecentOrders from "../../components/admin/RecentOrders";
import RecentPayments from "../../components/admin/RecentPayments";
import CustomerGrowth from "../../components/admin/CustomerGrowth";
import NotificationPanel from "../../components/admin/NotificationPanel";
import ActivityFeed from "../../components/admin/ActivityFeed";
import QuickActions from "../../components/admin/QuickActions";

import useDashboard from "../../hooks/useDashboard";

import {
  DollarSign,
  ShoppingCart,
  Users,
  Briefcase,
} from "lucide-react";


export default function AdminDashboard() {

  const { dashboard, loading } = useDashboard();


  const stats = dashboard || {
    revenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalProjects: 0,
    orders: [],
    payments: [],
    users: [],
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-2xl">
        Loading Dashboard...
      </div>
    );
  }


  const revenueData = [
    { month: "Jan", revenue: 150000 },
    { month: "Feb", revenue: 210000 },
    { month: "Mar", revenue: 180000 },
    { month: "Apr", revenue: 260000 },
    { month: "May", revenue: 340000 },
    { month: "Jun", revenue: 420000 },
  ];


  const ordersData = [
    { month: "Jan", orders: 5 },
    { month: "Feb", orders: 8 },
    { month: "Mar", orders: 7 },
    { month: "Apr", orders: 12 },
    { month: "May", orders: 15 },
    { month: "Jun", orders: 18 },
  ];


  return (
    <div className="space-y-8">

      <DashboardHeader />


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Revenue"
          value={`₦${stats.revenue.toLocaleString()}`}
          icon={<DollarSign size={28} />}
          color="green"
        />


        <StatCard
          title="Orders"
          value={stats.totalOrders}
          icon={<ShoppingCart size={28} />}
          color="yellow"
        />


        <StatCard
          title="Customers"
          value={stats.totalCustomers}
          icon={<Users size={28} />}
          color="blue"
        />


        <StatCard
          title="Projects"
          value={stats.totalProjects}
          icon={<Briefcase size={28} />}
          color="purple"
        />

      </div>



      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <RevenueChart data={revenueData} />

        <OrdersChart data={ordersData} />

      </div>




      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <RecentOrders
          orders={stats.orders.slice(0,5)}
        />


        <RecentPayments
          payments={stats.payments.slice(0,5)}
        />

      </div>




      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <CustomerGrowth
          customers={stats.users}
        />


        <NotificationPanel
          notifications={[]}
        />

      </div>




      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <ActivityFeed
          activities={[]}
        />


        <QuickActions />

      </div>


    </div>
  );
}