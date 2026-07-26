import {
  FaHome,
  FaFolderOpen,
  FaShoppingCart,
  FaCreditCard,
  FaComments,
  FaUser,
  FaCog,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();

  const menu = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "New Order",
      icon: <FaPlusCircle />,
      path: "/dashboard/new-order",
    },
    {
      title: "Projects",
      icon: <FaFolderOpen />,
      path: "/dashboard/projects",
    },
    {
      title: "Orders",
      icon: <FaShoppingCart />,
      path: "/dashboard/orders",
    },
    {
      title: "Payments",
      icon: <FaCreditCard />,
      path: "/dashboard/payments",
    },
    {
      title: "Messages",
      icon: <FaComments />,
      path: "/dashboard/messages",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-neutral-950 border-r border-neutral-800 flex flex-col">

      <div className="p-6 border-b border-neutral-800">
        <h1 className="text-3xl font-black">
          <span className="text-white">MICRO</span>
          <span className="text-yellow-400">WEBS</span>
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Client Dashboard
        </p>
      </div>

      <nav className="flex-1 p-6 space-y-3">

        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-gray-300 hover:bg-neutral-900 hover:text-yellow-400"
              }`
            }
          >
            {item.icon}
            {item.title}
          </NavLink>
        ))}

      </nav>

      <div className="p-6 border-t border-neutral-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </aside>
  );
}