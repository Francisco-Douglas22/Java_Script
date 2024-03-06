var nome = 'Francisco Douglas';
var x = nome.length;

console.log(x)

resultado = x > 15 ? "Obrigado" : "Por favor preencha seu nome completo"
console.log(resultado)

var resposta = nome.toLocaleUpperCase();
console.log(resposta);

var jogo = 'Barcelona vs Real Melhor Time'

var posicao = jogo.indexOf('Real')
console.log(posicao)

var cortado = jogo.slice(0,9);
console.log(cortado)  

var val = jogo.includes("Real")
console.log(val)

var str1 = 'Hello';
var str2 = 'Turma';

var str3 = str1.concat(str2)
console.log(str3)

var frase = "     Ola JavaScript";
console.log(frase.trim())