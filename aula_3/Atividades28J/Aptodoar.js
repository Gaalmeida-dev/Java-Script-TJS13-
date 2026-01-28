//Utilizando biblioteca
"use strict";
const leia = require('readline-sync');

//Declarando variáveis
let nome
let idade;
let historico;

//Estruturação
console.log("=====================================");
console.log("   HemoHope - Seja um doador!");
console.log("=====================================\n");
console.log("Para iniciar, insira seu nome: ")
nome = leia.question("");
console.log("A HemoHope lhe da boas vindas! Insira sua data de  (DD/MM/YYYY): ")
idade = leia.question("");

historico = leia.question("Voce ja realizou uma doacao anteriormente?: (sim/nao) ", {
    limit: ['sim', 'nao'],
    trueValue: 'sim',
    falseValue: 'nao'
});

//Calculo de idade

let partes = idade.split('/');
let nascimento = new Date(partes[2], partes[1]-1, partes[0]);
let hoje = new Date();
idade = hoje.getFullYear() - nascimento.getFullYear();

if (hoje.getMonth() < nascimento.getMonth() ||
(hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
    idade --;
}

//Barreira
if (historico === 'sim' ) {
    console.log("A HemoHope agradece seu interesse!")
} 

//Calculo booleano
 if (
    (idade >=18 && idade <= 60) ||
    (idade >= 60 && idade< 70 && historico === 'sim')
 ) {
    console.log("Você está apto para ser um doador!");
 } else {
    console.log("Infelizmente, não poderemos prosseguir, você não está apto(a)")
 }




