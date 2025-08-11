import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png" // replace with your logo path
              alt="Walytic"
              className="w-10 h-10"
            />
            <h2 className="text-xl font-semibold">Walytic</h2>
          </div>
          <p className="text-sm text-gray-300">
            Send transactional WhatsApp messages to your customers using our REST APIs or from Excel file. Try out with Free 50 messages and pay as low as $0.0025 per message.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Auto Sender - Mobile App</a></li>
              <li><a href="#">Playzo - Interactive Games</a></li>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* API Docs */}
          <div>
            <h3 className="text-lg font-semibold mb-3">API Documentation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Send Message API</a></li>
              <li><a href="#">Send Message to Group API</a></li>
              <li><a href="#">Schedule Message API</a></li>
              <li><a href="#">Cancel Message API</a></li>
              <li><a href="#">History Messages API</a></li>
              <li><a href="#">WhatsApp Client List API</a></li>
              <li><a href="#">Send Message API via Python</a></li>
              <li><a href="#">Send Message API via Node.js</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2022 - 2025 Walytic
      </div>
    </footer>
  );
};

export default Footer;
