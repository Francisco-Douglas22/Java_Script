function multiplicar(x, y){
    return x * y
}

let a = multiplicar(3, 2);
console.log(a);

function mult(x, y){
    console.log(x * y);
}

mult(2, 4);

//Funcoes Anonimas
let infocal = function(a, b, c){
    return a + b + c
}
console.log(infocal(3, 4, 2))

//Outra forma
const soma = (num1, num2) => {
    return num1 + num2
}
console.log(soma(1, 2))

//Outra forma utilizando MAP
const numeros = [1, 2, 3, 4, 5, 6, 7];
const valores = numeros.map((num) => num * num)
console.log(valores)

var lista_produtos = ['geladeira', 'tv', 'bola', 'notebook', 'computador'];
var lista_maiuscula =  lista_produtos.map(primeira_maiuscula);

function primeira_maiuscula(elemento){
    return elemento[0].toUpperCase() + elemento.slice(1)
}

console.log(lista_maiuscula)