"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import type { Project } from "@/data/portfolio"
import { TechTag } from "@/components/ui/TechTag"

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return <AnimatePresence>{project && <motion.div className="fixed inset-0 z-40 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><motion.div role="dialog" aria-modal="true" aria-label={project.title} initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} className="max-h-[90vh] w-full max-w-2xl overflow-auto border border-line bg-panel p-6 sm:p-9"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow mb-4">{project.label}</p><h2 className="max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h2></div><button onClick={onClose} className="text-zinc-500 hover:text-white" aria-label="Close"><X size={20} /></button></div><p className="mt-7 leading-7 text-zinc-400">{project.summary}</p>{project.details && <ul className="mt-7 space-y-3 border-t border-line pt-6 text-sm leading-6 text-zinc-300">{project.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />{detail}</li>)}</ul>}<div className="mt-8 flex flex-wrap gap-2">{project.stack.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div></motion.div></motion.div>}</AnimatePresence>
}
