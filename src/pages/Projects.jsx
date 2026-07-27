import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-neutral-800">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 font-semibold"
          >
            MICROWEBS PORTFOLIO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mt-6"
          >
            Projects We've Built
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto mt-6"
          >
            Explore real websites and design templates created by MicroWebs.
            Every project is fully responsive, fast, and customized to each
            client's business.
          </motion.p>

        </div>

      </section>

      {/* Projects */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-8">

                  {project.featured && (
                    <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                      ★ Featured Project
                    </span>
                  )}

                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="text-yellow-400 mt-2">
                    {project.category}
                  </p>

                  {project.description && (
                    <p className="text-gray-400 mt-5">
                      {project.description}
                    </p>
                  )}

                  <div className="flex gap-4 mt-8">

                    <Link
                      to={`/projects/${project.id}`}
                      className="flex-1 border border-yellow-400 text-yellow-400 text-center py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
                    >
                      View Case Study
                    </Link>

                    <Link
                      to="/order"
                      className="flex-1 bg-yellow-400 text-black text-center py-3 rounded-xl font-bold hover:scale-105 transition"
                    >
                      Customize
                    </Link>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}