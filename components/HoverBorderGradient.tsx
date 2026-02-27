"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ReactNode } from "react"

interface HoverBorderGradientProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  href?: string
  onClick?: () => void
}

export function HoverBorderGradient({
  children,
  className = "",
  containerClassName = "",
  href,
  onClick,
}: HoverBorderGradientProps) {
  const content = (
    <div
      onClick={onClick}
      className={`relative z-10 px-6 py-3 rounded-full bg-black text-white 
      transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </div>
  )

  return (
    <motion.div
      whileHover="hover"
      className={`relative inline-block p-[2px] rounded-full ${containerClassName}`}
    >
      <motion.div
        variants={{
          hover: {
            backgroundPosition: "200% center",
          },
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r 
        from-purple-500 via-pink-500 to-blue-500 
        bg-[length:200%_200%]"
      />

      {href ? (
        <Link href={href} className="relative z-10 block">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  )
}