import { useState } from "react";

import WebsiteType from "./WebsiteType";
import PackageSelect from "./PackageSelect";
import Features from "./Features";
import ProjectDetails from "./ProjectDetails";
import OrderReview from "./OrderReview";
import Payment from "./Payment";

export default function WebsiteOrder() {
  const [step, setStep] = useState(1);

  const [websiteType, setWebsiteType] = useState("");
  const [packagePlan, setPackagePlan] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState({});

  // Currency
  const [currency, setCurrency] = useState("NGN");

  return (
    <div className="p-10">

      {/* Step 1 */}
      {step === 1 && (
        <WebsiteType
          setStep={setStep}
          websiteType={websiteType}
          setWebsiteType={setWebsiteType}
          currency={currency}
          setCurrency={setCurrency}
        />
      )}

      {/* Step 2 */}
      {step === 2 && (
        <PackageSelect
          setStep={setStep}
          packagePlan={packagePlan}
          setPackagePlan={setPackagePlan}
          currency={currency}
          setPrice={setPrice}
        />
      )}

      {/* Step 3 */}
      {step === 3 && (
        <Features
          setStep={setStep}
          features={features}
          setFeatures={setFeatures}
          price={price}
          setPrice={setPrice}
          currency={currency}
        />
      )}

      {/* Step 4 */}
      {step === 4 && (
        <ProjectDetails
          setStep={setStep}
          setDetails={setDetails}
        />
      )}

      {/* Step 5 */}
      {step === 5 && (
        <OrderReview
          setStep={setStep}
          websiteType={websiteType}
          packagePlan={packagePlan}
          features={features}
          price={price}
          details={details}
          currency={currency}
        />
      )}

      {/* Step 6 */}
      {step === 6 && (
        <Payment
          setStep={setStep}
          websiteType={websiteType}
          packagePlan={packagePlan}
          features={features}
          details={details}
          price={price}
          currency={currency}
        />
      )}

      {/* Step 7 */}
      {step === 7 && (
        <div className="text-white">
          <h1 className="text-4xl font-bold">
            Order Completed 🎉
          </h1>

          <p className="text-gray-400 mt-4">
            Your website project has been submitted successfully.
            We will start working on it soon.
          </p>
        </div>
      )}

    </div>
  );
}