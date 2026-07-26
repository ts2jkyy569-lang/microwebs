import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400 text-yellow-400 font-semibold">
        {badge}
      </span>

      <h2 className="text-4xl lg:text-6xl font-black mt-6">
        {title}
      </h2>

      <p className="text-gray-400 mt-6 text-lg leading-8">
        {description}
      </p>
    </motion.div>
  );
}