import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Problem from './components/Problem/Problem'
import Audience from './components/Audience/Audience'
import Services from './components/Services/Services'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Differentials from './components/Differentials/Differentials'
import FinancialSummary from './components/FinancialSummary/FinancialSummary'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/global.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Audience />
        <Services />
        <HowItWorks />
        <Differentials />
        <FinancialSummary />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
