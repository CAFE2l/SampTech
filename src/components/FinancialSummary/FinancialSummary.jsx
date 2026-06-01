import { motion } from 'framer-motion'
import { expenses } from '../FinancialDashboard/data/expenses'
import { income, previousMonthProfit } from '../FinancialDashboard/data/income'
import PresentationNav from '../PresentationNav/PresentationNav'

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
export default function FinancialSummary() {
  const costs = expenses.reduce((sum, item) => sum + item.value, 0)
  const revenue = income.reduce((sum, item) => sum + item.value, 0)
  const profit = revenue - costs
  const growth = ((profit - previousMonthProfit) / previousMonthProfit) * 100
  const metrics = [['Entradas', revenue], ['Custos', costs], ['Lucro estimado', profit], ['Evolução mensal', `+${growth.toFixed(1).replace('.', ',')}%`]]
  return <section id="financeiro" className="slide-shell bg-[#030712]"><div className="section-inner"><p className="slide-number">08 / 09</p><p className="eyebrow">Gestão e financeiro</p><h2 className="slide-title">Uma operação planejada para crescer.</h2><p className="slide-copy">Projeção mensal ilustrativa para apresentar a viabilidade inicial da Samptech.</p><motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .1 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{metrics.map(([label, value]) => <motion.article variants={{ hidden: { opacity: 0, scale: .96 }, show: { opacity: 1, scale: 1 } }} className="glass-card rounded-2xl p-5" key={label}><span className="text-sm text-slate-400">{label}</span><strong className="mt-3 block font-display text-3xl text-blue-300">{typeof value === 'number' ? money(value) : value}</strong></motion.article>)}</motion.div><div className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-3"><span className="glass-card rounded-xl p-4">Custos fixos controlados</span><span className="glass-card rounded-xl p-4">Receitas por serviços variados</span><span className="glass-card rounded-xl p-4">Reinvestimento no crescimento</span></div><PresentationNav next="contato" /></div></section>
}
