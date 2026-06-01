import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [['inicio', 'Hero'], ['sobre', 'Sobre'], ['problema', 'Problema'], ['publico', 'Público'], ['servicos', 'Serviços'], ['como-funciona', 'Atendimento'], ['diferenciais', 'Diferenciais'], ['financeiro', 'Gestão'], ['contato', 'Contato']]
const pad = (value) => String(value).padStart(2, '0')

export default function PresentationMode() {
  const [active, setActive] = useState(0)
  const goTo = (index) => {
    const next = Math.max(0, Math.min(index, slides.length - 1))
    document.getElementById(slides[next][0])?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(next)
  }
  useEffect(() => {
    const elements = slides.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (current) setActive(slides.findIndex(([id]) => id === current.target.id))
    }, { threshold: [.25, .45, .65] })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const onKeyDown = (event) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(event.target.tagName)) return
      if (event.code === 'Space') { event.preventDefault(); goTo(active + (event.shiftKey ? -1 : 1)) }
      if (event.key === 'ArrowDown') { event.preventDefault(); goTo(active + 1) }
      if (event.key === 'ArrowUp') { event.preventDefault(); goTo(active - 1) }
      if (event.key === 'Home') { event.preventDefault(); goTo(0) }
      if (event.key === 'End') { event.preventDefault(); goTo(slides.length - 1) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])
  return <>
    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pointer-events-none fixed right-4 top-24 z-30 overflow-hidden rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs tracking-[.2em] text-blue-200 shadow-[0_0_30px_rgba(30,64,175,.25)] backdrop-blur-xl sm:right-8">
      <AnimatePresence mode="wait"><motion.span key={active} initial={{ opacity: 0, y: -6, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: 6, filter: 'blur(4px)' }} transition={{ duration: .28, ease: 'easeOut' }} className="inline-block">{pad(active + 1)} / {pad(slides.length)}</motion.span></AnimatePresence>
    </motion.div>
  </>
}
