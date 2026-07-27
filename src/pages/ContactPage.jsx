import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="py-24 border-b border-neutral-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-yellow-400 text-yellow-400"
          >
            CONTACT MICROWEBS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6"
          >
            Let's Build Something Amazing
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            Have questions or want to start your website project?
            We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form
              action="https://formsubmit.co/daveefx19@gmail.com"
              method="POST"
              className="space-y-6"
            >

              {/* Hidden Settings */}

              <input
                type="hidden"
                name="_subject"
                value="New Project Inquiry from MicroWebs"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_next"
                value="https://microwebs.netlify.app"
              />

              {/* Form Fields */}

              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-yellow-400"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-yellow-400"
              />

              <input
                name="business"
                type="text"
                placeholder="Business Name"
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-yellow-400"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-yellow-400"
              />

              <select
                name="service"
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none border border-neutral-700 focus:border-yellow-400"
              >
                <option>Website Design</option>
                <option>Restaurant Website</option>
                <option>School Website</option>
                <option>Church Website</option>
                <option>Business Website</option>
                <option>E-Commerce Website</option>
                <option>Website Redesign</option>
                <option>Maintenance Plan</option>
              </select>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project..."
                required
                className="w-full bg-neutral-800 rounded-xl p-4 outline-none resize-none border border-neutral-700 focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div>

            <h2 className="text-4xl font-black">
              Contact Information
            </h2>

            <p className="text-gray-400 mt-5">
              Reach out using any of the methods below. We usually respond
              within a few hours.
            </p>

            <div className="space-y-6 mt-10">

              {/* Email */}

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-5 items-center">

                <FaEnvelope className="text-yellow-400 text-3xl" />

                <div>

                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <a
                    href="mailto:daveefx19@gmail.com"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    daveefx19@gmail.com
                  </a>

                </div>

              </div>

              {/* WhatsApp */}

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-5 items-center">

                <FaWhatsapp className="text-green-500 text-3xl" />

                <div>

                  <h3 className="font-bold text-xl">
                    WhatsApp
                  </h3>

                  <a
                    href="https://wa.me/2349164155880"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    +234 916 415 5880
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-5 items-center">

                <FaPhoneAlt className="text-yellow-400 text-3xl" />

                <div>

                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <a
                    href="tel:+2349164155880"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    +234 916 415 5880
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex gap-5 items-center">

                <FaMapMarkerAlt className="text-red-500 text-3xl" />

                <div>

                  <h3 className="font-bold text-xl">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Nigeria
                  </p>

                </div>

              </div>

            </div>

            {/* Business Hours */}

            <div className="mt-10 bg-neutral-900 border border-neutral-800 rounded-2xl p-8">

              <h3 className="text-2xl font-bold mb-6">
                Business Hours
              </h3>

              <div className="space-y-3 text-gray-400">

                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 bg-yellow-400 rounded-3xl p-8 text-black">

              <h3 className="text-3xl font-black">
                Ready to Start?
              </h3>

              <p className="mt-4 text-lg">
                Tell us about your project today and receive a free consultation
                with MicroWebs.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}