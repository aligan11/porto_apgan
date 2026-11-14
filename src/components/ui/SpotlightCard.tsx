"use client"

import { useState } from "react"
import type { ReactNode } from "react"

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [point, setPoint] = useState({ x: 50, y: 50 })
  return <div className={`group relative overflow-hidden rounded-sm border border-line bg-panel ${className}`} onPointerMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setPoint({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
  }}>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(360px circle at ${point.x}% ${point.y}%, rgba(16,185,129,.09), transparent 62%)` }} />
    <div className="relative">{children}</div>
  </div>
}
