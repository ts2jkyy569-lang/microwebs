export default function OrderReview({
  setStep,
  websiteType,
  packagePlan,
  features,
  price,
  details,
  currency,
}) {
  const formattedPrice =
    currency === "NGN"
      ? `₦${Number(price).toLocaleString()}`
      : `$${Number(price).toLocaleString()}`;

  return (
    <div className="text-white">

      <h1 className="text-4xl font-bold mb-2">
        Review Your Order
      </h1>

      <p className="text-gray-400 mb-8">
        Check your website project details before continuing.
      </p>

      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-8">

        <section>
          <h2 className="text-xl font-bold mb-3">
            Website Type
          </h2>

          <p className="text-gray-300">
            {websiteType || "Not selected"}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            Package
          </h2>

          <p className="text-gray-300">
            {packagePlan || "Not selected"}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            Features
          </h2>

          {features?.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-300">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">
              No extra features selected
            </p>
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            Total Price
          </h2>

          <p className="text-yellow-400 text-3xl font-bold">
            {formattedPrice}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">
            Project Details
          </h2>

          <div className="space-y-2 text-gray-300">
            <p>
              Business:
              <span className="ml-2">
                {details?.businessName || "-"}
              </span>
            </p>

            <p>
              Website Name:
              <span className="ml-2">
                {details?.websiteName || "-"}
              </span>
            </p>

            <p>
              Description:
              <span className="ml-2">
                {details?.description || "-"}
              </span>
            </p>

            <p>
              Colors:
              <span className="ml-2">
                {details?.colors || "-"}
              </span>
            </p>

            <p>
              Timeline:
              <span className="ml-2">
                {details?.deadline || "-"}
              </span>
            </p>

            <p>
              Notes:
              <span className="ml-2">
                {details?.notes || "-"}
              </span>
            </p>
          </div>
        </section>

        <div className="flex gap-4 pt-5">

          <button
            onClick={() => setStep(4)}
            className="bg-neutral-700 px-8 py-4 rounded-xl"
          >
            Edit Details
          </button>

          <button
            onClick={() => setStep(6)}
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            Confirm & Continue
          </button>

        </div>

      </div>

    </div>
  );
}