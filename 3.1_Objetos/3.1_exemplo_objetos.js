//Criando uma variavel qualquer
const Francisco = {
    nome: 'Francisco Douglas',
    idade: 25,

    descrever: function () {
        this
        console.log(`Meu nome e ${this.nome} e Minha Idade e ${this.idade}`);
    }
}

console.log(Francisco.nome);
console.log(Francisco.idade);

//Adicionando a Altura
Francisco.altura = 1.67;
console.log(Francisco.altura)


//Removendo o nome
delete Francisco.nome;
console.log(Francisco)

Francisco.descrever();