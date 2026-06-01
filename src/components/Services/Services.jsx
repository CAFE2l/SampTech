import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

const services = [
  ['Diagnóstico Completo', 'Análise aprofundada de hardware e software para identificar lentidão, travamentos e falhas de inicialização.', <><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5M8 8h5v5H8z" /></>],
  ['Formatação e Reinstalação', 'Instalação limpa do sistema operacional com backup dos dados e instalação de drivers essenciais.', <><path d="M5 4h14v16H5zM8 16h8M9 8h6" /><circle cx="12" cy="12" r="1" /></>],
  ['Remoção de Vírus e Otimização', 'Remoção de malwares, limpeza de arquivos temporários e otimização da inicialização do sistema.', <><path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-3Z" /><path d="m9 12 2 2 4-4" /></>],
  ['Limpeza Física Preventiva', 'Desmontagem completa, limpeza de componentes, ventoinhas e troca de pasta térmica do processador.', <><circle cx="12" cy="12" r="3" /><path d="M12 9c-1-5 4-6 5-4s-1 5-3 6m1 3c5-1 6 4 4 5s-5-1-6-3m-3-1c1 5-4 6-5 4s1-5 3-6m1-3C4 11 3 6 5 5s5 1 6 3" /></>],
  ['Troca e Upgrade de Peças', 'Substituição de telas, teclados, baterias e upgrade com SSD, RAM e placas de vídeo.', <><rect x="4" y="7" width="16" height="10" rx="1" /><path d="M7 10v4m3-4v4m3-4v4m3-4v4M7 17v3m4-3v3m4-3v3" /></>],
  ['Montagem de PCs Personalizados', 'Consultoria e montagem de computadores sob medida para gamer, trabalho ou estudos.', <><rect x="4" y="3" width="16" height="13" rx="1" /><path d="M8 21h8m-4-5v5M8 7h8m-8 4h5" /></>],
]

export default function Services() {
  return <section className="section" id="servicos"><div className="container"><p className="eyebrow">Serviços</p><h2 className="section-title">O que a gente resolve</h2><p className="section-copy">Do diagnóstico ao upgrade, cada serviço começa com uma análise clara do que seu equipamento realmente precisa.</p><div className={styles.grid}>{services.map(([title, description, icon]) => <ServiceCard key={title} title={title} description={description} icon={icon} />)}</div></div></section>
}
