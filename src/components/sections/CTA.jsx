import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black rounded-[2rem] p-12 md:p-20 text-center shadow-2xl"
        >

          <span className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
            START YOUR WEBSITE TODAY
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mt-8 leading-tight">
            Ready To Grow Your
            <span className="text-yellow-400">
              {" "}Business Online?
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8 leading-8">
            Whether you need a business website, restaurant website,
            school portal, church website, online store or a custom web
            application, MicroWebs is ready to bring your vision to life
            with a fast, modern and mobile-friendly design.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/order"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Us
            </Link>

          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-300">

            <a
              href="https://wa.me/2349164155880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400 transition"
            >
              <FaWhatsapp className="text-green-500" />
              WhatsApp
            </a>

            <a
              href="tel:+2349164155880"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <FaPhoneAlt className="text-yellow-400" />
              +234 916 415 5880
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}