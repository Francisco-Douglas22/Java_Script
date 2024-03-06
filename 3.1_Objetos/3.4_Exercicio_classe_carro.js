/* 1 - Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Kilimetro rodado.
Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor
gasto em reais para realizar este percurso*/

class Carro {
    marca;
    cor;
    km_percorrido;
    km_por_litro;
    valor_litro;
    gasto_combustivel;
    custo_total;

    constructor(marca, cor, km_percorrido, km_por_litro, valor_litro, gasto_combustivel){
        this.marca = marca
        this.cor = cor
        this.km_percorrido = km_percorrido;
        this.km_por_litro = km_por_litro;
        this.valor_litro = valor_litro;
        this.gasto_combustivel = km_percorrido / km_por_litro;
        this.custo_total = km_percorrido / km_por_litro * valor_litro;

    }
    descrever(){
        console.log(`Seu carro teve um custo de ${this.custo_total.toFixed(2)} R$`);
    }
}

const uno = new Carro('Fiat','Preto', 200, 10, 4.56);
uno.descrever()

const hilux = new Carro('Hilux', 'Prata', 300, 8, 5.7)
hilux.descrever()

