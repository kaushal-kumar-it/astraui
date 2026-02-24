import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">Welcome to Tailwind UI</h1>
        <p className="text-center mt-4 text-lg text-muted-foreground">
          Build beautiful, responsive websites with ease.
        </p>
      </main>
    </div>
  );
}