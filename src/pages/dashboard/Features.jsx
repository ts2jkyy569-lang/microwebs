import { useState } from "react";

const featureList = [
  { name: "Responsive Design", price: 50 },
  { name: "Contact Form", price: 30 },
  { name: "Online Booking", price: 100 },
  { name: "Payment Integration", price: 120 },
  { name: "Live Chat", price: 80 },
  { name: "Blog", price: 60 },
  { name: "Admin Dashboard", price: 200 },
  { name: "SEO Optimization", price: 70 },
];

export default function Features({
  setStep,
  features,
  setFeatures,
  price,
  setPrice,
  currency,
}) {
  const [selected, setSelected] = useState(features);

  const formatPrice = (amount) =>
    currency === "NGN"
      ? `₦${Number(amount).toLocaleString()}`
      : `$${Number(amount).toLocaleString()}`;

  const toggleFeature = (feature) => {
    let updated;

    if (selected.includes(feature.name)) {
      updated = selected.filter((item) => item !== feature.name);
      setPrice((prev) => prev - feature.price);
    } else {
      updated = [...selected, feature.name];
      setPrice((prev) => prev + feature.price);
    }

    setSelected(updated);
    setFeatures(updated);
  };

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-2">
        Choose Features
      </h1>

      <p className="text-gray-400 mb-8">
        Select the extra features you want for your website.
      </p>

      <div className="space-y-4">

        {featureList.map((feature) => (
          <div
            key={feature.name}
            onClick={() => toggleFeature(feature)}
            className={`flex justify-between items-center p-5 rounded-xl cursor-pointer border transition ${
              selected.includes(feature.name)
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-neutral-900 border-neutral-800 hover:border-yellow-400"
            }`}
          >
            <span>{feature.name}</span>

            <span>{formatPrice(feature.price)}</span>
          </div>
        ))}

      </div>

      <div className="mt-8 bg-neutral-900 border border-neutral-800 rounded-xl p-5">

        <h2 className="text-2xl font-bold">
          Total Extra Features
        </h2>

        <p className="text-yellow-400 text-3xl font-bold mt-2">
          {formatPrice(price)}
        </p>

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setStep(2)}
          className="bg-neutral-700 px-8 py-4 rounded-xl"
        >
          Back
        </button>

        <button
          onClick={() => setStep(4)}
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
        >
          Continue
        </button>

      </div>

    </div>
  );
}