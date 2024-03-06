var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var nums = numeros.map(function(valor){
    return valor * 2;
});

console.log(nums);

var funcionarios = [
    {nome:'Luiz', idade: 34},
    {nome:'Davi', idade: 23},
    {nome:'Miguel', idade:78},
    {nome:'Rafa', idade:45},

]

nomes = funcionarios.map(pessoa => pessoa.nome)
console.log(nomes)