import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

import { saveOrder } from "../../services/orderService";
import { useAuth } from "../../context/AuthContext";


export default function Payment({
  setStep,
  price,
  websiteType,
  packagePlan,
  features,
  details,
  currency,
}) {

  const [loading, setLoading] = useState(false);

  const { user } = useAuth();


  const formattedPrice =
    currency === "NGN"
      ? `₦${Number(price).toLocaleString()}`
      : `$${Number(price).toLocaleString()}`;



  const handlePayment = () => {

    if (!user) {
      alert("Please login first.");
      return;
    }


    const paystackKey =
      import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;


    if (!paystackKey) {
      alert("Paystack key missing.");
      return;
    }


    setLoading(true);


    const popup = new PaystackPop();



    popup.newTransaction({

      key: paystackKey,


      email: user.email,


      amount: Number(price) * 100,


      currency,


      reference:
        "MICROWEBS_" + Date.now(),



      metadata: {

        userId: user.uid,

        websiteType,

        packagePlan,

        features,

      },



      onSuccess: async (transaction) => {

        try {

          await saveOrder({

            userId: user.uid,

            email: user.email,

            websiteType,

            packagePlan,

            features,

            details,

            price,

            currency,

            paymentStatus: "Paid",

            projectStatus: "Pending",

            reference:
              transaction.reference,

          });


          setStep(7);


        } catch(error) {

          console.error(
            "Order save error:",
            error
          );

          alert(
            "Payment succeeded but order could not be saved."
          );


        } finally {

          setLoading(false);

        }

      },



      onCancel: () => {

        setLoading(false);

        alert("Payment cancelled.");

      },

    });

  };



  return (

    <div className="text-white">

      <h1 className="text-4xl font-bold mb-2">
        Payment
      </h1>


      <p className="text-gray-400 mb-8">
        Complete your payment to start your website project.
      </p>



      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6">


        <h2 className="text-2xl font-bold">
          Order Summary
        </h2>



        <p>
          Website:
          <span className="ml-2 text-gray-300">
            {websiteType}
          </span>
        </p>



        <p>
          Package:
          <span className="ml-2 text-gray-300">
            {packagePlan}
          </span>
        </p>



        {features?.length > 0 && (

          <div>

            <p className="font-semibold mb-2">
              Features
            </p>


            <ul className="list-disc ml-6 text-gray-300">

              {features.map((feature,index)=>(

                <li key={index}>
                  {feature}
                </li>

              ))}

            </ul>

          </div>

        )}



        <p className="text-yellow-400 text-3xl font-bold">
          {formattedPrice}
        </p>



        <button

          onClick={handlePayment}

          disabled={loading || !user}

          className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:bg-yellow-300 transition disabled:opacity-50"

        >

          {loading
            ? "Opening Paystack..."
            : "Pay Now"}

        </button>



      </div>


    </div>

  );

}