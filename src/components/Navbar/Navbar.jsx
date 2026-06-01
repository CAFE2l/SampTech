import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../Logo'

const links = [['sobre', 'Sobre'], ['problema', 'Problema'], ['publico', 'Público'], ['servicos', 'Serviços'], ['como-funciona', 'Atendimento'], ['diferenciais', 'Diferenciais'], ['financeiro', 'Gestão'], ['contato', 'Contato']]
const whatsapp = 'https://wa.me/5541996713782'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }
  return <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: 'easeOut' }} className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${scrolled ? 'border-white/10 bg-black/65 shadow-[0_12px_36px_rgba(0,0,0,.28)] backdrop-blur-xl' : 'border-white/10 bg-black/20 backdrop-blur-md'}`}>
    <nav className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
      <Logo />
      <button className="grid gap-1.5 p-2 xl:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}><span className="h-0.5 w-6 bg-white" /><span className="h-0.5 w-6 bg-white" /><span className="h-0.5 w-6 bg-white" /></button>
      <div className="hidden items-center gap-4 xl:flex">{links.map(([id, label]) => <button className="text-xs text-slate-300 transition-colors duration-300 hover:text-white" onClick={() => goTo(id)} key={id}>{label}</button>)}<motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: .98 }} className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-[#071a35]/90 px-4 py-2.5 text-sm text-white transition-all duration-300 hover:bg-blue-900 hover:shadow-[0_0_32px_rgba(37,99,235,.28)]" href={whatsapp} target="_blank" rel="noreferrer"><img className="h-4 w-4 object-contain" src="/imgs/whatsapp.png" alt="" />Falar no WhatsApp</motion.a></div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t border-white/10 bg-black/80 px-4 pb-5 pt-4 backdrop-blur-xl xl:hidden">{links.map(([id, label]) => <button className="block w-full py-3 text-left text-sm text-slate-300" onClick={() => goTo(id)} key={id}>{label}</button>)}<a className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#071a35] px-4 py-3 text-center text-sm" href={whatsapp} target="_blank" rel="noreferrer"><img className="h-4 w-4 object-contain" src="/imgs/whatsapp.png" alt="" />Falar no WhatsApp</a></motion.div>}</AnimatePresence>
  </motion.header>
}
