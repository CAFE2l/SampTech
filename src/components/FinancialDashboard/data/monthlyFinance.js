const months = [
  ['Agosto', 2850, 620, 780, 18, 158],
  ['Setembro', 3400, 680, 950, 21, 162],
  ['Outubro', 4250, 720, 1180, 27, 157],
  ['Novembro', 5100, 760, 1450, 31, 165],
  ['Dezembro', 6300, 820, 1850, 38, 166],
  ['Janeiro', 7100, 890, 2070, 43, 165],
]
const split = (total, weights, labels) => labels.map((name, index) => ({ name, value: Math.round(total * weights[index]) })).map((item, index, items) => index === items.length - 1 ? { ...item, value: total - items.slice(0, -1).reduce((sum, entry) => sum + entry.value, 0) } : item)
const revenueLabels = ['Formatações', 'Limpeza física', 'Upgrades', 'Troca de peças', 'Montagem de PCs', 'Consultorias']
const fixedLabels = ['Internet', 'Energia', 'Ferramentas', 'Hospedagem do site', 'Transporte', 'Marketing']
const variableLabels = ['Compra de peças', 'Pasta térmica', 'Cabos/adaptadores', 'Embalagens', 'Taxas', 'Materiais de limpeza']

export const financeMonths = months.map(([month, revenue, fixed, variable, services, ticket], monthIndex) => {
  const revenueItems = split(revenue, [.2, .12, .24, .18, .2, .06], revenueLabels)
  const fixedItems = split(fixed, [.18, .22, .14, .07, .18, .21], fixedLabels)
  const variableItems = split(variable, [.62, .07, .12, .05, .08, .06], variableLabels)
  const transactions = [
    ...revenueItems.slice(0, 4).map((item, index) => ({ date: `${String(5 + index * 3).padStart(2, '0')}/${String(monthIndex + 8 > 12 ? 1 : monthIndex + 8).padStart(2, '0')}`, category: 'Receita', type: 'Entrada', description: item.name, value: item.value, status: 'Recebido' })),
    ...fixedItems.slice(0, 3).map((item, index) => ({ date: `${String(10 + index * 4).padStart(2, '0')}/${String(monthIndex + 8 > 12 ? 1 : monthIndex + 8).padStart(2, '0')}`, category: 'Fixa', type: 'Despesa fixa', description: item.name, value: item.value, status: 'Pago' })),
    ...variableItems.slice(0, 3).map((item, index) => ({ date: `${String(12 + index * 4).padStart(2, '0')}/${String(monthIndex + 8 > 12 ? 1 : monthIndex + 8).padStart(2, '0')}`, category: 'Variável', type: 'Despesa variável', description: item.name, value: item.value, status: index === 2 ? 'Planejado' : 'Pago' })),
  ]
  return { month, revenue, fixed, variable, profit: revenue - fixed - variable, services, ticket, revenueItems, fixedItems, variableItems, transactions }
})

export const chartKeys = [
  ['revenue', 'Receitas', '#60a5fa'],
  ['fixed', 'Fixas', '#94a3b8'],
  ['variable', 'Variáveis', '#3b82f6'],
  ['profit', 'Lucro', '#dbeafe'],
]
