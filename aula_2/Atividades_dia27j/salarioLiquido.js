"use strict"

//Variaveis
let nome
let sBruto
let adNoturno
let hExtra
let descontos
let sLiquido
const leia = require("readline-sync");

//Pedindo dados

console.log("Insira seu nome para iniciar o programa: ")
nome = leia.question("");
console.log(`Olá, ${nome}! Insira seu salário bruto: `)
sBruto = parseFloat(leia.question(""));
console.log("Agora insira o adicional noturno: ")
adNoturno = parseFloat(leia.question(""));
console.log("Quantas horas extras foram realizadas?: ")
hExtra = parseFloat(leia.question(""));
console.log("Quanto foi o valor do desconto?: ")
descontos = parseFloat(leia.question(""));

//Resultado
sLiquido = sBruto + adNoturno + (hExtra * 5) - descontos;
console.log(`${nome}, seu salário líquido foi: R$ ${sLiquido.toFixed(2)}`);
