"use client"

import { Check, Copy, ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { portfolio } from "@/data/portfolio"

export function ContactActions() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() { await navigator.clipboard.writeText(portfolio.contact.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
  return <div className="flex flex-wrap items-center gap-3">
    <button onClick={copyEmail} className="inline-flex items-center gap-2 border border-emerald bg-emerald px-4 py-2.5 text-xs font-semibold text-ink transition hover:bg-transparent hover:text-emerald">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied!" : "Copy email"}</button>
    <a className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-xs text-zinc-300 transition hover:border-zinc-500 hover:text-white" href={`mailto:${portfolio.contact.email}`}><Mail size={14} /> Email me</a>
    <a className="inline-flex items-center gap-2 p-2 text-zinc-500 hover:text-white" href={portfolio.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Phone size={16} /></a>
    <a className="inline-flex items-center gap-2 p-2 text-zinc-500 hover:text-white" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
    <a className="inline-flex items-center gap-2 p-2 text-zinc-500 hover:text-white" href={portfolio.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
    <ExternalLink size={14} className="hidden text-zinc-700" />
  </div>
}
