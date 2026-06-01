import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

const problems = [['Lentidão', 'Equipamentos que atrasam trabalho e estudo.'], ['Falhas urgentes', 'Travamentos, vírus e problemas de inicialização.'], ['Decisão difícil', 'Dúvidas sobre reparo, peças e melhor investimento.']]
export default function Problem() {
  return <section id="problema" className="slide-shell bg-[#020617]"><div className="section-inner"><p className="slide-number">03 / 09</p><p className="eyebrow">Problema</p><h2 className="slide-title">Tecnologia com defeito interrompe a rotina.</h2><p className="slide-copy">A Samptech reduz o estresse técnico com orientação clara e solução objetiva.</p><motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 md:grid-cols-3">{problems.map(([title, text]) => <motion.article variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} className="glass-card rounded-2xl p-5" key={title}><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-2 text-base text-slate-300">{text}</p></motion.article>)}</motion.div><PresentationNav next="publico" /></div></section>
}
