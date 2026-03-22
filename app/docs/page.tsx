import Link from 'next/link';

const sections = [
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'installation', label: 'Installation' },
  { id: 'usage', label: 'Use a Component' },
  { id: 'customization', label: 'Customization' },
  { id: 'support', label: 'Support' },
];

const categories = [
  'Navigation',
  'Layout',
  'Text Effects',
  'Buttons',
  'Cards',
  'Backgrounds',
  'Forms',
  'Feedback',
  'Media',
  'Scroll',
  'Data',
  'Cursor',
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pb-20 pt-24 md:px-8 lg:grid-cols-[220px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <Link href="/" className="mb-6 block text-sm text-zinc-400 transition-colors hover:text-white">
            ← Back to Home
          </Link>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Neel UI Docs</p>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-6">
          <section className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 md:p-8">
            <p className="mb-3 inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-widest text-zinc-400">
              Documentation
            </p>
            <h1 className="mb-3 text-3xl font-black tracking-tight md:text-5xl">Build faster with Neel UI</h1>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Neel UI is a modern React component library designed for Next.js applications. Use this guide to set up the
              project, browse components, and ship polished interfaces quickly.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/components"
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Explore Components
              </Link>
              <Link
                href="/support"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white"
              >
                Contact Support
              </Link>
            </div>
          </section>

          <section id="quick-start" className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Quick Start</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-zinc-300 md:text-base">
              <li>Install dependencies and run the local development server.</li>
              <li>Open the component gallery from the Components page.</li>
              <li>Copy the source block for the component you need.</li>
              <li>Paste it into your project and adjust Tailwind classes to match your brand.</li>
            </ol>
          </section>

          <section id="installation" className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Installation</h2>
            <p className="mb-4 text-sm text-zinc-300 md:text-base">
              If you are setting up this repository locally, run the following commands:
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/70 p-4">
              <pre className="text-xs text-zinc-200 md:text-sm">{`git clone <your-repo-url>
cd neel
npm install
npm run dev`}</pre>
            </div>
          </section>

          <section id="usage" className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Use a Component</h2>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <div key={category} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">{category}</h3>
                  <p className="mt-2 text-sm text-zinc-400">Ready-to-use patterns with source code previews.</p>
                </div>
              ))}
            </div>
          </section>

          <section id="customization" className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Customization</h2>
            <ul className="space-y-2 text-sm text-zinc-300 md:text-base">
              <li>Adjust spacing, colors, and typography using Tailwind utility classes.</li>
              <li>Keep components composition-friendly by passing props from parent sections.</li>
              <li>Use animation sparingly for clarity and perceived performance.</li>
            </ul>
          </section>

          <section id="support" className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Support</h2>
            <p className="text-sm text-zinc-300 md:text-base">
              Need help integrating a component or found an issue? Reach out on the support page and include your
              environment details with reproduction steps.
            </p>
            <Link href="/support" className="mt-4 inline-block text-sm font-semibold text-fuchsia-300 hover:text-fuchsia-200">
              Go to Support →
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
