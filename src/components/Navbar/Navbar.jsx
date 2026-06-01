import { useEffect, useState } from 'react'
import Logo from '../Logo'
import styles from './Navbar.module.css'

const links = [['sobre', 'Sobre'], ['servicos', 'Serviços'], ['como-funciona', 'Como funciona'], ['contato', 'Contato']]
const whatsapp = 'https://wa.me/5541996713782'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`} aria-label="Navegação principal">
        <Logo />
        <button className={styles.toggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
        <div className={`${styles.menu} ${open ? styles.open : ''}`}>
          {links.map(([id, label]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
          <a className={styles.cta} href={whatsapp} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
      </nav>
    </header>
  )
}
