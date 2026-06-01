import { useState } from 'react'
import { motion } from 'framer-motion'
import { financeMonths, chartKeys } from '../FinancialDashboard/data/monthlyFinance'
import MetricCard from '../FinancialDashboard/MetricCard'
import FinanceCharts from '../FinancialDashboard/FinanceCharts'
import FinanceTable from '../FinancialDashboard/FinanceTable'
import MonthDetails from '../FinancialDashboard/MonthDetails'
import PresentationNav from '../PresentationNav/PresentationNav'

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
export default function FinancialSummary() {
  const [monthIndex, setMonthIndex] = useState(5)
  const [activeKeys, setActiveKeys] = useState(chartKeys.map(([key]) => key))
  const [category, setCategory] = useState('Todos')
  const [type, setType] = useState('Todos')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('desc')
  const data = financeMonths[monthIndex]
  const previous = financeMonths[Math.max(monthIndex - 1, 0)]
  const growth = monthIndex ? ((data.profit - previous.profit) / previous.profit) * 100 : 0
  const metrics = [['revenue', 'Receita total', money(data.revenue), `+${Math.round(((data.revenue - previous.revenue) / previous.revenue) * 100)}% vs. anterior`], ['costs', 'Despesas totais', money(data.fixed + data.variable), 'Fixas + variáveis'], ['profit', 'Lucro estimado', money(data.profit), `Margem de ${Math.round((data.profit / data.revenue) * 100)}%`], ['growth', 'Crescimento mensal', `${growth >= 0 ? '+' : ''}${growth.toFixed(1).replace('.', ',')}%`, 'Lucro vs. mês anterior'], ['ticket', 'Ticket médio', money(data.ticket), 'Por atendimento'], ['services', 'Serviços realizados', data.services, 'Ordens concluídas']]
  const toggleKey = (key) => setActiveKeys((keys) => keys.includes(key) ? keys.filter((item) => item !== key) : [...keys, key])
  const filters = [['Todos', null], ['Receitas', 'revenue'], ['Despesas fixas', 'fixed'], ['Despesas variáveis', 'variable'], ['Lucro', 'profit']]
  return <section id="financeiro" className="relative snap-start overflow-hidden border-t border-white/10 bg-[#030712] px-4 py-24 sm:px-6 lg:px-8"><div className="absolute inset-x-[18%] top-20 h-64 rounded-full bg-blue-900/20 blur-[110px]" /><div className="section-inner relative"><p className="slide-number">08 / 09</p><p className="eyebrow">Gestão e financeiro</p><h2 className="slide-title">Gestão financeira interativa</h2><p className="slide-copy">Acompanhe entradas, despesas fixas, despesas variáveis e lucro estimado da Samptech.</p>
    <div className="mt-7 flex flex-wrap gap-2">{financeMonths.map((item, index) => <button className={`rounded-full border px-3 py-1.5 text-xs transition-all ${index === monthIndex ? 'border-blue-400/60 bg-blue-900/60 text-white' : 'border-white/10 bg-white/5 text-slate-400 hover:border-blue-400/30'}`} onClick={() => setMonthIndex(index)} key={item.month}>{item.month}</button>)}</div>
    <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .07 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{metrics.map(([icon, label, value, note]) => <MetricCard icon={icon} label={label} value={value} note={note} key={label} />)}</motion.div>
    <div className="mt-6 flex flex-wrap gap-2">{filters.map(([label, key]) => <button onClick={() => { setCategory(label); setActiveKeys(key ? [key] : chartKeys.map(([item]) => item)) }} className={`rounded-full border px-3 py-1.5 text-xs ${category === label ? 'border-blue-400/60 bg-blue-900/60 text-white' : 'border-white/10 bg-white/5 text-slate-400'}`} key={label}>{label}</button>)}</div>
    <div className="mt-4 grid gap-4 xl:grid-cols-[220px_minmax(0,1fr)_240px]"><div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"><p className="eyebrow">Resumo</p><div className="mt-5 grid gap-3 text-sm text-slate-300"><span>Receita: <b className="block text-lg text-blue-200">{money(data.revenue)}</b></span><span>Fixas: <b className="block text-lg">{money(data.fixed)}</b></span><span>Variáveis: <b className="block text-lg">{money(data.variable)}</b></span><span>Lucro: <b className="block text-lg text-blue-200">{money(data.profit)}</b></span></div></div><FinanceCharts data={financeMonths} activeKeys={activeKeys} toggleKey={toggleKey} selected={data} /><MonthDetails data={data} /></div>
    <FinanceTable rows={data.transactions} type={type} setType={setType} search={search} setSearch={setSearch} sort={sort} setSort={setSort} /><PresentationNav next="contato" />
  </div></section>
}
