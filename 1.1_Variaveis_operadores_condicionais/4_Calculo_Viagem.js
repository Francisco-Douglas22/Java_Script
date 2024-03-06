// Faça um programa para calcular o valor de uma viagem
// Voce tera 5 variaveis. Sendo elas
// 1 - Preco do Etanol
// 2 - Preco da Gasolina
// 3 - O Tipo de combustivel que esta no seu carro
// 4 - Gasto medio de combustivel do carro por KM
// 5 - Distancia em KM da viagem

// Imprima no console o valor que sera gasto para realizar esta viagem

// toFixed = Fixa os numeros e determinadas casas decimais

const preco_etanol = 4.5;
const preco_gasolina = 5.6;
const tipo_combustivel = "Gasolina";
const km_por_litro = 11;
const distancia_km = 200;

// Calculando quanto de combustivel foi gasto
const gasto_litros = distancia_km / km_por_litro;
console.log(`Foram gastos ${gasto_litros.toFixed(2)} Litros de gasolina na viagem de ${distancia_km} km`);

//Condicional
if (tipo_combustivel === 'Gasolina'){
    const custo_financeiro = gasto_litros * preco_gasolina;
    console.log(`O gasto financeiro da viagem foi de ${custo_financeiro.toFixed(2)} R$`);

}else{
    const custo_financeiro = gasto_litros * preco_etanol;
    console.log(`O gasto financeiro da viagem foi de ${custo_financeiro.toFixed(2)} R$`);
}