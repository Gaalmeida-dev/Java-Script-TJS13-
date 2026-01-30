//Definições
"use strict";
const leia = require("readline-sync");


//Definir variaveis
const linhas = 10;
const colunas = 4;
let matriz = [];
let vetor = new Array(linhas);
let somaLinha;
let mediaGlobal = 0;
let totalGeral = 0;


//Estrutura
console.log("===================================");
console.log("          Media das Notas          ");
console.log("===================================");
console.log("Preencha a matriz 10x4 (notas 0-10):\n");


//bloqueios
for (let i = 0; i < linhas; i++) {
    matriz[i] = new Array(colunas);
    somaLinha = 0;
    
    for (let j = 0; j < colunas; j++) {
        let notaValida = false;
        while (!notaValida) {
            let input = leia.question(`matriz[${i}][${j}] (nota bimestre ${j+1}, 0-10): `);
            let nota = parseFloat(input);
            
            if (isNaN(nota)) {
                console.log("ERRO: Digite um numero valido!");
            } else if (nota < 0 || nota > 10) {
                console.log("ERRO: Nota deve ser entre 0 e 10!");
            } else {
                matriz[i][j] = nota;
                somaLinha += nota;
                totalGeral += nota;
                notaValida = true;
                console.log(`Nota ${nota} aceita!`);
            }
        }
    }
    
    vetor[i] = somaLinha / colunas;
    mediaGlobal += vetor[i];
}


//Calcular media g
mediaGlobal = mediaGlobal / linhas;


//Tabela visual BIMESTRAL
console.log("\n===================================");
console.log("         Desempenho da turma         ");
console.log("=====================================");
console.log("Aluno | B1   | B2   | B3   | B4   | Media");
console.log("------|------|------|------|------|------");
for (let i = 0; i < linhas; i++) {
    let linha = `${i.toString().padStart(4)} |`;
    for (let j = 0; j < colunas; j++) {
        linha += ` ${matriz[i][j].toFixed(1).padStart(4)} |`;
    }
    linha += ` ${vetor[i].toFixed(1).padStart(4)}`;
    console.log(linha);
}

console.log("\n===================================");
console.log("          media dos alunos:          ");
console.log("[" + vetor.map(x => x.toFixed(1)).join("  ") + "]");
console.log("====================================");


console.log("\n===================================");
console.log(`Media total da turma: ${mediaGlobal.toFixed(1)}`);
console.log("===================================");
