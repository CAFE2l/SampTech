import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [['inicio', 'Hero'], ['sobre', 'Sobre'], ['problema', 'Problema'], ['publico', 'Público'], ['servicos', 'Serviços'], ['como-funciona', 'Atendimento'], ['diferenciais', 'Diferenciais'], ['financeiro', 'Gestão'], ['contato', 'Contato']]
const pad = (value) => String(value).padStart(2, '0')

export default function PresentationMode() {
  const [active, setActive] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
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
  useEffect(() => {
    const onTouchStart = (event) => setTouchStart(event.touches[0]?.clientY ?? null)
    const onTouchEnd = (event) => {
      if (touchStart === null || ['INPUT', 'SELECT', 'TEXTAREA'].includes(event.target.tagName)) return
      const distance = touchStart - (event.changedTouches[0]?.clientY ?? touchStart)
      const section = event.target.closest('section')
      const canAdvance = !section || window.scrollY + window.innerHeight >= section.offsetTop + section.offsetHeight - 24
      const canReturn = !section || window.scrollY <= section.offsetTop + 24
      if (Math.abs(distance) > 72 && ((distance > 0 && canAdvance) || (distance < 0 && canReturn))) goTo(active + (distance > 0 ? 1 : -1))
      setTouchStart(null)
    }
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd) }
  }, [active, touchStart])
  return <>
    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="pointer-events-none fixed right-3 top-[76px] z-30 overflow-hidden rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[10px] tracking-[.18em] text-blue-200 shadow-[0_0_22px_rgba(30,64,175,.2)] backdrop-blur-xl sm:right-8 sm:top-24 sm:px-4 sm:py-2 sm:text-xs">
      <AnimatePresence mode="wait"><motion.span key={active} initial={{ opacity: 0, y: -6, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: 6, filter: 'blur(4px)' }} transition={{ duration: .28, ease: 'easeOut' }} className="inline-block">{pad(active + 1)} / {pad(slides.length)}</motion.span></AnimatePresence>
    </motion.div>
    <div className="fixed bottom-4 right-3 z-30 flex gap-2 sm:right-4 md:hidden"><button onClick={() => goTo(active - 1)} disabled={active === 0} className="min-h-11 rounded-full border border-white/10 bg-black/60 px-4 text-xs text-slate-300 backdrop-blur-xl disabled:opacity-35">Voltar</button><button onClick={() => goTo(active + 1)} disabled={active === slides.length - 1} className="min-h-11 rounded-full border border-blue-400/30 bg-[#071a35]/95 px-4 text-xs font-medium text-white shadow-[0_0_22px_rgba(30,64,175,.22)] backdrop-blur-xl disabled:opacity-35">Próximo</button></div>
  </>
}
