//Criando a lista de numeros

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`A lista de numeros e ${numeros}`)

//Criando as 2 variaveis Par e Impar
const par = [];
const impar = [];

//Criando o loop for
for (let num = 0; num < numeros.length; num ++){
    if (numeros[num] % 2 === 0){
        par.push(numeros[num]);

    }else{
        impar.push(numeros[num])
    }
}

//Imprimindo o resultado
console.log(`Os Numeros pares são: ${par}`)
console.log(`Os Numeros Impares são: ${impar}`)
