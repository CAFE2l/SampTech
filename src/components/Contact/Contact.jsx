import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={`section ${styles.section}`} id="contato">
      <div className={`container ${styles.content}`}>
        <p className="eyebrow">Contato direto</p>
        <h2>Precisa de ajuda com seu equipamento?</h2>
        <p>Fale com a gente agora mesmo pelo WhatsApp.</p>
        <a className={styles.whatsapp} href="https://wa.me/5541996713782" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.6 3.4A11 11 0 0 0 3.3 16.7L2 22l5.4-1.3A11 11 0 0 0 20.6 3.4Z" /><path d="M8.2 7.5c.3-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c.7 1.4 1.8 2.5 3.2 3.1l.8-.9c.2-.2.5-.3.7-.1l1.8.8c.3.1.4.3.4.6v.5c0 .4-.1.7-.4 1-1.4 1.2-3.9.1-5.7-.9-1.3-.7-2.7-2-3.5-3.1-1.2-1.7-2-3.4-1.1-4.7Z" /></svg>
          Chamar no WhatsApp
        </a>
        <div className={styles.details}>
          <span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>Rua Major Antônio Ribeiro Vidal, Nº 59 — Cajuru, Curitiba - PR</span>
          <a href="tel:+5541996713782"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 3.5H5.5c-1.1 0-2 .9-2 2 0 8.3 6.7 15 15 15 1.1 0 2-.9 2-2v-2.7l-3.4-1.1-1.3 2.1a13.2 13.2 0 0 1-8.6-8.6l2.1-1.3-1.1-3.4Z" /></svg>(41) 99671-3782</a>
          <a href="mailto:gutiajs@gmail.com"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>gutiajs@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
