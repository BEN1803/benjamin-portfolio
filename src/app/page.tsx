import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import TechnicalReveal from "@/components/TechnicalReveal";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="top" className="bg-[#050505] text-[#f5f7fa]">
      <Navbar />

      <Hero />

      <IntroSection />

      <Projects />

      <TechnicalReveal />

      <Skills />
    </main>
  );
}