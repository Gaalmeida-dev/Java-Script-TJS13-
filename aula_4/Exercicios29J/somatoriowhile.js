//Definições
"use strict";
const leia = require("readline-sync");

//Definir variáveis
let numero;
let somaPositivos = 0;

//Estrutura
console.log("=================================");
console.log("    Soma de Numeros Positivos     ");
console.log("===================================");
console.log("Digite numeros inteiros.\n");
console.log("Para finalizar, digite 0\n");

numero = parseInt(leia.question("Insira um numero: "));

//Loop while (até digitar 0)
while (numero !== 0) {
    if (numero > 0) {
        somaPositivos += numero;
        console.log(`Numero ${numero} (positivo) adicionado. Soma atual: ${somaPositivos}`);
    } else {
        console.log(`Numero ${numero} (negativo) ignorado.`);
    }
    
    numero = parseInt(leia.question("Insira o proximo numero (0 para realizar a soma): "));
}

//Definição de resultado final
console.log("\n===================================");
console.log("          RESULTADO FINAL          ");
console.log("===================================");
console.log(`Soma dos numeros positivos: ${somaPositivos}`);
console.log("===================================");
