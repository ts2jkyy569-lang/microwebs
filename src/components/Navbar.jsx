import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-neutral-800"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="#home"
          className="text-3xl font-black tracking-wide"
        >
          <span className="text-white">MICRO</span>
          <span className="text-yellow-400">WEBS</span>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-300 hover:text-yellow-400"
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
                className="text-gray-300 hover:text-yellow-400"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Start Your Website
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={30} />
        </button>

      </div>

      {/* Fullscreen Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[100] lg:hidden"
          >

            <div className="flex justify-between items-center p-6 border-b border-neutral-800">

              <h2 className="text-2xl font-black">
                <span className="text-white">MICRO</span>
                <span className="text-yellow-400">WEBS</span>
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white"
              >
                <X size={32} />
              </button>

            </div>

            <div className="flex flex-col items-center justify-center h-[80vh] gap-8">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-yellow-400 transition"
                >
                  {link.name}
                </a>
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
                    Start Your Website
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