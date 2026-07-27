import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaStore,
  FaUtensils,
  FaGraduationCap,
  FaChurch,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";

const websiteTypes = [
  {
    title: "Business Website",
    icon: FaStore,
    description: "Perfect for companies and small businesses.",
  },
  {
    title: "Restaurant Website",
    icon: FaUtensils,
    description: "Menus, reservations, gallery and online ordering.",
  },
  {
    title: "School Website",
    icon: FaGraduationCap,
    description: "Admissions, news, portal and academics.",
  },
  {
    title: "Church Website",
    icon: FaChurch,
    description: "Events, sermons, donations and ministries.",
  },
  {
    title: "E-Commerce Store",
    icon: FaShoppingCart,
    description: "Sell products online with secure payments.",
  },
  {
    title: "Custom Website",
    icon: FaLaptopCode,
    description: "Need something unique? We'll build it from scratch.",
  },
];

export default function NewOrder() {
  return (
    <div className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black">
          Start a New Website Project
        </h1>

        <p className="text-gray-400 mt-4 text-lg max-w-3xl">
          Choose the type of website you want. You'll then provide your
          business details and we'll begin building your project.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

          {websiteTypes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 hover:border-yellow-400 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl">
                  <Icon />
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-4">
                  {item.description}
                </p>

                <Link
                  to="/order"
                  className="mt-8 inline-flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
                >
                  Continue
                  <FaArrowRight />
                </Link>
              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}