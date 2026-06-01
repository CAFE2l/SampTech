import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

const values = [
  ['Transparência', 'Diagnóstico claro e orçamento aprovado.', 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  ['Qualidade', 'Soluções técnicas feitas para durar.', 'M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-3Zm-3 9 2 2 4-4'],
  ['Agilidade', 'Equipamentos funcionando em menos tempo.', 'm13 2-8 12h7l-1 8 8-12h-7l1-8Z'],
]
export default function About() {
  return <section id="sobre" className="slide-shell border-t-0 bg-[#030712]"><div className="section-inner">
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div><p className="slide-number">02 / 09</p><p className="eyebrow">Sobre a Samptech</p><h2 className="slide-title">Tecnologia como aliada, não como estresse.</h2><p className="slide-copy">Soluções práticas e acessíveis em assistência técnica para computadores, notebooks e celulares.</p><p className="mt-6 border-l-2 border-blue-500 pl-5 text-base text-slate-300">Cajuru, Curitiba - PR</p><PresentationNav next="problema" /></div>
      <div className="grid gap-3">{values.map(([title, text, path], index) => <motion.article initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="glass-card rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[.07]" key={title}><svg className="h-6 w-6 stroke-blue-400" viewBox="0 0 24 24" fill="none"><path d={path} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><h3 className="mt-4 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></motion.article>)}</div>
    </motion.div>
  </div></section>
}
