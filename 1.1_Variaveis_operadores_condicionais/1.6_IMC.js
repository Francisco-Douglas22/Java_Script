/* Formula
IMC = peso / (altura ** 2) ou IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo
com a tabela abaixo

IMC Condição:
- 18.5 Abaixo do peso
- Entre 18.5 e 25 Peso normal
- Entre 25 e 30 Acima do Peso
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade Grave */

// Variaveis peso e altura
const peso = 80.79
const altura = 1.67

// Calculo do imc
imc = peso / (altura * altura)
console.log(`Uma pessoa com ${peso} kg e ${altura} altura`)
console.log(`Tera um IMC de ${imc.toFixed(2)}`)


// Condicional
if (imc < 18.5){
    console.log('Abaixo do peso')
}else if (imc > 18.5 && imc < 25){
    console.log('Peso normal')
}else if (imc > 25 && imc < 30){
    console.log('Acima do Peso')
}else if (imc > 30 && imc < 40){
    console.log('Obeso')
}else{
    console.log('Obesidade Grave')
}