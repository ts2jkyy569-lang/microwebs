import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import {
  FaExternalLinkAlt,
  FaGlobe,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop,
  FaReact,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiReactrouter,
} from "react-icons/si";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-black">Project Not Found</h1>

          <Link
            to="/projects"
            className="inline-block mt-8 bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">

      {/* HERO */}

      <section className="py-24 border-b border-neutral-800">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-400 text-yellow-400 font-semibold">
            FEATURED CASE STUDY
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 mt-5">
            {project.category}
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-3"
            >
              <FaExternalLinkAlt />
              Visit Website
            </a>

            <Link
              to="/order"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition"
            >
              Order Similar Website
            </Link>

          </div>

        </div>

      </section>

      {/* BROWSER */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-neutral-800">

          <div className="bg-neutral-900 p-4 flex items-center">

            <div className="flex gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

            </div>

            <div className="flex-1 text-center text-gray-400 text-sm">
              {project.liveUrl}
            </div>

          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full"
          />

        </div>

      </section>

      {/* PROJECT INFO */}

      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-neutral-900 rounded-2xl p-6">

            <p className="text-gray-400">Industry</p>

            <h3 className="text-2xl font-bold mt-3">
              {project.industry}
            </h3>

          </div>

          <div className="bg-neutral-900 rounded-2xl p-6">

            <p className="text-gray-400">Timeline</p>

            <h3 className="text-2xl font-bold mt-3">
              {project.timeline}
            </h3>

          </div>

          <div className="bg-neutral-900 rounded-2xl p-6">

            <p className="text-gray-400">Performance</p>

            <h3 className="text-2xl font-bold mt-3">
              Excellent
            </h3>

          </div>

          <div className="bg-neutral-900 rounded-2xl p-6">

            <p className="text-gray-400">Rating</p>

            <h3 className="text-2xl font-bold mt-3">
              ⭐⭐⭐⭐⭐
            </h3>

          </div>

        </div>

      </section>

      {/* RESPONSIVE */}

      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold mb-10">
          Fully Responsive
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">

            <FaDesktop className="mx-auto text-5xl text-yellow-400" />

            <h3 className="mt-5 text-xl font-bold">
              Desktop
            </h3>

          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">

            <FaTabletAlt className="mx-auto text-5xl text-yellow-400" />

            <h3 className="mt-5 text-xl font-bold">
              Tablet
            </h3>

          </div>

          <div className="bg-neutral-900 rounded-2xl p-8 text-center">

            <FaMobileAlt className="mx-auto text-5xl text-yellow-400" />

            <h3 className="mt-5 text-xl font-bold">
              Mobile
            </h3>

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Technology Used
        </h2>

        <div className="grid md:grid-cols-5 gap-6">

          <div className="bg-neutral-900 rounded-2xl p-6 text-center">
            <FaReact className="mx-auto text-5xl text-cyan-400" />
            <p className="mt-4">React</p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center">
            <SiVite className="mx-auto text-5xl text-purple-400" />
            <p className="mt-4">Vite</p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center">
            <SiTailwindcss className="mx-auto text-5xl text-sky-400" />
            <p className="mt-4">Tailwind CSS</p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center">
            <SiFramer className="mx-auto text-5xl text-pink-400" />
            <p className="mt-4">Framer Motion</p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 text-center">
            <SiReactrouter className="mx-auto text-5xl text-red-400" />
            <p className="mt-4">React Router</p>
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold mb-10">
          Project Features
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {project.features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5"
            >
              ✓ {feature}
            </div>
          ))}

        </div>

      </section>

      {/* CLIENT BENEFITS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Included With Every Website
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Responsive Design",
            "Fast Performance",
            "SEO Ready",
            "WhatsApp Integration",
            "Google Maps",
            "Contact Forms",
            "Analytics Integration",
            "Modern UI/UX",
          ].map((item) => (
            <div
              key={item}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}

      <section className="bg-neutral-950 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-6 gap-6 text-center">

            {[
              "Discovery",
              "Planning",
              "Design",
              "Development",
              "Testing",
              "Launch",
            ].map((step, index) => (
              <div key={step}>

                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 text-black flex items-center justify-center font-black text-xl">
                  {index + 1}
                </div>

                <p className="mt-5">{step}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          More Screenshots
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {project.screenshots.map((shot) => (
            <div
              key={shot.title}
              className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800"
            >
              <img
                src={shot.image}
                alt={shot.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 font-semibold">
                {shot.title}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-yellow-400 text-black">

        <div className="max-w-5xl mx-auto text-center px-6">

          <FaGlobe className="mx-auto text-6xl mb-6" />

          <h2 className="text-5xl font-black">
            Ready for a Website Like This?
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            We'll customize this design to match your brand, business, and goals.
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