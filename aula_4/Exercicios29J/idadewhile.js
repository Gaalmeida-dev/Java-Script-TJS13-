//Definições
"use strict";
const leia = require("readline-sync");

//Definir variáveis
let idade;
let contMenor21 = 0;
let contEntre2150 = 0;
let contMaior50 = 0;
let totalPessoas = 0;

//Estrutura
console.log("=================================");
console.log("     Contagem de Idades           ");
console.log("===================================");
console.log("Digite as idades (máx 10): \n");

idade = parseInt(leia.question("Insira uma idade: "));

//Loop while (máximo 10 pessoas)
while (idade >= 0 && totalPessoas < 10) {
    if (idade < 21) {
        contMenor21++;
    } else if (idade <= 50) {
        contEntre2150++;
    } else {
        contMaior50++;
    }
    
    console.log(`Idade ${idade}: ${idade < 21 ? "Menor 21" : idade <= 50 ? "Entre 21-50" : "Maior 50"}`);
    totalPessoas++;
    
    if (totalPessoas < 10) {
        idade = parseInt(leia.question("Insira a proxima idade: "));
    }
}

//Definição de resultado final (matriz visual)
console.log("\n===================================");
console.log("         RESULTADO FINAL           ");
console.log("===================================");
console.log("| < 21 | 21-50 | > 50 |");
console.log("|------|-------|------|");
console.log(`| ${contMenor21.toString().padStart(3)} | ${contEntre2150.toString().padStart(5)} | ${contMaior50.toString().padStart(4)} |`);
console.log("===================================");
