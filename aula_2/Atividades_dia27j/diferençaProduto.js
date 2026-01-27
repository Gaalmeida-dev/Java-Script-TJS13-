"use strict";

const leia = require("prompt-sync")({sigint: true});
let resultado;
let n = [];

// Pedindo os valores
for (let i = 0; i < 4; i++) {
    n[i] = parseFloat(leia(`Insira o ${i + 1}° número: `)); 
}

// Cálculo e resultado
resultado = (n[0] * n[1]) - (n[2] * n[3]);

console.log("Números inseridos: ", n);
console.log("O resultado do cálculo (n1*n2) - (n3*n4) é: ", resultado);
