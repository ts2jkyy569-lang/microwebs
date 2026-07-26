import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    naira: "₦150,000",
    dollar: "$100",
    description: "Perfect for individuals and small businesses.",
    features: [
      "1–5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "7 Days Support",
    ],
  },
  {
    name: "Business",
    naira: "₦350,000",
    dollar: "$250",
    description: "Ideal for growing businesses and brands.",
    features: [
      "Up to 10 Pages",
      "Premium UI/UX",
      "SEO Optimization",
      "Fast Performance",
      "WhatsApp Integration",
      "30 Days Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    naira: "₦700,000+",
    dollar: "$500+",
    description: "Custom websites and web applications.",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "Dashboard",
      "API Integration",
      "Priority Support",
      "Maintenance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-950 py-24">
      <div className="container">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Pricing Plans
          </h2>

          <p className="text-gray-400 mt-4">
            Flexible pricing for businesses of every size.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`rounded-3xl p-8 border ${
                plan.popular
                  ? "border-yellow-400 bg-neutral-900"
                  : "border-neutral-800 bg-black"
              }`}
            >
              {plan.popular && (
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold text-white mt-6">
                {plan.name}
              </h3>

              <div className="mt-8">
                <p className="text-5xl font-black text-yellow-400">
                  {plan.naira}
                </p>

                <p className="text-gray-400 mt-2">
                  or {plan.dollar}
                </p>
              </div>

              <p className="text-gray-400 mt-6">
                {plan.description}
              </p>

              <div className="space-y-4 mt-8">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-yellow-400" />
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="block text-center mt-10 bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Get Started
              </a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}