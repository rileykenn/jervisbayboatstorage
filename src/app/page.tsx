import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <Contact />
            <footer className="bg-marine-950 py-12 text-center text-marine-400 border-t border-marine-900">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Jervis Bay Boat Storage. <br className="md:hidden" /> All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
