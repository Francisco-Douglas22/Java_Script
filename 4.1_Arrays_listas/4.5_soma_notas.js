const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(10);

//soma das notas
let soma = 0;

for (let index = 0; index < notas.length; index ++){
    const nota = notas[index];
    soma += nota

}

console.log(`A soma das notas e ${soma}`)
