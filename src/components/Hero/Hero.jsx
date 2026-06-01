import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-label="Apresentação Samptech">
      <div className={styles.particles} aria-hidden="true" />
      <svg className={styles.lines} viewBox="0 0 1600 760" fill="none" aria-hidden="true">
        <path d="M0 188h260l90-90h256l74 74h338l118 118h464" />
        <path d="M0 634h340l88-88h282l82 82h318l112-112h378" />
        <path d="M145 0v188m1040 102v226M680 172v-88m392 544v92" />
      </svg>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.bannerFrame}>
        <img className={styles.banner} src="/imgs/banner.png" alt="Banner institucional da Samptech Informática" />
      </div>
    </section>
  )
}
