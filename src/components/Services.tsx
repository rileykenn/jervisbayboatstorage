"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
    const featuredServices = servicesData.filter((s) => s.featured);
    const otherServices = servicesData.filter((s) => !s.featured);

    return (
        <section id="services">
            {/* Featured Section */}
            <div className="relative py-24 overflow-hidden">
                {/* Premium Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-marine-50 via-white to-marine-50/30" />
                <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-marine-900 sm:text-4xl">Our Services</h2>
                        <p className="mt-4 text-lg text-marine-600">Professional marine services for Jervis Bay and the South Coast.</p>
                    </motion.div>

                    {/* Featured - Side by Side on Desktop */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                        {featuredServices.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-marine-900/10 hover:shadow-3xl hover:shadow-marine-900/20 transition-all duration-300 ring-1 ring-marine-900/5"
                            >
                                <div className="relative h-72 md:h-96 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-marine-950 via-marine-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 ml-0">{service.title}</h3>
                                        <p className="text-marine-100 mb-6 text-base md:text-lg line-clamp-3 md:line-clamp-none opacity-90">{service.description}</p>
                                        <a href="#contact" className="inline-flex items-center text-sm font-bold text-cyan-300 group-hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20">
                                            Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Services Section - Texture & Depth */}
            <div className="relative py-24 bg-stone-50 border-t border-marine-900/5 overflow-hidden">
                {/* Texture Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />

                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-marine-100/10 pointer-events-none" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="relative mb-12 text-center">
                        <h3 className="text-2xl font-bold text-marine-900 mb-2">More Services</h3>
                        <div className="w-24 h-1 bg-marine-200 mx-auto rounded-full" />
                    </div>

                    {/* Standard Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {otherServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col md:flex-row overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-marine-200 transition-all shadow-sm hover:shadow-xl hover:shadow-marine-900/5 hover:-translate-y-1 duration-300"
                            >
                                <div className="relative h-48 md:h-auto md:w-2/5 shrink-0 overflow-hidden bg-slate-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-marine-900/0 group-hover:bg-marine-900/5 transition-colors duration-300" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-center relative">
                                    <h3 className="text-xl font-bold text-marine-900 mb-2 group-hover:text-marine-600 transition-colors">{service.title}</h3>
                                    <p className="text-marine-600 md:text-marine-700 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
