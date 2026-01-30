//Definições
"use strict"

const leia = require("readline-sync");
const tam = 10;

//Definindo variáveis
let numero = new Array(tam);
let pares = 0;
let impar = 0;

//Estruturação

console.log("===================================");
console.log("     Paridade de inteiros          ");
console.log("===================================\n");

//Estruturando loop

for (let indice = 0; indice < tam; indice++) {
    numero[indice] = parseInt(leia.question(`Insira um numero inteiro ${indice + 1}: `))
}


//Organizando dados coletados

console.log("Numeros escolhidos (caixa visual):");
console.log("============================")

for (let i = 0; i < tam; i += 5) {
    let linha = "";
    for (let j = 0; j < 5; j++) {
        let pos = i + j;
        if (pos < tam) {
            linha += numero[pos] + "\t"
        }
    }
    console.log(linha);
}

console.log ("==========================")

//Definição de paridade
for (let indice = 0; indice < tam; indice++) {
if (numero[indice] % 2 === 0) {
    pares++;
} else {
    impar++;
  }
}

//Exibição
console.log(`Total de numeros pares: ${pares}`);
console.log(`Total de numeros impares: ${impar}`);
