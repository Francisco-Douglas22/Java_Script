var valores = [8, 1, 7, 2, 9];

console.log(valores[3])

for (var pos = 0; pos < valores.length; pos++){
    console.log(`Posição: ${pos} valor ${valores[pos]}`)
}

var carros = [];
carros[0] = 'Volvo';
carros[1] = 'Jeep';

var motos = new Array('BMW','YAMAHA', 'HONDA');

//Calcula a media de todos os numeros de um Array
var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma / valores.length;
console.log(media)