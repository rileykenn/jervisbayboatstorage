"use client";

import { motion } from "framer-motion";
import { Anchor, ShieldCheck, Clock } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: Anchor,
            title: "20 Years Experience",
            description: "Facilitating everything from the smallest dinghy to the largest yacht with expert care."
        },
        {
            icon: ShieldCheck,
            title: "Secure Facility",
            description: "Long and short term storage options in our secure hardstand facility."
        },
        {
            icon: Clock,
            title: "24/7 Access",
            description: "Unlimited access to your vessel whenever you need it on our secure site."
        }
    ];

    return (
        <section className="relative py-24 bg-marine-50 overflow-hidden">
            {/* Decorative Coastal Blurs */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-marine-200 to-transparent" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-marine-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sand-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <span className="text-marine-600 font-semibold tracking-wide uppercase text-sm">About Us</span>
                        <h2 className="text-3xl font-bold tracking-tight text-marine-900 sm:text-4xl mt-2 mb-6">
                            Affordable Alternative on the South Coast
                        </h2>
                        <div className="space-y-4 text-marine-700 text-lg leading-relaxed">
                            <p>
                                Jervis Bay Boat Storage has facilitated the smallest dinghy to the largest yacht for 20 years.
                                We provide an affordable alternative to slipways with no waiting times by extracting vessels
                                to our secure facility.
                            </p>
                            <p>
                                Long and short term storage available. Unlimited access 24/7. Affordable alternative outside
                                Sydney metro area. We have onsite shipwright services and marine survey capabilities.
                            </p>
                            <p className="font-semibold text-marine-900">
                                Call our friendly staff for a quote today.
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {/* This layout block is hidden on mobile but here specifically for structure */}
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 gap-5">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/50"
                                >
                                    <div className="flex-shrink-0 p-3 bg-marine-100 rounded-lg mr-4 text-marine-600">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-marine-900">{feature.title}</h3>
                                        <p className="text-sm text-marine-600 mt-1">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
