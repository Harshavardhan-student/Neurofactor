import React, { useEffect, useRef } from 'react'
import '../styles/aboutus.css'

export default function AboutUs() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('in-view')
            obs.unobserve(node)
          }
        })
      },
      { threshold: 0.15 }
    )

    obs.observe(node)

    return () => obs.disconnect()
  }, [])

  
  
}
