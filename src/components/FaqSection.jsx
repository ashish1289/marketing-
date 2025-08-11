import { useState } from "react";

const faqs = [
  { q: "What is Walytic?", a: "Walytic is a platform for..." },
  { q: "How does Walytic work?", a: "Walytic works by..." },
  { q: "Is Walytic secure?", a: "Yes, Walytic is secure..." },
  { q: "What types of messages can I send with Walytic?", a: "You can send..." },
  { q: "Can I use my personal WhatsApp number with Walytic?", a: "No, you need..." },
  { q: "Is there a free trial available?", a: "Yes, we offer..." },
  { q: "How do I integrate Walytic with my existing systems?", a: "Integration is easy..." },
  { q: "What kind of support does Walytic offer?", a: "We offer..." },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#192233] min-h-screen flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-500 rounded-full p-2 mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path stroke="currentColor" strokeWidth="2" d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Frequently Asked Questions</h2>
          <p className="text-gray-300 text-center mt-2">Here are some of the common questions our customers have. For more information please contact us.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-full transition">Email us your question</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition">Send us a tweet</button>
          </div>
        </div>
        <div className="bg-transparent rounded-lg divide-y divide-gray-700">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full flex justify-between items-center py-5 px-2 text-left text-lg font-semibold text-white focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === idx && (
                <div className="px-2 pb-5 text-gray-300 text-base">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}