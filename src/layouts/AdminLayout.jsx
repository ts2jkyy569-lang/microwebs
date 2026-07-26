import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-5">
        <h1 className="text-2xl font-bold mb-8">
          MicroWebs Admin
        </h1>

        <nav className="space-y-3">

          <NavLink to="/admin">
            Dashboard
          </NavLink>

          <NavLink to="/admin/orders">
            Orders
          </NavLink>

          <NavLink to="/admin/projects">
            Projects
          </NavLink>

          <NavLink to="/admin/payments">
            Payments
          </NavLink>

          <NavLink to="/admin/customers">
            Customers
          </NavLink>

          <NavLink to="/admin/messages">
            Messages
          </NavLink>

          <NavLink to="/admin/analytics">
            Analytics
          </NavLink>

          <NavLink to="/admin/settings">
            Settings
          </NavLink>

        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}