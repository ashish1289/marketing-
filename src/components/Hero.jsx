import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="hero" // 👈 Added ID so navbar can scroll here
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 pt-[64px] text-white"
    >
      {/* LEFT SIDE: Text content */}
      <motion.div
        className="flex flex-col gap-6 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold md:leading-18 leading-12">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            First message <br /> to first million.
          </span>
          <br />
          Without the <br />
          headaches.
        </h1>

        <p className="text-gray-300 text-lg md:mt-4">
          Whether you're building, integrating, or scaling,<br /> we handle the hard parts of WhatsApp.
        </p>

        <div className="flex gap-4 flex-wrap md:mt-4">
          <Link to="/signup">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition cursor-pointer">
              Get Started
            </button>
          </Link>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
            Discover Solutions
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <img src="/1.svg" alt="Hero Graphic" className="w-full max-w-xl rounded-xl" />
      </motion.div>
    </div>
  );
}
