import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import TechnicalReveal from "@/components/TechnicalReveal";
import Skills from "@/components/Skills";
import BuildProcess from "@/components/BuildProcess";
import Terminal from "@/components/Terminal";
import About from "@/components/About";
import DeveloperStats from "@/components/DeveloperStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main id="top" className="bg-[#050505] text-[#f5f7fa]">
      <CustomCursor />

      <Navbar />

      <Hero />

      <IntroSection />

      <Projects />

      <TechnicalReveal />

      <Skills />

      <BuildProcess /> 

      <Terminal />

      <About />

      <DeveloperStats />

      <Contact />

      <Footer />

    </main>
  );
}