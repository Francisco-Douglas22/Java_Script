var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forma de utiliza  o filter
var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

//Outra forma de utiliza o filter
var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
)

console.log(numerosFiltrados)

//Mais outra forma de utiliza o filter
function buscaValores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscaValores);
console.log(numerosEncontrados);


