// Funcao que imprime o nome
function seu_nome(nome){
    console.log(`Seu nome e. ${nome}`)
}

seu_nome('Francisco Douglas')

// Funcao que calcula
function quadrado(valor){
    return valor * valor;
}

const quadrado_de_2 = quadrado(2);
console.log(`O Quadrado de 2 e ${quadrado_de_2}`)

// Funcao que calcula juros
function juros(valor, percentual){
    const valorJuros = (percentual / 100) * valor;
    return valor + valorJuros
}

console.log(juros(100, 5))
console.log(juros(70, 20))