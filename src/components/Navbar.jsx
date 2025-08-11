import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = { textDecoration: "none", color: "inherit" };

    return (
        <motion.nav
            className="bg-[#0a1121] text-white px-4 py-3"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src="/logo.png" alt="Walytic" className="h-10 w-10" />
                    <h1 className="text-lg font-semibold">Walytic</h1>
                </motion.div>

                {/* Desktop Menu */}
                <motion.ul
                    className="hidden md:flex items-center gap-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <li className="cursor-pointer"><a href="#hero" style={linkStyle}>Home</a></li>
                    <li className="cursor-pointer"><a href="#affiliate" style={linkStyle}>Affiliate</a></li>
                    <li className="cursor-pointer"><a href="#pricing" style={linkStyle}>Pricing</a></li>
                    <li className="cursor-pointer"><a href="#integration" style={linkStyle}>Integration</a></li>
                </motion.ul>

                {/* Register Button - Desktop */}
                <Link to="" style={linkStyle}>
                    <motion.button
                        className="bg-white text-black px-4 py-1 rounded hidden md:block cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Register
                    </motion.button>
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

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden mt-2 px-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex flex-col items-center justify-center space-y-2 py-2">
                            <ul className="flex flex-col items-center justify-center gap-2">
                                <li><a href="#hero" style={linkStyle}>Home</a></li>
                                <li><a href="#affiliate" style={linkStyle}>Affiliate</a></li>
                                <li><a href="#pricing" style={linkStyle}>Pricing</a></li>
                                <li><a href="#integration" style={linkStyle}>Integration</a></li>
                            </ul>
                            <button className="bg-white text-black px-4 py-1 rounded">Register</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
