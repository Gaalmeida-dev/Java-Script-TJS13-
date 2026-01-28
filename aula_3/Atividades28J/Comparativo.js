//Utilizando biblioteca
"use strict";
const leia = require('readline-sync');

//Declarando variáveis
let numero;
let poOuNe = "";
let imOuPa = "";

//Estruturação
console.log("=====================================");
console.log("     Analisando numeros inteiros");
console.log("=====================================\n");
console.log("Para iniciar, digite o numero desejado:")
numero = leia.questionFloat("");

//Comparando positivo ou negativo
if( numero < 0 ) {
    poOuNe = "negativo";
} else {
    poOuNe = "positivo";
}

//Definição de paridade
if (numero / 2 === 0){
    imOuPa = "par";
} else {
    imOuPa = "impar";
}

//Saída
console.log(`O numero inserido, ${numero} é ${imOuPa} e ${poOuNe}`)