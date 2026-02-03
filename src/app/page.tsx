import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden">
            <Hero />
            <About />
            <Services />
            <Contact />
            <footer className="bg-marine-950 py-12 text-center text-marine-400 border-t border-marine-900">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Jervis Bay Boat Storage. <br className="md:hidden" /> All rights reserved.
                        <span className="hidden md:inline"> | </span>
                        <br className="md:hidden" />
                        <span className="opacity-80">Designed by <a href="https://rileytechstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-marine-400/30 underline-offset-4">Riley Tech Studio</a></span>
                    </p>
                </div>
            </footer>
        </main>
    );
}
