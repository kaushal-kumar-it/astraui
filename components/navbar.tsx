"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Support", href: "/formsfree" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-border/30 bg-background/80 backdrop-blur-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        <Link href="/">
          <motion.div
            whileHover={{ color: "#9f56ef", scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 font-bold text-xl text-foreground cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-accent-foreground font-bold"
            >
              T
            </motion.div>

            <span>Tailwind UI</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ color: "#9f56ef" }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground font-medium text-sm"
                >
                  {link.label}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#9f56ef",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold"
          >
            Get Started
          </motion.button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border/30 md:hidden"
            >
              <div className="p-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div
                      whileHover={{ color: "#9f56ef" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-muted-foreground font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ backgroundColor: "#9f56ef" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}