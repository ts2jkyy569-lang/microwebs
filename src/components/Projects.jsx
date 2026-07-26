import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "DinePro Restaurant",
    category: "Restaurant Website",
    description:
      "A premium restaurant website built with React, Vite, Tailwind CSS, and Framer Motion. Features include a modern landing page, animated menu, gallery, testimonials, reservation section, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    live: "https://dinepro-restaurant.netlify.app",
    github: "https://github.com/ts2jkyy569-lang/dinepro-restaurant",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24">
      <div className="container">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Real projects built with modern web technologies.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="grid lg:grid-cols-2 gap-10 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover min-h-[350px]"
              />

              <div className="p-10">

                <span className="text-yellow-400 uppercase tracking-wider font-semibold">
                  {project.category}
                </span>

                <h3 className="text-4xl font-bold text-white mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-6 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-neutral-800 text-yellow-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-10">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-6 py-3 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-400 hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}