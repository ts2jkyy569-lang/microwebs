import { useState } from "react";

const websiteTypes = [
  "Custom Website",
  "Business Website",
  "Restaurant",
  "E-commerce",
  "School",
  "Portfolio",
  "Hospital",
  "Real Estate",
  "Church",
  "NGO",
];

export default function WebsiteType({
  setStep,
  websiteType,
  setWebsiteType,
  currency,
  setCurrency,
}) {
  const [selected, setSelected] = useState(websiteType);

  const handleSelect = (type) => {
    setSelected(type);
    setWebsiteType(type);
  };

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-2">
        Choose Website Type
      </h1>

      <p className="text-gray-400 mb-8">
        Select the type of website you want us to build.
      </p>

      {/* Currency Selection */}
      <div className="mb-8">
        <label className="block mb-2 font-semibold">
          Select Currency
        </label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full md:w-72 bg-neutral-900 border border-neutral-700 rounded-xl p-4"
        >
          <option value="NGN">₦ Nigerian Naira</option>
          <option value="USD">$ US Dollar</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websiteTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleSelect(type)}
            className={`p-6 rounded-2xl border text-left transition ${
              selected === type
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-neutral-900 border-neutral-800 hover:border-yellow-400"
            }`}
          >
            <h2 className="text-xl font-bold">{type}</h2>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button
          disabled={!selected}
          onClick={() => setStep(2)}
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}