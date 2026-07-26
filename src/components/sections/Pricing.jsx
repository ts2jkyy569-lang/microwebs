import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₦50,000",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "₦120,000",
    popular: true,
    features: [
      "Up to 15 Pages",
      "Premium Design",
      "Admin Dashboard",
      "Paystack Integration",
      "Advanced SEO",
      "3 Months Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "API Integration",
      "Full CMS",
      "Priority Support",
      "Dedicated Developer",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white">
            Pricing Plans
          </h2>

          <p className="text-gray-400 mt-5">
            Choose the package that fits your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -8 }}
              className={`rounded-3xl border p-10 ${
                plan.popular
                  ? "border-yellow-400 bg-black"
                  : "border-neutral-800 bg-neutral-900"
              }`}
            >
              {plan.popular && (
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-3xl font-bold text-white mt-6">
                {plan.name}
              </h3>

              <p className="text-yellow-400 text-4xl font-black mt-5">
                {plan.price}
              </p>

              <div className="space-y-4 mt-8">
                {plan.features.map((item) => (
                  <p key={item} className="text-gray-300">
                    ✓ {item}
                  </p>
                ))}
              </div>

              <Link
                to="/dashboard/new-order"
                className="block mt-10 text-center bg-yellow-400 text-black py-4 rounded-full font-bold hover:scale-105 transition"
              >
                Get Started
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}