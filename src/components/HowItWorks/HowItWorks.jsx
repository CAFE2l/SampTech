import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

const steps = [
  ['01', 'Primeiro contato', 'Você descreve o problema.'],
  ['02', 'Pré-diagnóstico', 'Entendemos o cenário inicial.'],
  ['03', 'Recebimento', 'Inspecionamos o equipamento.'],
  ['04', 'Orçamento', 'Você aprova antes do serviço.'],
  ['05', 'Execução', 'Realizamos o reparo.'],
  ['06', 'Entrega e suporte', 'Orientamos os próximos cuidados.'],
]
export default function HowItWorks() {
  return <section id="como-funciona" className="slide-shell bg-[#030712]"><div className="section-inner"><p className="slide-number">06 / 09</p><p className="eyebrow">Como funciona</p><h2 className="slide-title">Do primeiro contato à entrega.</h2><motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{steps.map(([number, title, text]) => <motion.article variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }} className="glass-card rounded-2xl p-5" key={number}><b className="font-mono text-3xl text-blue-700">{number}</b><h3 className="mt-4 font-display text-lg font-bold">{title}</h3><p className="mt-2 text-base text-slate-300">{text}</p></motion.article>)}</motion.div><PresentationNav next="diferenciais" /></div></section>
}
