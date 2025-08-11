export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-[#192233] w-full py-16 px-4 flex flex-col items-center"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
        <div className="bg-green-500 rounded-full p-2 mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path stroke="currentColor" strokeWidth="2" d="M12 8v4m0 4h.01" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Start with affordable messaging solutions at just $9/month. Choose the perfect plan for your business needs, with significant cost savings as you scale.
        </p>
      </div>

      {/* Most Popular Card */}
      <div className="w-full flex justify-center mb-12">
        <div className="w-full max-w-3xl bg-gradient-to-br from-[#0e3c3d] to-[#0e3c3d]/80 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-block bg-teal-600 text-white text-xs font-semibold rounded-full px-3 py-1 mb-2">
              MOST POPULAR
            </span>
            <h3 className="text-2xl font-bold text-white">STARTER</h3>
            <p className="text-gray-300 mb-4">
              Perfect for small businesses getting started with WhatsApp messaging
            </p>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-white">$9</span>
              <span className="text-gray-300 ml-2 mb-1">/ month</span>
            </div>
            <ul className="text-white space-y-1 mb-4">
              <li><span className="font-bold">1,200</span> Messages monthly</li>
              <li><span className="font-bold">$0.0075</span> per message</li>
              <li>Connect Single WhatsApp Account</li>
            </ul>
          </div>
          <div className="flex flex-col items-end mt-6 md:mt-0">
            <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-8 py-3 rounded-lg transition mb-2">
              Start Free Trial
            </button>
            <span className="text-gray-300 text-sm">No credit card required</span>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* LITE */}
        <div className="bg-[#202b3c] rounded-2xl shadow-lg p-8 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-1">LITE</h4>
          <p className="text-gray-300 mb-4">For businesses with basic messaging needs</p>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-white">$19</span>
            <span className="text-gray-300 ml-2 mb-1">/ month</span>
          </div>
          <ul className="text-white space-y-1 mb-4">
            <li><span className="font-bold">3,000</span> Messages</li>
            <li><span className="font-bold">$0.0063</span> per message</li>
            <li>Connect Only Single WhatsApp Account</li>
            <li>Instant Send Message via API</li>
            <li>Text, Image & File Types Supported</li>
            <li>Shared Server</li>
            <li>Support on Email</li>
          </ul>
          <button className="mt-auto bg-transparent border border-teal-400 text-teal-300 font-semibold px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition">
            Start Free Trial
          </button>
        </div>

        {/* STANDARD */}
        <div className="bg-[#202b3c] rounded-2xl shadow-lg p-8 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-1">STANDARD</h4>
          <p className="text-gray-300 mb-4">For growing businesses with multiple accounts</p>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-white">$49</span>
            <span className="text-gray-300 ml-2 mb-1">/ month</span>
          </div>
          <ul className="text-white space-y-1 mb-4">
            <li><span className="font-bold">9,000</span> Messages</li>
            <li><span className="font-bold">$0.0054</span> per message</li>
            <li>Connect up to 2 WhatsApp Accounts</li>
            <li>Instant Send & Schedule Message</li>
            <li>Text, Image & File Types Supported</li>
            <li>Shared Server</li>
            <li>Support on Email + Chat</li>
          </ul>
          <button className="mt-auto bg-transparent border border-teal-400 text-teal-300 font-semibold px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition">
            Start Free Trial
          </button>
        </div>

        {/* ADVANCED */}
        <div className="bg-[#202b3c] rounded-2xl shadow-lg p-8 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-1">ADVANCED</h4>
          <p className="text-gray-300 mb-4">For businesses needing advanced features</p>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-white">$149</span>
            <span className="text-gray-300 ml-2 mb-1">/ month</span>
          </div>
          <ul className="text-white space-y-1 mb-4">
            <li><span className="font-bold">40,000</span> Messages</li>
            <li><span className="font-bold">$0.0037</span> per message</li>
            <li>Connect up to 10 WhatsApp Accounts</li>
            <li>+ QR Code on API Access</li>
            <li>+ Video & Audio Types Supported</li>
            <li>Dedicated Server</li>
            <li>Priority Support</li>
          </ul>
          <button className="mt-auto bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg transition">
            Start Free Trial
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-[#202b3c] rounded-2xl shadow-lg p-8 flex flex-col">
          <h4 className="text-lg font-bold text-white mb-1">ENTERPRISE</h4>
          <p className="text-gray-300 mb-4">For large organizations with high volume needs</p>
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-white">$499</span>
            <span className="text-gray-300 ml-2 mb-1">/ month</span>
          </div>
          <ul className="text-white space-y-1 mb-4">
            <li><span className="font-bold">200,000</span> Messages</li>
            <li><span className="font-bold">$0.0025</span> per message</li>
            <li>Connect up to 50 WhatsApp Accounts</li>
            <li>+ QR Code on API Access</li>
            <li>+ Video & Audio Types Supported</li>
            <li>Dedicated Server</li>
            <li>Priority Support</li>
          </ul>
          <button className="mt-auto bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-lg transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
