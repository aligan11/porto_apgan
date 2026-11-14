"use client"

import { MapPin, ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { portfolio } from "@/data/portfolio"
import { ContactActions } from "./ContactActions"

export function Hero() {
  const phrases = ["Hello, I'm Afghan Almufqi Yournawan", "Web & Mobile Software Developer", "Laravel & Flutter Specialist"]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    const typing = window.setTimeout(() => {
      if (visible < phrase.length) setVisible((current) => current + 1)
      else { setVisible(0); setPhraseIndex((current) => (current + 1) % phrases.length) }
    }, visible < phrase.length ? 62 : 1700)
    return () => window.clearTimeout(typing)
  }, [phraseIndex, visible])

  return <section className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
    <div><motion.div initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: .7 }}>
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] text-emerald"><span className="h-1.5 w-1.5 rounded-full bg-emerald" />{portfolio.profile.status}</div>
      <div className="mb-5 flex min-h-10 items-center font-mono text-xs text-emerald sm:text-sm"><span className="mr-2 text-zinc-600">&gt;_</span>{phrases[phraseIndex].slice(0, visible)}<span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-emerald" /></div><h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white sm:text-7xl lg:text-[clamp(4rem,7vw,6.8rem)]">Afghan<br /><span className="text-zinc-500">Almufqi.</span></h1>
      <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">{portfolio.profile.intro}</p><div className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-500"><MapPin size={14} className="text-emerald" />{portfolio.profile.location}</div><div className="mt-9"><ContactActions /></div>
    </motion.div></div>
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .7 }} className="relative mx-auto w-full max-w-[390px] lg:ml-auto"><div className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-panel"><Image src="/profile.jpg" alt="Afghan Almufqi Yournawan" fill priority sizes="(max-width: 1024px) 90vw, 390px" className="object-cover grayscale transition duration-700 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><div><p className="font-mono text-[10px] uppercase tracking-widest text-emerald">Based in</p><p className="mt-1 text-sm text-white">Bangka Belitung, ID</p></div><a href="#projects" className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-emerald">Work <ArrowDownRight size={14} /></a></div></div><div className="absolute -bottom-3 -left-3 -z-10 h-20 w-20 border-b border-l border-emerald/60" /></motion.div>
  </section>
}
