import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black">
              <span className="text-white">MICRO</span>
              <span className="text-yellow-400">WEBS</span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              MicroWebs builds premium websites for businesses,
              restaurants, schools, churches, online stores,
              startups and personal brands across Nigeria.
            </p>

            <Link
              to="/order"
              className="inline-flex items-center gap-3 mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/projects" className="hover:text-yellow-400 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/order" className="hover:text-yellow-400 transition">
                  Order Website
                </Link>
              </li>

              <li>
                <Link to="/maintenance" className="hover:text-yellow-400 transition">
                  Website Maintenance
                </Link>
              </li>

              <li>
                <Link to="/resources" className="hover:text-yellow-400 transition">
                  Resources
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link to="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-yellow-400 transition">
                  Client Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="hover:text-yellow-400 transition">
                  Create Account
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:daveefx19@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition"
              >
                <FaEnvelope className="text-yellow-400" />
                daveefx19@gmail.com
              </a>

              <a
                href="https://wa.me/2349164155880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <FaWhatsapp className="text-green-500" />
                +234 916 415 5880
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <FaDiscord className="text-indigo-400" />
                td07453
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-500" />
                Nigeria
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © {new Date().getFullYear()} MicroWebs. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">

            <Link
              to="/resources"
              className="hover:text-yellow-400 transition"
            >
              Resources
            </Link>

            <Link
              to="/maintenance"
              className="hover:text-yellow-400 transition"
            >
              Maintenance
            </Link>

            <Link
              to="/contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}