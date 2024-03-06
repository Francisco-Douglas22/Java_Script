//Variavel

const entradas = [7, 8, 3, 6, 10];

//Variaveis que modificam ao longo do tempo
let i = 0;
let p = 0;

//Funcao calcula media
function calcula_media(a, b){
    const valor = (a+b) / 2;
    return valor;
}

//Funcao get
function gets(){
    const valor = (entradas[i] + entradas[p] / 2);
    i ++;
    p ++;
    return valor;
}

//Funcao maior e menor
function maior_menor(){
    const valores = entradas[i];
    i ++;
    return valores;
}

//Funcao print
function print(texto){
    console.log(texto);
}


// Modulos a exporta
module.exports = {gets, print, maior_menor, calcula_media};