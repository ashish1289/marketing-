import { FaHeart, FaBolt, FaLanguage, FaShieldAlt, FaCode, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaHeart className="text-teal-400 text-2xl" />,
    title: "Exceptional Use-Cases",
    desc: "Notify your users via WhatsApp messaging. Be it a payment reminder or invoice PDF, in your local language.",
  },
  {
    icon: <FaBolt className="text-teal-400 text-2xl" />,
    title: "Pamper Your Users",
    desc: "Wish your users on special occasions (birthdays or anniversaries) by scheduling it altogether with your own WhatsApp Account. They will love it.",
  },
  {
    icon: <FaLanguage className="text-teal-400 text-2xl" />,
    title: "Language Support",
    desc: "Send your notifications or alerts to your customers in your native language, which can result in more conversions for your products.",
  },
  {
    icon: <FaShieldAlt className="text-teal-400 text-2xl" />,
    title: "Great Customer Care",
    desc: "We provide excellent customer care around the clock over the phone, chat, and through email.",
  },
  {
    icon: <FaCode className="text-teal-400 text-2xl" />,
    title: "Powerful REST APIs",
    desc: "Create an intuitive chatbot to interact with your customers using PHP, Python, or VBA.",
  },
  {
    icon: <FaRocket className="text-teal-400 text-2xl" />,
    title: "Fantastic Speed",
    desc: "Our backend system provides you with blazing fast speed. In an instant, your message will be delivered to the client without fail.",
  },
];

const ChooseUs = () => {
  return (
    <section className="w-full bg-[#0D1524] text-white px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-white">Walytic</span></h2>
        <p className="text-lg text-gray-300 mb-12">
          Here are all the reasons you need to start using Walytic today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#162033] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
