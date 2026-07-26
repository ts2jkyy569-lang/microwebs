import { FaBolt, FaMobileAlt, FaSearch, FaHeadset } from "react-icons/fa";

const items = [
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    text: "Optimized websites that load quickly and deliver a smooth experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "Your website looks great on phones, tablets, and desktops.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Ready",
    text: "Built with search engine best practices from the start.",
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    text: "Reliable support before and after your website goes live.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-24">
      <div className="container">
        <h2 className="text-5xl font-bold text-center text-white">
          Why Choose Microwebs?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-neutral-900 rounded-3xl p-8 text-center border border-neutral-800"
            >
              <div className="text-yellow-400 text-5xl flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}