import { Award, Database, Smartphone } from "lucide-react"
import { portfolio } from "@/data/portfolio"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { TechTag } from "@/components/ui/TechTag"

export function SkillsBento() {
  return <section id="skills" className="section-rule py-24"><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow mb-3">02 / toolkit</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tools I work with.</h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-zinc-500 sm:block">A focused set of technologies grounded in real projects and practical delivery.</p></div>
    <div className="grid gap-4 md:grid-cols-2"><SpotlightCard className="p-6 sm:p-8"><Database className="mb-12 text-emerald" size={22} /><h3 className="text-lg font-medium">{portfolio.skills[0].title}</h3><div className="mt-5 flex flex-wrap gap-2">{portfolio.skills[0].items.map((skill) => <TechTag key={skill}>{skill}</TechTag>)}</div></SpotlightCard><SpotlightCard className="p-6 sm:p-8"><Smartphone className="mb-12 text-emerald" size={22} /><h3 className="text-lg font-medium">{portfolio.skills[1].title}</h3><div className="mt-5 flex flex-wrap gap-2">{portfolio.skills[1].items.map((skill) => <TechTag key={skill}>{skill}</TechTag>)}</div></SpotlightCard><SpotlightCard className="p-6 sm:p-8 md:col-span-2"><Award className="mb-8 text-emerald" size={22} /><p className="eyebrow mb-3">Certification</p><div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">{portfolio.certifications.map((item) => <p key={item} className="border-l border-line pl-4">{item}</p>)}</div></SpotlightCard></div>
  </section>
}
