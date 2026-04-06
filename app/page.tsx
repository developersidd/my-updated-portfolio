import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar />

      <Hero />

      <About />

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
