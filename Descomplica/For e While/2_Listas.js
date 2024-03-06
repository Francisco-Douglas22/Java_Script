const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Utilizando forEach
lista.forEach((value, i, listRef) => {
    console.log(value + i)
})

console.log('\n')

//Utilizando filter
const numeros_pares = lista.filter((element) => {
    return (element % 2 === 0)
})
console.log(numeros_pares)

//Utilizando o Map
const dobro = lista.map((valor) => valor * 2)
console.log(dobro)