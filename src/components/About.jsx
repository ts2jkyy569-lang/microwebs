import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Modern & Responsive Design",
  "Fast Loading Websites",
  "SEO-Friendly Development",
  "Clean & Maintainable Code",
  "Mobile-First Approach",
  "Ongoing Support",
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-400 uppercase tracking-widest font-semibold">
            About Microwebs
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Building Digital Experiences That Inspire.
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            Microwebs is a modern web studio focused on creating
            beautiful, fast, and user-friendly websites for businesses,
            startups, restaurants, and personal brands.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            We combine creative design with modern technologies to
            deliver websites that not only look amazing but also help
            businesses grow online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-900 rounded-3xl p-10 border border-neutral-800"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Why Choose Us?
          </h3>

          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <FaCheckCircle className="text-yellow-400 text-xl" />

                <span className="text-gray-300 text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}