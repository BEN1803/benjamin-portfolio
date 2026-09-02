import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#050505] text-[#f5f7fa]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[#2f7bff]">
            Portfolio / 01
          </p>

          <h1 className="mt-6 font-display text-6xl font-bold tracking-tight md:text-8xl">
            Benjamin Florian
          </h1>

          <p className="mt-6 font-body text-lg text-[#8b929e]">
            Software Developer
          </p>
        </div>
      </section>
    </main>
  );
}