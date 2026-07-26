import { useState } from "react";

const packages = {
  NGN: [
    {
      name: "Starter",
      price: 150000,
      description: "Perfect for small businesses and personal websites.",
    },
    {
      name: "Business",
      price: 350000,
      description: "Ideal for growing businesses with more features.",
    },
    {
      name: "Premium",
      price: 800000,
      description: "Complete professional solution with advanced features.",
    },
  ],

  USD: [
    {
      name: "Starter",
      price: 300,
      description: "Perfect for small businesses and personal websites.",
    },
    {
      name: "Business",
      price: 700,
      description: "Ideal for growing businesses with more features.",
    },
    {
      name: "Premium",
      price: 1600,
      description: "Complete professional solution with advanced features.",
    },
  ],
};

export default function PackageSelect({
  setStep,
  packagePlan,
  setPackagePlan,
  currency,
  setPrice,
}) {
  const [selected, setSelected] = useState(packagePlan);

  const handleSelect = (pkg) => {
    setSelected(pkg.name);
    setPackagePlan(pkg.name);
    setPrice(pkg.price);
  };

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-2">
        Choose a Package
      </h1>

      <p className="text-gray-400 mb-8">
        Select the package that best fits your project.
      </p>

      <div className="grid gap-6 md:grid-cols-3">

        {packages[currency].map((pkg) => (

          <div
            key={pkg.name}
            onClick={() => handleSelect(pkg)}
            className={`cursor-pointer rounded-2xl border p-6 transition ${
              selected === pkg.name
                ? "border-yellow-400 bg-neutral-900"
                : "border-neutral-800 bg-neutral-900 hover:border-yellow-400"
            }`}
          >

            <h2 className="text-2xl font-bold">
              {pkg.name}
            </h2>

            <p className="text-yellow-400 text-3xl font-bold mt-4">
              {currency === "NGN"
                ? `₦${pkg.price.toLocaleString()}`
                : `$${pkg.price.toLocaleString()}`}
            </p>

            <p className="text-gray-400 mt-4">
              {pkg.description}
            </p>

          </div>

        ))}

      </div>

      <div className="flex gap-4 mt-10">

        <button
          onClick={() => setStep(1)}
          className="bg-neutral-700 px-8 py-4 rounded-xl"
        >
          Back
        </button>

        <button
          disabled={!selected}
          onClick={() => setStep(3)}
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold disabled:opacity-50"
        >
          Continue
        </button>

      </div>

    </div>
  );
}