/*16 - Leia 2 ângulos, 1 Radiano e outro em Graus, transforme
o Radiano em Graus e Graus em Radiano
Formulas: R = G * pi / 180 sendo valor de pi = 3.14
Formulas: G = R * 180 / pi */

const radiano = 45
const graus = 45

//Transformando angulo Radiano em Graus
let rad_graus = radiano * 180 / 3.14

//Transformando angulo Graus em Radiano
let ang_rad = graus * 3.14 / 180

console.log(`O Radiano de ${radiano} Equivale a ${rad_graus.toFixed(2)} Graus`)
console.log(`O Grau de ${graus} equivale a ${ang_rad.toFixed(2)} Radiando`)