/* 2) Crie uma classe para representar pessoas. Para cada pessoa teremos os atributos nome, peso
e altura. As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC*/

class Pessoa{
    nome;
    peso;
    altura;
    imc;


    constructor(nome, peso, altura){
        this.nome   = nome;
        this.peso   = peso;
        this.altura = altura;

    }

    calcula_imc(){
        this.imc = this.peso / (this.altura * this.altura);
        return (`${this.nome} voce tem ${this.peso}kg, mede ${this.altura} de M Altura e seu imc e de ${this.imc.toFixed(2)}`)
    }

    classifica_imc(){
        const imc = this.calcula_imc();

        if (imc < 18.5){
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc < 25){
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 30){
            return 'Acima do Peso';
        } else if (imc >= 30 && imc < 40){
            return 'Sobrepeso'
        } else{
            return 'Obesidade Grave';
        }

    }
}

const Maria = new Pessoa('Maria', 80.6, 1.7)
console.log(Maria.calcula_imc())

const Francisco = new Pessoa('Francisco', 80, 1.67);
console.log(Francisco.calcula_imc())
console.log(Francisco.classifica_imc())

console.log((Francisco.calcula_imc()), Francisco.classifica_imc())


