import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12 text-white">
      
      {/* LEFT SIDE: Text content */}
      <div className="flex flex-col gap-6 md:w-1/2">
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
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src="/1.svg" alt="Hero Graphic" className="w-full max-w-xl rounded-xl" />
      </div>
    </div>
  );
}
