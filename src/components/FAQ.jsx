const faqs = [
  {
    q: "How long does a website take?",
    a: "Most websites are completed within 1 to 4 weeks depending on the project.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. We can redesign outdated websites and improve their performance.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes. We help clients deploy their websites and choose the right hosting solution.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. Every website we build is fully responsive.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-black py-24">
      <div className="container max-w-4xl">

        <h2 className="text-5xl text-center font-bold text-white mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((item) => (
            <div
              key={item.q}
              className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
            >
              <h3 className="text-white text-xl font-bold">
                {item.q}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.a}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}