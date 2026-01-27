"use strict"

//Declarando variaveis
let salario
let abono
let novoSalario = salario + abono
let nome
const leia = require("readline-sync");

//Coletando informações

console.log("Olá! Para prosseguir, digite seu nome: ")
nome = leia.question("");

console.log(`Bem-vindo(a), ${nome}, insira seu salário: `)
salario = parseFloat(leia.question(""));
console.log(`Agora insira seu abono salarial, ${nome}: `)
abono = parseFloat(leia.question(""));

novoSalario = salario + abono
console.log(`Seu novo salário é: ${novoSalario}`)