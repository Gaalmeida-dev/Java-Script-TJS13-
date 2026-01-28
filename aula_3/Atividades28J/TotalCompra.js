//Utilizando biblioteca
"use strict";
const leia = require('readline-sync');


//Declarando variáveis
let pedido;
let quantidade;
let total;
let preco;


//Estruturação
console.log("=============================================");
console.log("   Lanches do Zé! Confira nosso cardápio     ");
console.log("===========================================\n");
console.log(" (1°) - Cachorro quente      |  R$ 10,00     ");  
console.log(" (2°) - X-Salada             |  R$ 15,00     ");     
console.log(" (3°) - X-Bacon              |  R$ 18,00     ");  
console.log(" (4°) - Bauru                |  R$ 12,00     "); 
console.log(" (5°) - Refrigerante         |  R$ 8,00      ");        
console.log(" (6°) - Suco de laranja      |  R$ 13,00     ");      
console.log("===========================================\n");



//Pedido
pedido = leia.questionInt("Insira o numero do pedido (1-6):", {
    limit: [1,2,3,4,5,6],
    limitMessage: 'Insira um numero entre 1 e 6!'
});

quantidade = leia.questionInt("Quantos lanches? (Minimo 1): ", {
    limit: function(n) {return n >=1; },
    limitMessage: 'Digite um ou mais!'
});



