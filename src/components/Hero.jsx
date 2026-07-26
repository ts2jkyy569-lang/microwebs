import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black flex items-center"
    >
      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.4em] text-yellow-400 font-semibold"
          >
            Digital Web Studio
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black leading-tight mt-6"
          >
            We Build
            <span className="text-yellow-400"> Modern </span>
            Websites
            <br />
            That Grow Businesses.
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mt-8 max-w-xl"
          >
            Microwebs creates premium websites that are fast,
            responsive, modern, and designed to help businesses
            stand out online.
          </motion.p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition"
            >
              View Our Work
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Start a Project
            </a>

          </div>

        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >

          <div className="w-[420px] h-[420px] rounded-[40px] bg-neutral-900 border border-yellow-400/20 shadow-2xl flex flex-col justify-center items-center">

            <h2 className="text-6xl font-black">
              <span className="text-white">MICRO</span>
              <span className="text-yellow-400">WEBS</span>
            </h2>

            <p className="text-gray-400 mt-6 text-center px-10">
              Premium websites for restaurants, startups,
              brands, and growing businesses.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}