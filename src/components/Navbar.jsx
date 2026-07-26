import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800"
    >
      <div className="container flex items-center justify-between h-20">

        <a href="#home" className="text-3xl font-black tracking-wide">
          <span className="text-white">MICRO</span>
          <span className="text-yellow-400">WEBS</span>
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Create Account
          </Link>

        </div>

      </div>
    </motion.header>
  );
}