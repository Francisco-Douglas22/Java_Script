var idade = 22
if(idade < 16){
    console.log('Nao pode Vota')
}else if (idade < 18 || idade > 65){
    console.log('Voto Opcional')
}else{
    console.log('Voto Obrigatorio')
}
// switch e utilizado para substituir o else if 
var diaSem = 1;
switch(diaSem){
    case 1:
        console.log('Domingo');
        break

    case 2:
        console.log('Segunda')
        break

    case 3:
        console.log('Terça')
        break

    default:
        console.log('Esse dia da Semana não existe')
}