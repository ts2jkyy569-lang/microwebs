import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Davis",
    company: "Restaurant Owner",
    review:
      "MicroWebs exceeded my expectations. My website looks amazing and loads incredibly fast.",
  },
  {
    name: "Sarah Williams",
    company: "School Director",
    review:
      "Professional team, beautiful design and excellent communication throughout the project.",
  },
  {
    name: "Michael Johnson",
    company: "Business Owner",
    review:
      "The best investment for my company. Our online presence has improved significantly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-neutral-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase font-bold">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-black mt-4">
            What Clients Say
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8"
            >
              <div className="text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <p className="text-gray-300 mt-6 leading-8">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold mt-8">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.company}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}