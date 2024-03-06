var arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2)

//Tirando 2 elementos a partir da posição 2
arr2.splice(2,2)
console.log(arr2)

arr2.splice(1,3);
console.log(arr2)

//Exemplo
var nomes = ['Maria', 'Joca', 'Tadeu', 'Miguel'];
var novos = nomes.splice(1, 2, 'Luiz', 'Ronaldo')
console.log(nomes);

//Exemplo Pais
var pais = ['Brasil', 'Uruguai', 'Colombia'];
pais.unshift('Uruguai');
console.log(pais);


//FUncionamento do slice
var pessoa = ['Eduardo', 'Joana', 'Miguel', 'Joca'];
var pessoas1 = pessoa.slice(1, 3);

console.log(pessoa)
console.log(pessoas1);

var gerente = ['Davi', 'Manuela']

var empresa = pessoa.concat(gerente);
console.log(empresa)