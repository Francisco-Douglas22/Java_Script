/*Faça um programa que receba a media de um aluno
Media < 5: Reprovado
Media > 5 && media < 6.9: Recuperação
Media >= 7: Aprovado*/

const {calcula_media, print} = require('./1.1_funcoes_auxiliares');

//Notas
nota1 = 7
nota2 = 6.5

const media = calcula_media(nota1, nota2);

if (media < 5){
    console.log(`Media de ${media} pontos esta REPROVADO`);

}else if (media > 5 && media < 6.9){
    console.log(`Media de ${media} pontos esta de RECUPERACAO`);

}else if (media >= 7){
    console.log(`Media de ${media} pontos esta APROVADO`)

}else{
    console.log('Dados invalidos tente novamente');
}

print(media)