// import React, { useState } from "react";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // Add form submission logic here
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#0C101A] text-white px-4 py-12 flex flex-col items-center justify-center">
//       {/* Icon */}
//       <div className="text-4xl mb-4">📧</div>

//       {/* Title */}
//       <h2 className="text-4xl font-bold text-white mb-2 text-center">Get In Touch</h2>
//       <p className="text-center text-gray-300 max-w-xl mb-10">
//         Have questions or need assistance? Please fill out the form below and our team will get back to you as soon as possible.
//       </p>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#1E2A38] w-full max-w-2xl p-6 md:p-10 rounded-lg space-y-6"
//       >
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="flex-1">
//             <label className="text-sm mb-1 block">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full p-3 bg-[#2C3E50] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="text-sm mb-1 block">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full p-3 bg-[#2C3E50] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="text-sm mb-1 block">
//             Your WhatsApp Number {" "}
//             <span className="text-xs text-gray-400">(with country code)</span>
//           </label>
//           <input
//             type="text"
//             name="whatsapp"
//             value={formData.whatsapp}
//             onChange={handleChange}
//             placeholder="e.g. +1 234 567 8900"
//             className="w-full p-3 bg-[#2C3E50] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           />
//         </div>

//         <div>
//           <label className="text-sm mb-1 block">Your Message</label>
//           <textarea
//             rows="5"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Type your message here..."
//             className="w-full p-3 bg-[#2C3E50] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//           ></textarea>
//         </div>

//         {/* Button */}
//         <div className="text-right">
//           <button
//             type="submit"
//             className="bg-[#00E3AA] hover:bg-[#00c391] text-black font-semibold px-6 py-3 rounded-md transition-colors duration-300"
//           >
//             Send Message 🚨
//           </button>
//         </div>
//       </form>

//       {/* Contact Footer */}
//       <div className="flex flex-wrap justify-center items-center gap-10 mt-12 text-center text-sm text-gray-300">
//         <div>
//           <div className="text-2xl">✉️</div>
//           <p className="mt-1">Email Us</p>
//           <p className="text-white font-medium">info@walytic.com</p>
//         </div>
//         <div>
//           <div className="text-2xl">💬</div>
//           <p className="mt-1">WhatsApp Us</p>
//           <p className="text-white font-medium">Start a Chat</p>
//         </div>
//         <div>
//           <div className="text-2xl">🌐</div>
//           <p className="mt-1">Follow Us</p>
//           <p className="text-white font-medium">@walytic</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React, { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    // Load Deftform script only once
    if (!document.querySelector('script[src="https://cdn.deftform.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.deftform.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0C101A] text-white px-4 py-12 flex flex-col items-center justify-center">
      {/* Icon */}
      <div className="text-4xl mb-4">📧</div>

      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-2 text-center">Get In Touch</h2>
      <p className="text-center text-gray-300 max-w-xl mb-10">
        Have questions or need assistance? Please fill out the form below and our team will get back to you as soon as possible.
      </p>

      {/* Deftform Embed */}
      <div
        className="deftform w-full max-w-2xl"
        data-form-id="57e67ab6-65e2-4d8e-a27a-5fdc03160751"
        data-form-width="100%"
        data-form-align="center"
        data-form-auto-height="1"
      ></div>

      {/* Contact Footer */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-12 text-center text-sm text-gray-300">
        <div>
          <div className="text-2xl">✉</div>
          <p className="mt-1">Email Us</p>
          <p className="text-white font-medium">info@walytic.com</p>
        </div>
        <div>
          <div className="text-2xl">💬</div>
          <p className="mt-1">WhatsApp Us</p>
          <p className="text-white font-medium">Start a Chat</p>
        </div>
        <div>
          <div className="text-2xl">🌐</div>
          <p className="mt-1">Follow Us</p>
          <p className="text-white font-medium">@walytic</p>
        </div>
      </div>
    </div>
  );
}
