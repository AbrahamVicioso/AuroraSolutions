"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
  x?: number
  once?: boolean
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  threshold?: number
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  y = 0, 
  x = 0,
  once = true,
  className = "",
  direction = "up",
  threshold = 0.1
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Set initial animation values based on direction
  let initialY = y
  let initialX = x
  
  if (!prefersReducedMotion) {
    switch (direction) {
      case "up":
        initialY = 30
        break
      case "down":
        initialY = -30
        break
      case "left":
        initialX = 30
        break
      case "right":
        initialX = -30
        break
      case "none":
        initialY = 0
        initialX = 0
        break
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin: "0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: initialY, x: initialX }}
      transition={{ 
        duration, 
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom ease curve for smoother animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
