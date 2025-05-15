"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseInViewOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
}

export function useInView({
  root = null,
  rootMargin = "0px",
  threshold = 0,
  triggerOnce = false,
}: UseInViewOptions = {}): [RefObject<Element>, boolean] {
  const [ref, setRef] = useState<Element | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting
        setIsInView(isElementInView)

        if (isElementInView && triggerOnce) {
          observer.unobserve(ref)
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(ref)

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, root, rootMargin, threshold, triggerOnce])

  return [setRef as unknown as RefObject<Element>, isInView]
}
