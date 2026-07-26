const handlePayment = () => {
  console.log("Button clicked");
  console.log("User:", user);
  console.log("Key:", import.meta.env.VITE_PAYSTACK_PUBLIC_KEY);

  if (!user) {
    alert("Please login first.");
    return;
  }

  try {
    const popup = new PaystackPop();

    popup.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: user.email,
      amount: Number(price) * 100,
      currency,

      metadata: {
        websiteType,
        packagePlan,
      },

      onSuccess: (transaction) => {
        console.log(transaction);
      },

      onCancel: () => {
        alert("Payment cancelled");
      },
    });
  } catch (err) {
    console.error("Paystack Error:", err);
  }
};