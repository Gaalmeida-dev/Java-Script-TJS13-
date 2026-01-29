//Utilizando biblioteca
"use strict";
const leia = require('readline-sync');

//Declarando variáveis
let nome;
let cargo;
let salario;
let reajuste;
let percentual;
let novoSalario

//Estruturação
console.log("=============================================");
console.log("       Colaborador, confira o reajuste!     ");
console.log("===========================================\n");
console.log(" (1°) - Gerente              |  10%          "); 
console.log(" (2°) - Vendedor             |  7%           ");     
console.log(" (3°) - Supervisor           |  9%           "); 
console.log(" (4°) - Motorista            |  6%           "); 
console.log(" (5°) - Estoquista           |  5%           ");        
console.log(" (6°) - Tecnico de TI        |  8%           ");      
console.log("===========================================\n");


console.log("Insira seu nome:")
nome = leia.question("");
console.log("Insira o numero do seu cargo: (1-6)")
cargo = leia.questionInt("", {
  limit: [1,2,3,4,5,6],
  limitMessage: 'Digite 1-6!'
});
console.log("Insira seu salario: ")
salario = parseFloat(leia.question(""));


//Atribuindo preços
switch(cargo) {
    case 1: percentual = 10; break;
    case 2: percentual = 7; break;
    case 3: percentual = 9; break;
    case 4: percentual = 6; break;
    case 5: percentual = 5; break;
    case 6: percentual = 8; break;
}


novoSalario = salario * (1 + percentual / 100);

console.log(`${nome}, seu novo salário é R$ ${novoSalario.toFixed(2)}`);
