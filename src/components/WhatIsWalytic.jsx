import React from "react";

const features = [
  {
    icon: "💬", // Replace with your image/icon component
    title: "Flexible Messaging",
    description:
      "Use event-triggered WhatsApp messages to send payment receipts or other transactional notifications to your users.",
  },
  {
    icon: "⏰",
    title: "Smart Reminders",
    description:
      "Set up automated WhatsApp reminders with cron expressions. Send recurring payment reminders, appointment notifications, or follow-up messages on schedule.",
  },
  {
    icon: "✅",
    title: "Number Verification",
    description:
      "Verify WhatsApp numbers in bulk to ensure your contact lists are active and valid. Save costs by removing inactive numbers before campaigns.",
  },
  {
    icon: "👥",
    title: "Group Management",
    description:
      "Export WhatsApp group member lists easily. Manage your groups efficiently and extract member contact information for targeted campaigns.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#121E2C] text-white px-6 md:px-20 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          What is <span className="text-[#00F0B5]">Walytic?</span>
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Walytic is the most comprehensive WhatsApp business automation
          platform that transforms your WhatsApp into a powerful business tool.
          Beyond just messaging, we provide advanced features like automated
          reminders, number verification, and group management tools.
        </p>
      </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "Automated Messaging",
            "Smart Reminders",
            "Number Verification",
            "Group Management",
            "Excel Integration",
          ].map((label) => (
            <span
              key={label}
              className="bg-[#13424F] text-white px-4 py-2 rounded-full text-sm md:text-base"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#0B1724] rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4 text-[#00F0B5]">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FeatureSection;
