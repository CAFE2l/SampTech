import styles from './About.module.css'

const values = [
  ['eye', 'Transparência', 'Diagnóstico honesto e nenhuma surpresa na cobrança.'],
  ['check', 'Qualidade', 'Melhores práticas e ferramentas para entregar uma solução duradoura.'],
  ['bolt', 'Agilidade', 'Prazos curtos e eficiência para devolver seu equipamento funcionando.'],
  ['heart', 'Foco no cliente', 'A gente ouve, entende a necessidade e atende com respeito.'],
]

const icons = {
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  check: <><path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
  heart: <path d="M20.8 8.5c0 5-8.8 10.4-8.8 10.4S3.2 13.5 3.2 8.5C3.2 5.7 5 4 7.5 4c1.8 0 3.4 1 4.5 2.5C13.1 5 14.7 4 16.5 4 19 4 20.8 5.7 20.8 8.5Z" />,
}

export default function About() {
  return <section className="section" id="sobre"><div className={`container ${styles.layout}`}>
    <div><p className="eyebrow">Nossa base</p><h2 className="section-title">Quem somos</h2><blockquote>“Resolver os problemas tecnológicos de nossos clientes com agilidade, transparência e qualidade, tornando a tecnologia uma aliada e não uma fonte de estresse.”</blockquote><dl className={styles.facts}><div><dt>Fundadores</dt><dd>Gabriel Felipe Sabino de Souza e Lucas Daniel Carvalho de Castilho</dd></div><div><dt>Atuação inicial</dt><dd>Bairro Cajuru, Curitiba - PR</dd></div><div><dt>Empresa</dt><dd>Sociedade Limitada (LTDA) · atividades a partir de agosto de 2026</dd></div></dl></div>
    <div className={styles.grid}>{values.map(([icon, title, text]) => <article className={styles.card} key={title}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{icons[icon]}</svg><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>
}
