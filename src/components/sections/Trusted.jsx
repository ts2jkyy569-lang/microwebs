import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa";

const items = [
  {
    icon: FaRocket,
    title: "Fast Delivery",
    description: "Projects delivered on time.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    description: "Perfect on phones and desktops.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure",
    description: "Modern and secure development.",
  },
  {
    icon: FaHeadset,
    title: "Support",
    description: "We're here after launch too.",
  },
];

export default function Trusted() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-yellow-400 font-bold uppercase tracking-widest">
            Why Clients Choose MicroWebs
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Trusted Website Studio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-3xl">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.description}
                </p>
              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}