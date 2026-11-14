"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import type { Project } from "@/data/portfolio"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { TechTag } from "@/components/ui/TechTag"
import { ProjectModal } from "./ProjectModal"

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null)
  return <><div className="grid gap-4 lg:grid-cols-2">{projects.map((project, index) => <button key={project.id} className="text-left" onClick={() => setSelected(project)}><SpotlightCard className="flex min-h-[330px] flex-col justify-between p-6 transition-colors hover:border-zinc-600 sm:p-8"><div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-emerald">0{index + 1}</span>{project.badge && <span className="rounded-full border border-emerald/30 px-2.5 py-1 font-mono text-[9px] text-emerald">{project.badge}</span>}</div><div><h3 className="max-w-md text-2xl font-medium tracking-tight text-white sm:text-3xl">{project.title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div><span className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">Read case study <ArrowUpRight size={14} className="text-emerald" /></span></div></SpotlightCard></button>)}</div><ProjectModal project={selected} onClose={() => setSelected(null)} /></>
}
