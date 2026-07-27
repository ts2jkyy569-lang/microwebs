import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator } from "react-icons/fa";

const websitePrices = {
  Business: 300,
  Restaurant: 400,
  School: 450,
  Church: 350,
  "E-Commerce": 700,
  Portfolio: 250,
  Custom: 500,
};

export default function Quote() {
  const [website, setWebsite] = useState("Business");
  const [pages, setPages] = useState(5);
  const [seo, setSeo] = useState(false);
  const [blog, setBlog] = useState(false);
  const [booking, setBooking] = useState(false);

  const total =
    websitePrices[website] +
    (pages - 5) * 20 +
    (seo ? 100 : 0) +
    (blog ? 80 : 0) +
    (booking ? 120 : 0);

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="py-24 text-center border-b border-neutral-800">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black"
        >
          Website Quote Calculator
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg">
          Get an instant estimate for your website.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-neutral-900 rounded-3xl p-10 border border-neutral-800">

          <label className="block mb-2">
            Website Type
          </label>

          <select
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full p-4 rounded-xl bg-neutral-800 mb-6"
          >
            {Object.keys(websitePrices).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <label className="block mb-2">
            Number of Pages
          </label>

          <input
            type="range"
            min="5"
            max="30"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full"
          />

          <p className="mb-8">{pages} Pages</p>

          <div className="space-y-4">

            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={seo}
                onChange={() => setSeo(!seo)}
              />
              SEO Optimization
            </label>

            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={blog}
                onChange={() => setBlog(!blog)}
              />
              Blog
            </label>

            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={booking}
                onChange={() => setBooking(!booking)}
              />
              Booking System
            </label>

          </div>

          <div className="mt-12 bg-yellow-400 rounded-2xl text-black p-8 text-center">

            <FaCalculator className="text-5xl mx-auto mb-4" />

            <h2 className="text-5xl font-black">
              ${total}
            </h2>

            <p className="mt-4">
              Estimated Project Cost
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}