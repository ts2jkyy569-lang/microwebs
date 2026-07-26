import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDesktop,
  FaStore,
  FaUtensils,
  FaGraduationCap,
  FaChurch,
  FaShoppingCart,
} from "react-icons/fa";

const projects = [
  {
    title: "Business Website",
    category: "Business",
    icon: FaStore,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  },
  {
    title: "Restaurant Website",
    category: "Restaurant",
    icon: FaUtensils,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
  },
  {
  title: "School Website",
  category: "Education",
  icon: FaGraduationCap,
  image:
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200",
},
  {
    title: "Church Website",
    category: "Church",
    icon: FaChurch,
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200",
  },
  {
    title: "Online Store",
    category: "E-Commerce",
    icon: FaShoppingCart,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
  },
  {
    title: "Corporate Website",
    category: "Corporate",
    icon: FaDesktop,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="py-28 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-yellow-400/10 border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full font-semibold">
            FEATURED PORTFOLIO
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-6">
            Choose Your Website Style
          </h2>

          <p className="text-gray-400 text-lg mt-6">
            Browse professional website designs built for different
            industries. Pick one you like and we'll customize it for your
            business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-8">

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-12 h-12 rounded-xl bg-yellow-400 text-black flex items-center justify-center">
                      <Icon />
                    </div>

                    <div>

                      <p className="text-yellow-400 text-sm">
                        {project.category}
                      </p>

                      <h3 className="text-2xl font-bold">
                        {project.title}
                      </h3>

                    </div>

                  </div>

                  <div className="flex gap-4 mt-8">

                    <button className="flex-1 border border-yellow-400 text-yellow-400 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                      Live Preview
                    </button>

                    <Link
                      to="/dashboard/new-order"
                      className="flex-1 bg-yellow-400 text-black text-center py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      Use This Design
                    </Link>

                  </div>

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}