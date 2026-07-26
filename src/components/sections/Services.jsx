import { motion } from "framer-motion";
import {
  FaStore,
  FaUtensils,
  FaShoppingCart,
  FaGraduationCap,
  FaChurch,
  FaBuilding,
} from "react-icons/fa";

const services = [
  {
    icon: FaStore,
    title: "Business Website",
    price: "From ₦50,000",
    description:
      "Professional websites for companies and brands with modern layouts, contact forms, and SEO.",
    features: [
      "Responsive Design",
      "SEO Ready",
      "Fast Loading",
      "Contact Forms",
    ],
  },
  {
    icon: FaUtensils,
    title: "Restaurant Website",
    price: "From ₦70,000",
    description:
      "Beautiful restaurant websites with online menu, reservations, and gallery.",
    features: [
      "Food Menu",
      "Reservations",
      "Gallery",
      "Google Maps",
    ],
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce",
    price: "From ₦120,000",
    description:
      "Sell products online with secure payments and inventory management.",
    features: [
      "Paystack",
      "Cart",
      "Checkout",
      "Admin Dashboard",
    ],
  },
  {
    icon: FaGraduationCap,
    title: "School Website",
    price: "From ₦80,000",
    description:
      "School portals with admissions, announcements and staff pages.",
    features: [
      "Admissions",
      "News",
      "Events",
      "Portal",
    ],
  },
  {
    icon: FaChurch,
    title: "Church Website",
    price: "From ₦60,000",
    description:
      "Modern church websites with sermons, events and online giving.",
    features: [
      "Live Streaming",
      "Events",
      "Giving",
      "Gallery",
    ],
  },
  {
    icon: FaBuilding,
    title: "Custom Website",
    price: "Custom Quote",
    description:
      "Need something unique? We'll design and build a custom solution for your business.",
    features: [
      "Custom Features",
      "Unique Design",
      "Scalable",
      "Consultation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-neutral-950 py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="inline-block bg-yellow-400/10 border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-6 text-white">
            Websites Designed For Growth
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Whether you're launching a startup, restaurant,
            online store, school, or company, MicroWebs builds
            websites that look premium and help your business grow.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 hover:border-yellow-400 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-3xl">
                  <Icon />
                </div>

                <h3 className="text-2xl font-bold text-white mt-8">
                  {service.title}
                </h3>

                <p className="text-yellow-400 font-bold mt-3">
                  {service.price}
                </p>

                <p className="text-gray-400 mt-5 leading-7">
                  {service.description}
                </p>

                <div className="space-y-3 mt-8">

                  {service.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

                      <span className="text-gray-300">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                <a
                  href="/dashboard/order"
                  className="mt-10 w-full inline-flex justify-center bg-yellow-400 text-black py-4 rounded-full font-bold hover:scale-105 transition"
                >
                  Start This Website
                </a>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}