import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jervis Bay Boat Storage | Secure Storage & Vessel Extraction",
    description: "Premier boat storage and vessel extraction services in Jervis Bay. Secure hardstand facility, shipwright services, and 24/7 access.",
    keywords: "Jervis Bay Boat Storage, Boat Storage Huskisson, Vessel Extraction Jervis Bay, Boat Pull Out Service",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-marine-100 selection:text-marine-900 font-sans`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
