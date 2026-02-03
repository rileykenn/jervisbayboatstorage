"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, Facebook, MapPin, Send } from "lucide-react";
import { servicesData } from "@/data/services";
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            toast.success("Enquiry received! We'll be in touch shortly.", {
                description: "Thanks for choosing Jervis Bay Boat Storage."
            });
            setFormData({ name: "", contact: "", service: "", message: "" });
        } catch (error) {
            console.error('Submission error:', error);
            toast.error("Failed to send enquiry.", {
                description: "Please try again or call us directly on 0401 404 239."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative py-24 bg-marine-950 text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/media/hymes.webp"
                    alt="Jervis Bay Background"
                    fill
                    className="object-cover object-center blur-[2px] scale-105"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:text-center lg:text-left"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Get In Touch</h2>
                    <p className="text-marine-100 text-lg leading-relaxed max-w-2xl md:mx-auto lg:mx-0">
                        Ready to store your boat or need a vessel extracted? Contact our friendly team today for a quote
                        or to discuss your requirements.
                    </p>
                </motion.div>

                <div className="flex flex-col-reverse gap-16 lg:grid lg:grid-cols-2">

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >

                        <div className="space-y-8 mb-12">
                            {/* Phone - Click to Call */}
                            <a href="tel:0401404239" className="flex items-start group transition-opacity hover:opacity-80">
                                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg border border-white/10 group-hover:bg-white/20 transition-colors">
                                    <Phone className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                                    <p className="text-marine-200 mt-1 decoration-marine-400 group-hover:underline underline-offset-4 decoration-2">0401 404 239</p>
                                </div>
                            </a>

                            {/* Email - Click to Copy */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("jervisbayboatstorage@gmail.com");
                                    toast.success("Email copied to clipboard!", {
                                        description: "You can now paste it into your email client."
                                    });
                                }}
                                className="flex items-start group text-left w-full transition-opacity hover:opacity-80"
                            >
                                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg border border-white/10 group-hover:bg-white/20 transition-colors">
                                    <Mail className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <p className="text-marine-200 mt-1 decoration-marine-400 group-hover:underline underline-offset-4 decoration-2">jervisbayboatstorage@gmail.com</p>
                                </div>
                            </button>

                            {/* Facebook - External Link */}
                            <a
                                href="https://facebook.com/jervisbayboatstorage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group transition-opacity hover:opacity-80"
                            >
                                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg border border-white/10 group-hover:bg-white/20 transition-colors">
                                    <Facebook className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">Social</h3>
                                    <p className="text-marine-200 mt-1 decoration-marine-400 group-hover:underline underline-offset-4 decoration-2">@jervisbayboatstorage</p>
                                </div>
                            </a>

                            {/* Address - Click to Copy */}
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText("19 Erina Road, Huskisson NSW 2540");
                                    toast.success("Address copied to clipboard!", {
                                        description: "You can paste it into your preferred maps app."
                                    });
                                }}
                                className="flex items-start group text-left w-full transition-opacity hover:opacity-80"
                            >
                                <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg border border-white/10 group-hover:bg-white/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-white">Location</h3>
                                    <p className="text-marine-200 mt-1 decoration-marine-400 group-hover:underline underline-offset-4 decoration-2">19 Erina Road, Huskisson NSW 2540</p>
                                </div>
                            </button>
                        </div>

                        {/* Google Map Embed */}
                        <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.490795400977!2d150.6655519766986!3d-35.045610677592476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b746c3efd858343%3A0x6bdf3b5890c56792!2s19%20Erina%20Rd%2C%20Huskisson%20NSW%202540!5e0!3m2!1sen!2sau!4v1706600000000!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-marine-900"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-marine-950">Send an Enquiry</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-marine-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-marine-900 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 focus:outline-none transition-all"
                                    placeholder="John Skipper"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-semibold text-marine-700 mb-2">Phone or Email</label>
                                <input
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    required
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-marine-900 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 focus:outline-none transition-all"
                                    placeholder="0400 000 000"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-marine-700 mb-2">Service Required</label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-marine-900 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 focus:outline-none appearance-none transition-all"
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        {servicesData.map((s) => (
                                            <option key={s.id} value={s.title}>{s.title}</option>
                                        ))}
                                        <option value="General Enquiry">General Enquiry</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-marine-500">
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-marine-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-marine-900 focus:border-cyan-500 focus:ring-cyan-500 focus:ring-2 focus:outline-none transition-all resize-none"
                                    placeholder="Tell us about your vessel..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full rounded-xl bg-marine-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-marine-600/20 hover:bg-marine-500 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">Sending...</span>
                                ) : (
                                    <span className="flex items-center">Send Enquiry <Send className="ml-2 w-5 h-5" /></span>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
