import styles from './Services.module.css'
export default function ServiceCard({ title, description, icon }) {
  return <article className={styles.card}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{icon}</svg><h3>{title}</h3><p>{description}</p></article>
}
