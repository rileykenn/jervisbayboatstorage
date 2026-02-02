"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" }, // Assuming about section has/will have id="about"
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-marine-950/80 backdrop-blur-md border-b border-marine-200/10 py-3 shadow-lg"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">

                    {/* Logo */}
                    <a href="#" className="flex flex-col z-50 group">
                        <span className="text-lg md:text-xl font-light tracking-widest text-white group-hover:text-cyan-300 transition-colors">JERVIS BAY</span>
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-cyan-400 group-hover:text-white transition-colors">BOAT STORAGE</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-marine-100 hover:text-white transition-colors uppercase tracking-wider relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                            </a>
                        ))}

                        <a
                            href="tel:0401404239"
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled
                                    ? "bg-white text-marine-900 hover:bg-cyan-50"
                                    : "bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-marine-900"
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            Call 0401 404 239
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden z-50 text-white p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-marine-950/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-light text-white hover:text-cyan-300 transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px w-24 bg-marine-800" />
                        <a
                            href="tel:0401404239"
                            className="flex items-center gap-2 px-8 py-4 bg-white text-marine-900 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-xl"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
