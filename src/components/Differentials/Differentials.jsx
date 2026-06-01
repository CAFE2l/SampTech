import styles from './Differentials.module.css'
const items = [['M4 12h16M12 4v16', 'Orçamento antes de tudo', 'Nenhum serviço começa sem a sua aprovação. Sem surpresas na cobrança.'], ['M4 5h16v11H8l-4 4V5Zm4 5h8', 'Atendimento didático', 'Explicamos tudo de forma clara, sem termos técnicos desnecessários.'], ['M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-3-8 2 2 4-5', 'Presença digital ativa', 'Conteúdo educativo sobre tecnologia no Instagram para manter você informado.']]
export default function Differentials() {
  return <section className={`section ${styles.section}`}><div className="container"><p className="eyebrow">Por que escolher a SampTech</p><div className={styles.grid}>{items.map(([path, title, text]) => <article key={title}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={path} /></svg><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
}
