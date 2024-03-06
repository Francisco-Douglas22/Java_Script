// Criando uma calculadora de IMC

function calculaIMC(peso, altura){
    // Dividindo o peso pela altura ao quadrado
    var imc = peso / (altura ** 2);
    console.log(imc);
}

// Funcao que retorna uma mensagem de acordo com o IMC
function mensagemIMC(imc){
    //Verifica a faixa de peso da pessoa

    if (imc < 18.5){
        console.log('Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 25){
        console.log('Peso Normal');
    } else if (imc >= 25 && imc < 30){
        console.log('Acima do peso');
    } else if (imc >= 30 && imc < 40){
        console.log('Sobrepeso');
    } else{
        console.log('Obesidade Grave');
    }
}

calculaIMC(90, 1.67, mensagemIMC())