import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is SYORA a marketplace?",
      answer: "No, SYORA is not a marketplace. It is a search engine that helps buyers discover products across WhatsApp, Instagram, TikTok, and Shopify websites. We don't own your listings — we just suggest where buyers can find you."
    },
    {
      question: "Can I connect Shopify or a custom website?",
      answer: "Yes, You Can"
    },
    {
      question: "Are search results influenced by ads?",
      answer: "No, they aren't"
    },
    {
      question: "What kinds of products can be found on SYORA?",
      answer: "We have access to all kinds of products"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-12">
          Got questions about how SYORA works, how vendors connect, or how shoppers can search smarter? We've got straightforward, clear answers to help you understand everything about using SYORA as a buyer or vendor.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && faq.answer && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Haven't got your answer?{' '}
            <a href="#" className="text-blue-600 hover:underline">Contact our support now</a>
          </p>
        </div>
      </div>
    </section>
  );
}
