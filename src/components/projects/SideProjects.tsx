import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/portfolio"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { TechTag } from "@/components/ui/TechTag"

export function SideProjects({ projects }: { projects: Project[] }) { return <div className="grid gap-4 md:grid-cols-2">{projects.map((project) => <SpotlightCard key={project.id} className="p-6"><div className="flex items-center justify-between"><p className="eyebrow">{project.label}</p><ArrowUpRight size={16} className="text-zinc-600" /></div><h3 className="mt-8 text-lg font-medium text-white">{project.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div></SpotlightCard>)}</div> }
