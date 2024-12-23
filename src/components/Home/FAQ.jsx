import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need an appointment?",
      answer:
        "While walk-ins are welcome, we recommend booking an appointment to ensure availability and minimize waiting time.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use premium, professional-grade products from top brands to ensure the best results for your skin and hair.",
    },
    {
      question: "What services do you offer?",
      answer:
        "Our services include haircuts, facials, manicures, pedicures, makeup, and more. Check out our services page for detailed offerings.",
    },
    {
      question: "Can I reschedule my appointment?",
      answer:
        "Yes, you can reschedule your appointment up to 24 hours in advance by contacting our support team.",
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes, we use skin-friendly and dermatologically tested products suitable for all skin types, including sensitive skin.",
    },
    {
      question: "Do you offer packages for special occasions?",
      answer:
        "Absolutely! We have tailored packages for weddings, parties, and other special events. Contact us for details.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We are open from 9:00 AM to 8:00 PM, Monday through Saturday. On Sundays, we operate from 10:00 AM to 6:00 PM.",
    },
    {
      question: "Is parking available at your location?",
      answer:
        "Yes, we have dedicated parking spaces for our customers right outside our parlour.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFF8F5] py-16 px-6 mt-20 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Frequently <span className="text-[#F63E7B]">Asked Questions</span>
        </h2>
        <p className="text-gray-600">
          Got questions? We've got answers! Browse through our FAQs to learn more.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <div
              className="bg-white py-4 px-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="bg-[#FFF1ED] py-4 px-6 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
