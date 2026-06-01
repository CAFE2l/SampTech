import { motion } from 'framer-motion'
import PresentationNav from '../PresentationNav/PresentationNav'

export default function Hero() {
  return <section id="inicio" className="relative isolate min-h-screen snap-start overflow-hidden bg-[#020617]" aria-label="Samptech Informática">
    <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 bg-[url('/imgs/banner_site.png')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/15" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,.55)_0%,rgba(2,6,23,.08)_24%,rgba(2,6,23,.04)_58%,rgba(2,6,23,.82)_100%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(30,64,175,.16),transparent_42%)]" />
    <motion.div animate={{ opacity: [.28, .48, .28], scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-[20%] bottom-[8%] h-[34%] rounded-full bg-blue-800/30 blur-[96px]" />
    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,.36)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_78%,transparent)]" />
    <svg className="absolute inset-0 h-full w-full stroke-blue-500/20" viewBox="0 0 1600 900" fill="none" aria-hidden="true"><path d="M0 178h252l96-96h296M1118 82h238l96 96h148M0 716h342l96-96h184m402 0h142l96 96h338M272 0v178m1030 538v184" /></svg>
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#030712]" />
    <div className="absolute inset-x-0 -bottom-1 h-12 bg-[#030712]" />
    <div className="absolute inset-x-0 bottom-10 z-10 text-center"><p className="mb-1 font-mono text-[10px] uppercase tracking-[.24em] text-blue-200/80">01 / 09 · Início</p><PresentationNav next="sobre" label="Começar apresentação" /></div>
  </section>
}
