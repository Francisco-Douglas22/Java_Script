var s = 'JavaScript e Python';

var pos1 = s.indexOf('Python');

var novaString = s.substring(13, 20)
console.log(novaString)

var frase = 'Ola JavaScript';

if(frase.startsWith("Ola")){
    let substring = frase.substring(4);
let novaString = substring.replace("Ola", "Programar em ")
let novaStringMaiuscula = novaString.toUpperCase();
}

console.log(novaStringMaiuscula)