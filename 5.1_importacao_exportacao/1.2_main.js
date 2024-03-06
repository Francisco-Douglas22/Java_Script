//Importacao do Modulo
const {gets, print} = require('./1.1_funcoes_auxiliares');

const numeros_sorteados = [];

//Laco
for (let i=0; i < 5; i++){
    const numeros_sorteado = gets();
    numeros_sorteados.push(numeros_sorteado);
}

let maior_valor = 0;

for (let i=0; i < numeros_sorteados.length; i++){
    const numero_sorteado = numeros_sorteados[i];

    if (numero_sorteado > maior_valor){
        maior_valor = numero_sorteado;
    }
}

print(maior_valor)