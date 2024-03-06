/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
 calcule e imprima a sua media e a sua classificacao conforme a tabela abaixo

Média = (nota1 + nota2 + nota3) / 3

Classificacao
- Media menor que 5, reprovação
- Media entre 5 e 7, recuperação
- Media acima de 7, Aprovado
*/

const nota1 = 6.7
const nota2 = 7.8
const nota3 = 10

// Calculo da media
const soma_notas = nota1 + nota2 + nota3
const media = soma_notas / 3
console.log(`A Media das notas e ${media.toFixed(2)}`)

// Condicional

if (media < 5){
    console.log('O Aluno esta reprovado')
}else if (media > 5 && media < 7){
    console.log('Recuperação')
}else{
    console.log('Aprovado')
}