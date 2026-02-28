'use client'

import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/HoverBorderGradient"
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 0.4;

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
};

export default function Hero() {
  return (
    <motion.section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">

      <>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-gradient-to-t from-secondary/20 to-transparent rounded-full blur-3xl opacity-30" />
      </>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">

        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ 
    opacity: 1, 
    y: [0, -10, 0]
  }}
  transition={{ 
    opacity: { duration: 0.5, delay: 0 },
    y: {
      duration: 1.5,
      repeat: Infinity,
      
    }
  }}
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium"
>
  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
  <span className="text-muted-foreground">
    New: 150+ Premium Components
  </span>
</motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
          Build with Tailwind UI

          <br />

          <span className="text-[#9f56ef]">
            <ScrambleText text="at lightning speed" />
          </span>

        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Production-ready Tailwind CSS components designed for modern SaaS and applications.
          Copy, paste, and customize—no dependencies needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="#components"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300 group"
          >
            Explore Components
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <HoverBorderGradient onClick={() => alert("Button Clicked!")}>
        <span>Watch Demo</span>
      </HoverBorderGradient>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-12 sm:pt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-accent">150+</div>
            <p className="text-sm text-muted-foreground">Premium Components</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-accent">10k+</div>
            <p className="text-sm text-muted-foreground">Developers Trusted</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-accent">99.9%</div>
            <p className="text-sm text-muted-foreground">Performance Score</p>
          </div>
        </div>

      </div>
    </motion.section>
  )
}