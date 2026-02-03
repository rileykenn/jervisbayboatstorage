"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-marine-950">
            {/* Static Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/media/hero_image.png"
                    alt="Jervis Bay Boat Storage Hero"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Coastal Gradient Overlays - Darkened for better text contrast on mobile */}
                <div className="absolute inset-0 bg-gradient-to-b from-marine-950/60 via-marine-900/40 to-marine-950/90" />
                <div className="absolute inset-0 bg-marine-900/30 mix-blend-overlay" />
            </div>

            {/* Floating Badge - Hidden on mobile, visible from large screens up */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-32 left-8 md:left-16 hidden lg:flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl z-20"
            >
                <div className="bg-marine-500/80 p-2 rounded-lg text-white">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-xs text-marine-100 uppercase tracking-wider font-semibold">Security Level</p>
                    <p className="text-white font-bold text-shadow">24/7 Monitored</p>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 w-full max-w-6xl mx-auto text-center mt-0 md:mt-[-10vh]"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 md:mb-8"
                >
                    <div className="inline-flex items-center rounded-full bg-marine-950/60 px-4 py-1.5 md:px-6 md:py-2 backdrop-blur-md border border-marine-200/20 shadow-lg">
                        <span className="flex h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-cyan-400 mr-2 md:mr-3 animate-pulse"></span>
                        <span className="text-[10px] md:text-xs font-bold text-marine-50 tracking-[0.2em] md:tracking-[0.25em] uppercase">Premium Marine Facility</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 drop-shadow-xl"
                >
                    <span className="block text-marine-100 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-light mb-2 md:mb-4 tracking-wide md:tracking-normal">Jervis Bay</span>
                    BOAT <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-marine-100 to-cyan-300">STORAGE</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-xs sm:max-w-2xl text-lg md:text-xl text-marine-50 font-light leading-relaxed mb-10 md:mb-12 text-center drop-shadow-md opacity-90"
                >
                    Secure Storage & Professional Extraction on the Shores of Jervis Bay.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto items-center px-4 sm:px-0"
                >
                    <a
                        href="#contact"
                        className="group relative flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-bold text-marine-900 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        <span className="relative z-10 flex items-center">
                            Get a Quote
                            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <a
                        href="#services"
                        className="group flex w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:min-w-[160px]"
                    >
                        Our Services
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
