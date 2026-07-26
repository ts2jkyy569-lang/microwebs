import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose a Website",
    description:
      "Select the website category or template you want.",
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Complete the order form and make payment securely.",
  },
  {
    number: "03",
    title: "We Build It",
    description:
      "Our designers and developers build your website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Review, approve and launch your new website.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase font-bold tracking-widest">
            PROCESS
          </p>

          <h2 className="text-5xl font-black mt-4">
            How It Works
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8"
            >
              <span className="text-5xl font-black text-yellow-400">
                {step.number}
              </span>

              <h3 className="text-2xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}