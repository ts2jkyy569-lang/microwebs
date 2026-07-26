import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black rounded-3xl p-12 md:p-20 text-center shadow-2xl"
        >
          <span className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-bold mb-6">
            LET'S BUILD SOMETHING AMAZING
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Ready To Launch
            <span className="text-yellow-400">
              {" "}Your Dream Website?
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto">
            Whether you're a startup, restaurant, school, church,
            company, or online store, MicroWebs can design a
            premium website that helps your business grow.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/dashboard/new-order"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <a
              href="#contact"
              className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Us
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}