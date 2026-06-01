import { motion } from 'framer-motion'

export default function PresentationNav({ next, label = 'Próxima seção' }) {
  const goTo = () => document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
  return <motion.button whileHover={{ y: 3 }} onClick={goTo} className="mt-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[.18em] text-blue-300 transition-colors hover:text-white">
    {label}<span className="grid h-9 w-9 place-items-center rounded-full border border-blue-400/30 bg-blue-950/50"><svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
  </motion.button>
}
