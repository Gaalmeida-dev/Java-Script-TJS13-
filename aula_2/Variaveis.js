"use strict"

let nome = "batatinha";
let profissao = "Pessoa desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

console.log("O tipo da variável nome é: ", typeof(nome));

if (salarioBruto > 1000) {
    let mensagem = "salario > 1000"; 
    console.log(mensagem);
}

// console.log(mensagem); 
const salarioLiquido = salarioBruto * (1 + bonus);  

console.log("Salário líquido:", 
    new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
    }).format(salarioLiquido) 
);
