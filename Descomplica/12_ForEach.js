var numeros = [];

for(var i = 0; i < 10; i ++){
    var numero = Math.floor(Math.random() * 101);
    numeros.push(numero);
}
console.log(numeros)


numeros.forEach(valor => console.log(valor));


total = 0
//Soma de valaores
numeros.forEach(valor => {
    total += valor
})

console.log(total)