import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Problem from './components/Problem/Problem'
import Audience from './components/Audience/Audience'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Differentials from './components/Differentials/Differentials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import PresentationMode from './components/PresentationMode/PresentationMode'
import './styles/global.css'

const FinancialSummary = lazy(() => import('./components/FinancialSummary/FinancialSummary'))

export default function App() {
  return (
    <>
      <Navbar />
      <PresentationMode />
      <main>
        <Hero />
        <About />
        <Problem />
        <Audience />
        <Services />
        <HowItWorks />
        <Differentials />
        <Suspense fallback={<section className="slide-shell bg-[#030712]"><div className="section-inner text-slate-300">Carregando gestão financeira...</div></section>}><FinancialSummary /></Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
