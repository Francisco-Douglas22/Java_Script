//Forma de Cria objetos

const pessoa = {
    nome:'Lucas',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

//2 Forma de cria objetos
const funcionario = new Object();
funcionario.nome = 'Karen';
funcionario.sobrenome = 'Joana';

console.log(funcionario.nome)