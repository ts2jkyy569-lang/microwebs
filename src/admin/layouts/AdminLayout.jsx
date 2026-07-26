import { Outlet, NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaUsers,
  FaComments,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-black text-white">

      {/* Sidebar */}
      <aside className="w-72 bg-neutral-900 border-r border-neutral-800 p-6">

        <h1 className="text-3xl font-bold text-yellow-400 mb-10">
          MicroWebs Admin
        </h1>

        <nav className="space-y-2">

          <NavLink
            to="/admin"
            end
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaHome />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/orders"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaShoppingCart />
            Orders
          </NavLink>

          <NavLink
            to="/admin/projects"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaProjectDiagram />
            Projects
          </NavLink>

          <NavLink
            to="/admin/payments"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaMoneyBillWave />
            Payments
          </NavLink>

          <NavLink
            to="/admin/customers"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaUsers />
            Customers
          </NavLink>

          <NavLink
            to="/admin/messages"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaComments />
            Messages
          </NavLink>

          <NavLink
            to="/admin/analytics"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaChartBar />
            Analytics
          </NavLink>

          <NavLink
            to="/admin/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-800"
          >
            <FaCog />
            Settings
          </NavLink>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
}