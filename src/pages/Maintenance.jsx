import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    icon: FaCheckCircle,
    price: "₦25,000/month",
    color: "border-yellow-400",
    description:
      "Perfect for startups, personal brands, small businesses, and personal websites.",
    features: [
      "Website Updates",
      "Weekly Cloud Backups",
      "Security Monitoring",
      "Bug Fixes",
      "Email Support",
      "24–48 Hour Response Time",
    ],
  },
  {
    name: "Growth",
    icon: FaRocket,
    price: "₦60,000/month",
    color: "border-blue-500",
    featured: true,
    description:
      "Ideal for growing businesses that need continuous improvements and marketing support.",
    features: [
      "Everything in Basic",
      "Priority Support",
      "Monthly Design Improvements",
      "Performance Reports",
      "SEO Monitoring",
      "Content Updates",
      "24 Hour Response Time",
    ],
  },
  {
    name: "Business",
    icon: FaShieldAlt,
    price: "₦120,000/month",
    color: "border-green-500",
    description:
      "Complete website management for businesses that depend on their website every day.",
    features: [
      "Everything in Growth",
      "Performance Optimization",
      "Dedicated Support",
      "Advanced Security",
      "Database Maintenance",
      "Unlimited Minor Updates",
      "Monthly Strategy Calls",
      "Same-Day Response",
    ],
  },
];

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="py-24 border-b border-neutral-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-5 py-2 rounded-full border border-yellow-400 text-yellow-400"
          >
            MICROWEBS MAINTENANCE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6"
          >
            Keep Your Website Secure, Fast & Growing
          </motion.h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            Your website deserves ongoing care after launch. MicroWebs keeps
            your website updated, protected, optimized, and running smoothly so
            you can focus on growing your business.
          </p>

        </div>

      </section>

      {/* Plans */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {plans.map((plan, index) => {

              const Icon = plan.icon;

              return (

                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className={`relative rounded-3xl border ${plan.color} bg-neutral-900 p-10`}
                >

                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold">
                      Most Popular
                    </div>
                  )}

                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl">
                    <Icon />
                  </div>

                  <h2 className="text-3xl font-bold mt-6">
                    {plan.name}
                  </h2>

                  <p className="text-gray-400 mt-4">
                    {plan.description}
                  </p>

                  <h3 className="text-5xl font-black text-yellow-400 mt-8">
                    {plan.price}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Cancel anytime. No hidden fees.
                  </p>

                  <ul className="space-y-4 mt-10">

                    {plan.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-green-400" />

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>

                  <Link
                    to="/order"
                    className="block text-center mt-10 bg-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    Choose {plan.name}
                  </Link>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="py-24 bg-neutral-950">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center">
            Why Website Maintenance Matters
          </h2>

          <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
            A maintained website loads faster, ranks higher, stays secure,
            protects customer data, and gives visitors confidence in your
            business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              "Regular Security Updates",
              "Automatic Website Backups",
              "Performance Optimization",
              "SEO Health Monitoring",
              "Bug Fixes & Error Monitoring",
              "Priority Technical Support",
              "Reduced Website Downtime",
              "Peace of Mind",
            ].map((item) => (

              <div
                key={item}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-center hover:border-yellow-400 transition"
              >
                <div className="text-yellow-400 text-4xl mb-4">
                  ✓
                </div>

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold">
                Can I cancel anytime?
              </h3>

              <p className="text-gray-400 mt-4">
                Yes. You can cancel, upgrade, or downgrade your maintenance
                plan whenever you like.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold">
                Do you provide hosting?
              </h3>

              <p className="text-gray-400 mt-4">
                Yes. We can set up your hosting or fully manage your hosting
                account for you.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold">
                Are backups included?
              </h3>

              <p className="text-gray-400 mt-4">
                Yes. Every maintenance plan includes scheduled cloud backups
                to keep your website safe.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8">
              <h3 className="text-2xl font-bold">
                Can you add new features later?
              </h3>

              <p className="text-gray-400 mt-4">
                Absolutely. As your business grows, we can add new pages,
                payment systems, booking features, blogs, dashboards, and more.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-yellow-400 text-black">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl md:text-6xl font-black">
            Protect Your Website Investment
          </h2>

          <p className="text-xl mt-6 max-w-3xl mx-auto">
            Let MicroWebs keep your website secure, updated, optimized, and
            performing at its very best while you focus on serving your
            customers.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/order"
              className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Subscribe Now
            </Link>

            <Link
              to="/contact"
              className="border-2 border-black px-10 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition"
            >
              Contact MicroWebs
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}