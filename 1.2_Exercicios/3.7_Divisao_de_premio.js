/*25 - A importância de R$ 780.000,00 será dividida entre três ganhadores
de um concurso. Sendo que da quantia total.
 O primeiro ganhador receberá 46%
 O segundo recebera 32%
 O terceiro recebera o restante
Calcule quanto cada ganhador irá receber
 */

const primeiro = 46; // 46%
const segundo = 32; //32%

//premio
const premio = 780000

//Calculo valores a receber primeiro e segundo jogador
let v_primeiro = premio * (46 / 100)
let v_segundo = premio * (32 / 100)

//Calculo do valor que ira receber o terceiro jogador
let v_terceiro = premio - (v_primeiro + v_segundo)

console.log(`Valores a receber do preiro de ${premio}`)
console.log(`Primeiro Ganhador 46% ira receber ${v_primeiro.toFixed(2)} R$`)
console.log(`Segundo Ganhador 32% ira receber ${v_segundo.toFixed(2)} R$`)
console.log(`Terceiro Ganhador %restante do premiro ${v_terceiro.toFixed(2)} R$`)

