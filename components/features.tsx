"use client";

import React from "react";
import { Code2, Zap, Palette, Lock, Smartphone, Sparkles } from "lucide-react";
export function CometCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.6)]">
      <div className="absolute inset-0 bg-zinc-800/60 rounded-xl" />

      <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#3b82f6_100%)] opacity-100" />

      <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#3b82f6_100%)] blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-[1px] z-10 rounded-[10px] bg-zinc-950 transition-colors duration-300" />

      <div className="absolute inset-[1px] z-10 rounded-[10px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-20 flex h-full w-full flex-col p-8">
        <div className="relative z-20 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Code2,
    title: "Copy & Paste Ready",
    description: "Complete source code for every component. Copy to your project and customize instantly.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance. Zero runtime overhead with pure Tailwind CSS.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Change colors, spacing, and styles. Complete design system flexibility included.",
  },
  {
    icon: Lock,
    title: "Production Ready",
    description: "Battle-tested components used in production by thousands of developers.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach. Works perfectly on all screen sizes and devices.",
  },
  {
    icon: Sparkles,
    title: "Modern Stack",
    description: "Built with React 19, TypeScript, and the latest web standards.",
  },
];

export default function Features() {
  return (
    <section className="relative min-h-screen bg-transparent py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
            Everything you need to build faster
          </h2>
          <p className="text-lg text-zinc-400 text-balance">
            Comprehensive features designed for modern development. From responsive layouts to complex interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <CometCard key={index}>
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-zinc-900 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </CometCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}