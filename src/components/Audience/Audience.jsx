import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

const audience = [['01', 'Problemas urgentes', 'Quem precisa voltar a trabalhar, estudar ou se comunicar rapidamente.'], ['02', 'Melhor desempenho', 'Quem quer um equipamento mais rápido e confiável sem trocar tudo.'], ['03', 'Orientação técnica', 'Quem busca uma decisão segura antes de investir em peças ou montagem.']]
export default function Audience() {
  return <section id="publico" className="slide-shell bg-[#030712]"><div className="section-inner"><p className="slide-number">04 / 09</p><p className="eyebrow">Público-alvo</p><h2 className="slide-title">Para quem precisa de tecnologia funcionando.</h2><motion.div className="mt-10 grid gap-4 lg:grid-cols-3">{audience.map(([number, title, text], index) => <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="glass-card rounded-2xl p-5" key={number}><b className="font-mono text-3xl text-blue-700">{number}</b><h3 className="mt-4 font-display text-xl font-bold">{title}</h3><p className="mt-2 text-base text-slate-300">{text}</p></motion.article>)}</motion.div><PresentationNav next="servicos" /></div></section>
}
