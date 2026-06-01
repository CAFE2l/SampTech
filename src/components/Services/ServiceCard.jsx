import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon }) {
  return <motion.article variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -4, scale: 1.01 }} className="glass-card group rounded-2xl p-4 transition-all duration-500 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(30,64,175,.2)]">
    <svg className="h-7 w-7 stroke-blue-400 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" aria-hidden="true">{icon}</svg>
    <h3 className="mt-4 font-display text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-5 text-slate-300">{description}</p>
  </motion.article>
}
