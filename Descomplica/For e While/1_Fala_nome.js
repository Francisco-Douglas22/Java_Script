function falarMeuNome(nome){
    console.log('Meu nome e: ', nome)
}

const nova_variavel = falarMeuNome
nova_variavel('Francisco')

function falaNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Meu nome completo e: ', falarMeuNome)
    return falarMeuNome
}

falaNomeCompleto(nome)