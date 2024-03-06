//Função Regular
function calcula(numero){
    return numero * 2;
}
console.log(calcula(2))

//Função Anonima
let calc_numero = function(numero){
    return numero * 2;
}
console.log(calc_numero(2))

//Arrow function
const mensagem = (nome) => {
    console.log(`Ola, ${nome}`);
}
console.log(mensagem("marcelo"));