import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const websiteTypes = [
  "Business Website",
  "Restaurant Website",
  "School Website",
  "Church Website",
  "Corporate Website",
  "Portfolio Website",
  "E-Commerce Website",
  "Custom Website",
];

const packages = [
  {
    name: "Starter",
    price: "₦150,000",
  },
  {
    name: "Professional",
    price: "₦300,000",
  },
  {
    name: "Premium",
    price: "₦600,000+",
  },
];

export default function Order() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="py-24 border-b border-neutral-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full"
          >
            START YOUR PROJECT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6"
          >
            Let's Build Your Website
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            Tell us about your project and we'll create a beautiful,
            responsive website tailored specifically for your business.
          </p>

        </div>

      </section>

      {/* Order Form */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

          <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-10">

            <h2 className="text-3xl font-bold mb-8">
              Project Details
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4"
              />

              <select className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4">

                <option>Select Website Type</option>

                {websiteTypes.map((type) => (

                  <option key={type}>
                    {type}
                  </option>

                ))}

              </select>

              <select className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4">

                <option>Select Package</option>

                {packages.map((item) => (

                  <option key={item.name}>
                    {item.name} - {item.price}
                  </option>

                ))}

              </select>

              <textarea
                rows="6"
                placeholder="Describe your project..."
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 resize-none"
              />

              <button
                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Submit Project Request
              </button>

            </form>

          </div>

          {/* Right Side */}

          <div>

            <h2 className="text-4xl font-black">
              Why Choose MicroWebs?
            </h2>

            <div className="space-y-5 mt-10">

              {[
                "Modern Responsive Design",
                "Mobile Friendly",
                "Fast Performance",
                "SEO Ready",
                "Free Consultation",
                "Professional UI/UX",
                "Secure Development",
                "Ongoing Support",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-5"
                >
                  <FaCheckCircle className="text-green-400 text-xl" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <div className="mt-12 bg-neutral-900 rounded-3xl border border-neutral-800 p-8">

              <h3 className="text-2xl font-bold">
                Need Help?
              </h3>

              <p className="text-gray-400 mt-4">
                Contact us directly and we'll guide you through choosing the perfect website package.
              </p>

              <div className="space-y-4 mt-8">

                <a
                  href="https://wa.me/2349164155880"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-green-400 hover:text-green-300"
                >
                  <FaWhatsapp />
                  WhatsApp: 09164155880
                </a>

                <a
                  href="mailto:daveefx19@gmail.com"
                  className="flex items-center gap-4 text-yellow-400 hover:text-yellow-300"
                >
                  <FaEnvelope />
                  daveefx19@gmail.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}