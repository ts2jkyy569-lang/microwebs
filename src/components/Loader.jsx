// src/components/Loader.jsx

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <motion.div
        className="w-24 h-24 border-4 border-yellow-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      <motion.h1
        className="mt-8 text-4xl font-black tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-white">MICRO</span>
        <span className="text-yellow-400">WEBS</span>
      </motion.h1>

      <p className="text-gray-400 mt-3">
        Building Websites That Grow Your Business
      </p>
    </div>
  );
}