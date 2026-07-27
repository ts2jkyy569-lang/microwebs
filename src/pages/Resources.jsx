import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaSearch,
  FaMobileAlt,
  FaGlobe,
  FaPenNib,
  FaArrowRight,
} from "react-icons/fa";

const articles = [
  {
    icon: FaGlobe,
    title: "How to Choose the Right Business Website",
    description:
      "Learn which website type fits your business goals and attracts more customers.",
    readTime: "5 min read",
    category: "Business",
    slug: "choose-business-website",
  },
  {
    icon: FaMobileAlt,
    title: "Why Responsive Design Matters",
    description:
      "See why mobile-friendly websites improve user experience and conversions.",
    readTime: "4 min read",
    category: "Design",
    slug: "responsive-design",
  },
  {
    icon: FaSearch,
    title: "How SEO Helps Local Businesses",
    description:
      "Understand how SEO helps customers discover your business online.",
    readTime: "6 min read",
    category: "SEO",
    slug: "seo-local-business",
  },
  {
    icon: FaBookOpen,
    title: "Restaurant Website Checklist",
    description:
      "Everything you need before launching a professional restaurant website.",
    readTime: "7 min read",
    category: "Restaurant",
    slug: "restaurant-checklist",
  },
  {
    icon: FaPenNib,
    title: "Preparing Content Before Your Website Project",
    description:
      "Prepare logos, branding, images, and content before development begins.",
    readTime: "5 min read",
    category: "Planning",
    slug: "prepare-content",
  },
  {
    icon: FaGlobe,
    title: "Website Maintenance Guide",
    description:
      "Learn how updates, backups, and monitoring keep your website secure.",
    readTime: "8 min read",
    category: "Maintenance",
    slug: "website-maintenance",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="py-24 border-b border-neutral-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="inline-block border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full">
            MICROWEBS RESOURCES
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mt-6"
          >
            Learn Before You Launch
          </motion.h1>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Helpful articles, guides and checklists to help you build a successful website.
          </p>

        </div>

      </section>

      {/* Articles */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {articles.map((article, index) => {

              const Icon = article.icon;

              return (

                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-neutral-900 rounded-3xl border border-neutral-800 p-8 flex flex-col"
                >

                  <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl">
                    <Icon />
                  </div>

                  <span className="text-yellow-400 text-sm mt-6">
                    {article.category}
                  </span>

                  <h2 className="text-2xl font-bold mt-2">
                    {article.title}
                  </h2>

                  <p className="text-gray-400 mt-4 flex-1">
                    {article.description}
                  </p>

                  <div className="flex justify-between items-center mt-8">

                    <span className="text-sm text-gray-500">
                      {article.readTime}
                    </span>

                    <Link
                      to="#"
                      className="text-yellow-400 flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Coming Soon
                      <FaArrowRight />
                    </Link>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-400 text-black py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-black">
            Ready to Build Your Website?
          </h2>

          <p className="text-xl mt-6">
            Let's create a modern website that helps your business grow.
          </p>

          <Link
            to="/order"
            className="inline-block mt-10 bg-black text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Start Your Project
          </Link>

        </div>

      </section>

    </div>
  );
}