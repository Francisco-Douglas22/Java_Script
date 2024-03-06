// Criando a classe

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome e ${this.nome} minha idade e ${this.idade}`);
    }
}

const Laurice = new Pessoa('Laurice', 26);
console.log(Laurice)

const Joao = new Pessoa('Joao', 8);
console.log(Joao)

Laurice.descrever();
Joao.descrever();