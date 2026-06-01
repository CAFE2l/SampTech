import styles from './HowItWorks.module.css'
const steps = [['01', 'Você nos chama', 'Entre em contato pelo WhatsApp, Instagram ou site e descreva o problema.'], ['02', 'A gente diagnostica', 'Recebemos o equipamento, fazemos a análise e apresentamos o orçamento completo antes de qualquer serviço.'], ['03', 'Entregamos resolvido', 'Após sua aprovação, executamos o serviço com garantia e total transparência.']]
export default function HowItWorks() {
  return <section className="section" id="como-funciona"><div className="container"><p className="eyebrow">Atendimento</p><h2 className="section-title">Como funciona o atendimento</h2><div className={styles.flow}>{steps.map(([number, title, text]) => <article className={styles.step} key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
}
