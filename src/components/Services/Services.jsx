import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import PresentationNav from '../PresentationNav/PresentationNav'

const services = [
  ['Manutenção de computadores e notebooks', 'Diagnóstico e correção de falhas para recuperar a estabilidade do equipamento.', <path d="M4 4h16v12H4zM8 21h8m-4-5v5" />],
  ['Formatação e reinstalação', 'Instalação limpa do sistema operacional, drivers e softwares essenciais.', <><path d="M5 4h14v16H5zM8 16h8M9 8h6" /><circle cx="12" cy="12" r="1" /></>],
  ['Limpeza física e pasta térmica', 'Limpeza interna preventiva para reduzir aquecimento e preservar componentes.', <><circle cx="12" cy="12" r="3" /><path d="M12 9c-1-5 4-6 5-4s-1 5-3 6m1 3c5-1 6 4 4 5s-5-1-6-3m-3-1c1 5-4 6-5 4s1-5 3-6" /></>],
  ['Otimização de desempenho', 'Remoção de arquivos desnecessários, malwares e ajustes de inicialização.', <path d="M4 18a8 8 0 1 1 16 0M12 12l4-4M7 18h10" />],
  ['Reparos e troca de peças', 'Substituição de telas, teclados, baterias e componentes danificados.', <path d="m14 6 4-4 4 4-4 4M10 18l-4 4-4-4 4-4m1-7 10 10" />],
  ['Upgrades de hardware', 'Instalação de SSD, memória RAM e componentes para elevar a performance.', <><rect x="4" y="7" width="16" height="10" rx="1" /><path d="M7 10v4m3-4v4m3-4v4m3-4v4" /></>],
  ['Montagem de PCs personalizados', 'Computadores sob medida para trabalho, estudo ou jogos.', <><rect x="4" y="3" width="16" height="13" rx="1" /><path d="M8 21h8m-4-5v5" /></>],
  ['Suporte e consultoria', 'Orientação técnica para decisões melhores e uso mais seguro da tecnologia.', <><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-.9.6-1.5 1-1.5 2m0 3h.01" /></>],
]
export default function Services() {
  return <section id="servicos" className="slide-shell bg-[#020617]"><div className="section-inner"><p className="slide-number">05 / 09</p><p className="eyebrow">Serviços</p><h2 className="slide-title">Soluções para o dia a dia digital.</h2><motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: .06 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, description, icon]) => <ServiceCard title={title} description={description} icon={icon} key={title} />)}</motion.div><PresentationNav next="como-funciona" /></div></section>
}
