import React, { useState } from "react";

const faqs = [
  {
    question: "Struggling to get fair compensation from your insurance?",
    answer:
      "Insurance companies often try to settle for less than you deserve. Personal Injury Max pairs you with top-notch local attorneys who will fight for your rightful compensation. Take our survey to see if you qualify for free legal representation and start your case evaluation today.",
  },
  {
    question: "Recently injured in a motor vehicle accident as driver or passenger?",
    answer:
      "If a car accident has left you injured, you could be eligible for significant compensation. Personal Injury Max connects you with experienced attorneys who work on a no-win, no-fee basis. Answer a few questions to begin your free qualification process and learn the potential value of your claim.",
  },
  {
    question: "Do you need a qualified attorney but worry about upfront costs?",
    answer:
      "Worrying about legal fees shouldn’t stop you from seeking justice. At Personal Injury Max, our attorneys offer free legal representation until you win your case. Complete our survey to find out if you qualify and get started without any upfront costs.",
  },
  {
    question: "Are you unsure about the value of your injury claim?",
    answer:
      "Many accident victims don’t know how much their claim is worth. Personal Injury Max offers a free case evaluation to help you understand the true value of your claim. Take our survey to start the evaluation and get connected with a top local attorney.",
  },
  {
    question: "Do you want to ensure your legal rights are protected after an accident?",
    answer:
      "After an accident, it's crucial to have someone on your side to protect your rights. Personal Injury Max connects you with expert attorneys who will ensure your legal rights are upheld. Fill out our quick survey to qualify for a free case review and speak with a legal expert at a convenient time for you.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto my-10 px-6" id="faq">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left font-bold text-lg sm:text-xl flex justify-between items-center py-3 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-[#143F3A] text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-base sm:text-lg mt-2 text-left">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
