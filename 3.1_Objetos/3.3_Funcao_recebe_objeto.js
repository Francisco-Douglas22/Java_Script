class Pessoa{
    nome;
    idade;
    AnoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.AnoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome e ${this.nome} minha idade e ${this.idade}`);
    }
}

//Criando a Funcao que recebe
function compara_pessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} e mais velho que ${p2.nome}`);

    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} e mais velho que ${p1.nome}`);

    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Francisco = new Pessoa('Francisco', 28);
const Laurice = new Pessoa('Laurice', 26);
const Joao = new Pessoa('Joao Lucas', 8);

compara_pessoas(Francisco, Laurice)
compara_pessoas(Laurice, Joao)