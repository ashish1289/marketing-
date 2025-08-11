
import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0a1121] text-white px-4 py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src="/logo.png" alt="Walytic" className="h-10 w-10" />
                    <h1 className="text-lg font-semibold">Walytic</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Affiliate</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">Integration</li>
                </ul>

                {/* Register Button - Desktop */}
                <Link to="">
                    <button className="bg-white text-black px-4 py-1 rounded hidden md:block cursor-pointer">Register</button>
                </Link>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-2 px-4">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <ul className="flex flex-col items-center justify-center gap-2">
                            <li>Home</li>
                            <li>Affiliate</li>
                            <li>Pricing</li>
                            <li>Integration</li>
                        </ul>
                       
                            <button className="bg-white text-black px-4 py-1 rounded">Register</button>
                     
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
