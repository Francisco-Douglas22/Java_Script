// 1 = e igual a Atribuição
// 2 == e igual a  comparacao
// 3 === e igual a igual

const numero = 2;

const numeroPar = (numero % 2 === 0);
console.log(numeroPar);

//Utilizando condicionais
if(numeroPar){
    console.log("Par");
}else{
    console.log("Impar");
}

//Outro exemplo
const a1 = 4;
const a2 = 3;

soma_numeros = a1 + a2;

//Condicao
if (soma_numeros % 2 === 0){
    console.log(`A Soma dos numeros e ${soma}`);
    console.log("PAR");
}else{
    console.log("IMPAR");
}