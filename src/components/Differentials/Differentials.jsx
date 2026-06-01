import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

const items = [
  ['Transparência', 'Orçamento aprovado antes da execução.'],
  ['Qualidade', 'Boas práticas em cada serviço.'],
  ['Agilidade', 'Prazos claros e atendimento organizado.'],
  ['Foco no cliente', 'Solução adequada à necessidade real.'],
  ['Atendimento humano', 'Explicações simples e diretas.'],
  ['Presença digital', 'Conteúdo educativo e canais acessíveis.'],
]
export default function Differentials() {
  return <section id="diferenciais" className="slide-shell bg-[#020617]"><div className="section-inner"><p className="slide-number">07 / 09</p><p className="eyebrow">Diferenciais</p><h2 className="slide-title">Competência técnica com atendimento próximo.</h2><motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .07 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map(([title, text], index) => <motion.article variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="glass-card rounded-2xl p-5" key={title}><span className="font-mono text-xs text-blue-400">0{index + 1}</span><h3 className="mt-4 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-base text-slate-300">{text}</p></motion.article>)}</motion.div><PresentationNav next="financeiro" /></div></section>
}
