"use client"

import { MapPin, ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"
import { portfolio } from "@/data/portfolio"
import { ContactActions } from "./ContactActions"

export function Hero() {
  return <section className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.35fr_.65fr] lg:py-28">
    <div><motion.div initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .7 }}>
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-emerald"><span className="h-1.5 w-1.5 rounded-full bg-emerald" />{portfolio.profile.status}</div>
      <p className="eyebrow mb-5">Hello, I&apos;m</p><h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white sm:text-7xl lg:text-[clamp(4rem,8vw,7.5rem)]">Afghan<br /><span className="text-zinc-500">Almufqi.</span></h1>
      <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">{portfolio.profile.intro}</p><div className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-500"><MapPin size={14} className="text-emerald" />{portfolio.profile.location}</div><div className="mt-9"><ContactActions /></div>
    </motion.div></div>
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .7 }} className="hidden justify-end lg:flex"><div className="max-w-[220px] border-l border-emerald pl-5"><p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">Currently focused on</p><p className="mt-4 text-sm leading-6 text-zinc-300">Building useful web and mobile products with clear data flows and maintainable interfaces.</p><a href="#projects" className="mt-7 inline-flex items-center gap-2 font-mono text-xs text-emerald">View selected work <ArrowDownRight size={14} /></a></div></motion.div>
  </section>
}
