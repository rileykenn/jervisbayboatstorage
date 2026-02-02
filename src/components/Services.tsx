"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Services() {
    const featuredServices = servicesData.filter((s) => s.featured);
    const otherServices = servicesData.filter((s) => !s.featured);

    return (
        <section id="services" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-marine-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-lg text-marine-600">Professional marine services for Jervis Bay and the South Coast.</p>
                </motion.div>

                {/* Featured - Side by Side on Desktop */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mb-20">
                    {featuredServices.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-50 shadow-xl border border-slate-100 hover:shadow-2xl hover:shadow-marine-900/10 transition-all duration-300"
                        >
                            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-marine-950/90 via-marine-900/40 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 ml-0">{service.title}</h3>
                                    <p className="text-marine-100 mb-4 line-clamp-3 md:line-clamp-none">{service.description}</p>
                                    <a href="#contact" className="inline-flex items-center text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                        Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-marine-100"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-3 text-base font-semibold leading-6 text-marine-900">Additional Services</span>
                    </div>
                </div>

                {/* Standard Items */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex flex-col overflow-hidden rounded-xl bg-slate-50 border border-slate-100 hover:border-marine-200 hover:bg-white transition-all hover:shadow-lg"
                        >
                            <div className="relative h-48 w-full mb-0 rounded-t-xl overflow-hidden bg-slate-200">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-marine-900 mb-3">{service.title}</h3>
                                <p className="text-marine-600 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
