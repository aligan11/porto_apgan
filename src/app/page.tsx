import { Navbar } from "@/components/layout/Navbar"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { Hero } from "@/components/hero/Hero"
import { SkillsBento } from "@/components/skills/SkillsBento"
import { FeaturedProjects } from "@/components/projects/FeaturedProjects"
import { SideProjects } from "@/components/projects/SideProjects"
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline"
import { Footer } from "@/components/Footer"
import { portfolio } from "@/data/portfolio"

export default function Home() {
  const featured = portfolio.projects.filter((project) => project.featured)
  const side = portfolio.projects.filter((project) => !project.featured)
  return <><ScrollProgress /><div id="top" className="site-canvas relative isolate overflow-hidden"><div className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[760px]" /><div className="ambient-orb ambient-orb--hero" /><div className="ambient-orb ambient-orb--left" /><div className="ambient-orb ambient-orb--projects" /><div className="ambient-orb ambient-orb--footer" /><div className="content-layer mx-auto max-w-6xl px-6 lg:px-8"><Navbar /><main><Hero /><section id="projects" className="section-rule py-24"><div className="mb-10"><p className="eyebrow mb-3">01 / selected work</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects with a purpose.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">A selection of web and mobile applications built around real workflows, structured data, and clear outcomes.</p></div><FeaturedProjects projects={featured} /><div className="mt-20"><div className="mb-7 flex items-center gap-4"><p className="eyebrow">Side projects / freelance</p><div className="h-px flex-1 bg-line" /></div><SideProjects projects={side} /></div></section><SkillsBento /><ExperienceTimeline /></main><Footer /></div></div></>
}
