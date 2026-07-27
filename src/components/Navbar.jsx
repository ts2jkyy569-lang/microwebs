import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { name: "Home", to: "/" },
  { name: "Portfolio", to: "/projects" },
  { name: "Order", to: "/order" },
  { name: "Resources", to: "/resources" },
  { name: "Maintenance", to: "/maintenance" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-black tracking-wide"
        >
          <span className="text-white">MICRO</span>
          <span className="text-yellow-400">WEBS</span>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((link) => (

            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>

          ))}

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-yellow-400 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>
            </>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={30} />
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 lg:hidden"
          >

            <div className="flex justify-between items-center p-6 border-b border-neutral-800">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-black"
              >
                <span className="text-white">MICRO</span>
                <span className="text-yellow-400">WEBS</span>
              </Link>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                <X size={32} />
              </button>

            </div>

            <div className="flex flex-col items-center justify-center h-[80vh] gap-8">

              {links.map((link) => (

                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`
                  }
                >
                  {link.name}
                </NavLink>

              ))}

              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl text-yellow-400"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl text-gray-300"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold"
                  >
                    Get Started
                  </Link>
                </>
              )}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}