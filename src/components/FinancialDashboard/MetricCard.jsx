import { motion } from 'framer-motion'

const icons = { revenue: 'M4 18V9m5 9V5m5 13v-7m5 7V3', costs: 'M5 6h14M8 6V4h8v2m1 0-1 14H8L7 6', profit: 'm4 16 6-6 4 4 6-7m0 0h-5m5 0v5', growth: 'M5 17 12 10l4 4 4-7', ticket: 'M4 7h16v10H4zM8 11h4', services: 'M12 3v18m6-15H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6' }
export default function MetricCard({ icon, label, value, note }) {
  return <motion.article variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} whileTap={{ scale: .99 }} whileHover={{ y: -4, scale: 1.015 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 active:border-blue-400/40 sm:duration-500 sm:hover:border-blue-400/40 sm:hover:shadow-[0_0_38px_rgba(30,64,175,.22)]"><svg className="h-5 w-5 stroke-blue-300" viewBox="0 0 24 24" fill="none"><path d={icons[icon]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="mt-3 block text-xs text-slate-400">{label}</span><strong className="mt-1 block font-display text-xl text-white sm:text-2xl">{value}</strong><small className="mt-1 block text-[11px] text-blue-300">{note}</small></motion.article>
}
