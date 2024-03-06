function maior_idade(idade){
    if (idade === 18){
        console.log('Maior idade');

    }else if (idade < 18){
        const falta18 = 18 - idade;
        console.log(`Ainda faltam ${falta18.toFixed(2)} anos para voce ter 18 anos`);

    }else if (idade > 18){
        const passou18 = idade - 18;
        console.log(`Ja passaram ${passou18.toFixed(2)} anos que voce fez 18 anos`);
    }else{
        console.log('Digite novamente os dados desta vez corretos')
    }
}
maior_idade(22)
maior_idade(12)
maior_idade(34)
