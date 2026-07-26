import { motion } from "framer-motion";

const stats = [
  { number: "100%", title: "Responsive" },
  { number: "Fast", title: "Performance" },
  { number: "SEO", title: "Optimized" },
  { number: "24/7", title: "Support" },
];

export default function Stats() {
  return (
    <section className="bg-neutral-950 py-20">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 rounded-2xl p-8 text-center border border-neutral-800"
          >
            <h2 className="text-5xl font-black text-yellow-400">
              {stat.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {stat.title}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}