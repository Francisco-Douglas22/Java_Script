function criaFuncionario(nome, sobrenome, a, p){
    return{
        nome, 
        sobrenome,
        altura: a,
        peso: p,
        
        calculoImc(){
            const indice = this.peso / (this.altura * this.altura).toFixed(1)
            if(indice < 18.5){
                return `${this.nome} esta abaixo do Peso`

            }else if(indice >= 18.5 && indice > 24.9){
                return `${this.nome} esta com Peso Normal`

            }else if(indice >= 25 && indice < 29.9){
                return `${this.nome} esta Acima do Peso`

            }else if(indice >= 30 && indice < 34.9){
                return `${this.nome} esta com Obesidade 1`

            }else if(indice >= 35 && indice < 39.9){
                return `${this.nome} esta com Obesidade 2`

            }else if(indice >= 40){
                return `${this.nome} Esta com Obesidade Grave`
            }
        }
    }
}

const p1 = criaFuncionario("Marcelo",'Estrutor', 1.75, 89)
console.log(p1.calculoImc())