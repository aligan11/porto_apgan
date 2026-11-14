import { Github, Linkedin } from "lucide-react"
import { portfolio } from "@/data/portfolio"

export function Navbar() {
  return <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
    <a href="#top" className="font-mono text-sm font-bold tracking-tight"><span className="text-emerald">A/</span> Afghan</a>
    <div className="hidden items-center gap-7 text-xs text-zinc-400 sm:flex">
      <a className="hover:text-white" href="#projects">Projects</a><a className="hover:text-white" href="#skills">Skills</a><a className="hover:text-white" href="#experience">Experience</a><a className="hover:text-white" href="#contact">Contact</a>
      <a href={portfolio.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
    </div>
  </nav>
}
