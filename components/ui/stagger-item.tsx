"use client"

import type React from "react"

import { motion, useReducedMotion } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  // Set initial animation values based on direction
  let y = 0
  let x = 0

  if (!prefersReducedMotion) {
    switch (direction) {
      case "up":
        y = 30
        break
      case "down":
        y = -30
        break
      case "left":
        x = 30
        break
      case "right":
        x = -30
        break
    }
  }

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const item = {
    hidden: { opacity: 0, y, x },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
