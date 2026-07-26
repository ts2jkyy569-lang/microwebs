import { FaWhatsapp, FaDiscord, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="container">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              <span className="text-white">MICRO</span>
              <span className="text-yellow-400">WEBS</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              We build premium, responsive, high-performance websites for
              businesses, restaurants, startups, and personal brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-yellow-400">Pricing</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-yellow-400">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

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
                WhatsApp Business: 09164155880
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <FaDiscord className="text-indigo-400" />
                Discord: td07453
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-red-400" />
                Abia State, Nigeria
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Microwebs. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}