import { motion } from 'framer-motion'

export default function PresentationNav({ next, label = 'Próxima seção' }) {
  const goTo = () => document.getElementById(next)?.scrollIntoView({ behavior: 'smooth' })
  return <motion.button whileHover={{ y: 3 }} whileTap={{ scale: .98 }} onClick={goTo} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full border border-blue-400/20 bg-blue-950/30 px-4 text-xs font-medium uppercase tracking-[.14em] text-blue-200 transition-colors active:bg-blue-900/50 sm:mt-8 sm:border-0 sm:bg-transparent sm:px-0 sm:tracking-[.18em] sm:hover:text-white">
    {label}<span className="grid h-8 w-8 place-items-center rounded-full border border-blue-400/30 bg-blue-950/50 sm:h-9 sm:w-9"><svg className="h-4 w-4 stroke-current" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
  </motion.button>
}
