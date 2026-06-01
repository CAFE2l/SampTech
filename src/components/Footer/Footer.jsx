import Logo from '../Logo'
import styles from './Footer.module.css'

const links = [['sobre', 'Sobre'], ['servicos', 'Serviços'], ['como-funciona', 'Como funciona'], ['contato', 'Contato']]
const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div><Logo /><p>Sua loja de tecnologia &amp; informática</p></div>
        <div className={styles.links}>
          <nav aria-label="Links rápidos">{links.map(([id, label]) => <button onClick={() => goTo(id)} key={id}>{label}</button>)}</nav>
          <div className={styles.social}>
            <a href="https://www.instagram.com/samptechassistencia" target="_blank" rel="noreferrer" aria-label="Instagram da Samptech">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
              Instagram
            </a>
            <a href="https://linktr.ee/samptech.informatica" target="_blank" rel="noreferrer" aria-label="Linktree da Samptech">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 4 4h-2.5l3.8 3.8h-3l3.7 3.7h-4.5V21h-3v-6.5H6l3.7-3.7h-3L10.5 7H8l4-4Z" /></svg>
              Linktree
            </a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>© 2026 SampTech Informática — Curitiba, PR. Todos os direitos reservados.</div>
    </footer>
  )
}
