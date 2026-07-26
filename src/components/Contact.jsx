import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="container">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? We'd love to help you build a modern,
            high-performing website that helps your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
              <FaEnvelope className="text-yellow-400 text-3xl mb-4" />

              <h3 className="text-white text-2xl font-bold">
                Email
              </h3>

              <a
                href="mailto:daveefx19@gmail.com"
                className="inline-block mt-3 text-gray-400 hover:text-yellow-400 transition"
              >
                daveefx19@gmail.com
              </a>
            </div>

            <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
              <FaPhoneAlt className="text-yellow-400 text-3xl mb-4" />

              <h3 className="text-white text-2xl font-bold">
                Phone
              </h3>

              <a
                href="tel:+2348102356106"
                className="inline-block mt-3 text-gray-400 hover:text-yellow-400 transition"
              >
                +234 810 235 6106
              </a>
            </div>

            <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
              <FaMapMarkerAlt className="text-yellow-400 text-3xl mb-4" />

              <h3 className="text-white text-2xl font-bold">
                Location
              </h3>

              <p className="text-gray-400 mt-3">
                Rivers State, Nigeria
              </p>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-white outline-none focus:border-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}