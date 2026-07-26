import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    description:
      "Modern React websites built for speed, performance, and scalability.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Clean, premium interfaces designed to improve user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Beautiful websites that look perfect on desktop, tablet, and mobile.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & SEO",
    description:
      "Launch your website with SEO optimization and fast global hosting.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-24">
      <div className="container">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need for a professional online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center shadow-xl"
            >
              <div className="text-yellow-400 text-5xl mb-6 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}