// Definição das constantes
const p_conbustivel = 5.67; // Preço do combustível por litro em R$
const gasto_medio_km = 12; // Consumo médio do veículo em km/l
const distancia_viagem = 450; // Distância da viagem em km

// Cálculo do custo total da viagem
let custo_total = p_conbustivel * (distancia_viagem / gasto_medio_km); // Custo total da viagem em R$

// Exibição dos resultados
console.log(`Uma viagem de ${distancia_viagem} km`); // Exibe a distância da viagem
console.log(`Tera um custo de ${custo_total.toFixed(2)} R$`); // Exibe o custo total da viagem
