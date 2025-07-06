import React, { useState } from 'react';
import "../src/app/globals.css";

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f6f0] px-4 md:px-6 lg:px-12 py-25 md:py-24 text-[#4a4a4a] mb-15 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#ccc] pb-4 cursor-pointer transition-all"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-base md:text-lg font-medium">{faq.question}</h3>
                <span className="text-xl font-semibold">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-sm md:text-base leading-relaxed text-[#6a6a6a]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
