import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main id="top" className="bg-[#050505] text-[#f5f7fa]">
      <Navbar />

      <Hero />

      <IntroSection />

      <section
        id="work"
        className="flex min-h-screen items-center justify-center bg-[#050505]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
          Work section coming next
        </p>
      </section>
    </main>
  );
}