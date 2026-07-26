import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import websitePreview from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[180px]" />

      {/* Grid */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center py-20 lg:py-32">

        {/* Left */}

        <div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >

            <span className="inline-flex items-center rounded-full border border-yellow-400 bg-yellow-400/10 px-5 py-2 text-sm font-semibold text-yellow-400">
              🚀 Premium Web Design Studio
            </span>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            Professional
            <span className="text-yellow-400">
              {" "}Websites{" "}
            </span>
            That Turn Visitors Into Customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-base sm:text-lg lg:text-xl text-gray-400 leading-7 lg:leading-8"
          >
            MicroWebs builds premium, responsive, SEO-friendly websites
            for restaurants, businesses, startups, schools, churches,
            portfolios, and online stores that help you grow your brand
            and attract more customers.
          </motion.p>

          {/* Features */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

            {[
              "Mobile Responsive",
              "SEO Optimized",
              "Lightning Fast",
              "Secure Payments",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <FaCheckCircle className="text-yellow-400 text-lg" />

                <span className="text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
            >
              Start Your Website

              <FaArrowRight />
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View Portfolio
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center sm:text-left">

            <div>

              <h2 className="text-4xl font-black text-yellow-400">
                Modern
              </h2>

              <p className="text-gray-400 mt-2">
                UI Design
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-yellow-400">
                Fast
              </h2>

              <p className="text-gray-400 mt-2">
                Delivery
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-yellow-400">
                24/7
              </h2>

              <p className="text-gray-400 mt-2">
                Support
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center mt-10 lg:mt-0"
        >

          <div className="relative w-full max-w-[650px]">

            {/* Browser */}

            <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-[0_0_80px_rgba(250,204,21,0.15)]">

              <div className="flex items-center gap-2 bg-neutral-950 px-5 py-4">

                <div className="w-3 h-3 rounded-full bg-red-500"></div>

                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                <div className="w-3 h-3 rounded-full bg-green-500"></div>

              </div>

              <img
                src={websitePreview}
                alt="MicroWebs Website Preview"
                className="w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-4 left-4 sm:-bottom-8 sm:-left-8 rounded-2xl bg-yellow-400 px-5 py-4 text-black shadow-2xl"
            >

              <h3 className="font-black text-lg">
                Premium Design
              </h3>

              <p className="font-medium text-sm">
                Responsive • Modern • Fast
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}