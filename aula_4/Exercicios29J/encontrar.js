//Definições
"use strict";
const leia = require("readline-sync");

//Definir variaveis
const tam = 10;
let vetor = new Array(tam);
let numeroProcurado;
let encontrado = false;
let posicao = -1;

//Estrutura
console.log("===================================");
console.log("   Buscar Numero no Vetor          ");
console.log("===================================");
console.log("Preencha o vetor de 10 numeros:\n");

//Preencher vetor
for (let i = 0; i < tam; i++) {
    vetor[i] = parseInt(leia.question(`Vetor[${i}]: `));
    console.log(`vetor[${i}] = ${vetor[i]}`);
}

//Buscar numero
console.log("\n===================================");
numeroProcurado = parseInt(leia.question("Digite o numero que deseja encontrar: "));

//Loop de busca
for (let i = 0; i < tam; i++) {
    if (vetor[i] === numeroProcurado) {
        encontrado = true;
        posicao = i;
        break;
    }
}

//resultado final
console.log("\n===================================");
console.log("Vetor completo:");
console.log("[" + vetor.join(" ") + "]");
console.log("===================================");

if (encontrado) {
    console.log(`O numero ${numeroProcurado} esta localizado na posicao ${posicao}`);
} else {
    console.log("O numero nao foi encontrado!");
}

console.log("===================================");
