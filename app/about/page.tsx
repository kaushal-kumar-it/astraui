import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-4 py-20 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <Link href="/components" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Explore Components →
          </Link>
        </div>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 md:p-8">
          <p className="mb-3 inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs tracking-widest uppercase text-zinc-400">
            About
          </p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Hi, I’m Kaushal Kumar</h1>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
            I’m building Neel UI to make beautiful interface components practical and easy to ship. The goal is simple:
            copy-paste friendly React blocks that are modern, customizable, and production-focused.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/kaushal-kumar-it"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/kaushal-kumar-it"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white transition"
            >
              LinkedIn
            </Link>
            <Link
              href="/support"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
