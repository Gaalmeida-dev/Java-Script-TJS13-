"use strict"; 
//Definindo variaveis
const leia = require("readline-sync");
let notas = [];
let nome;
let media;
for(let i=0; i<4; i++) {
   console.log(`Insira sua ${i+1}° nota: `);
   notas[i] = parseFloat(leia.question(""));
}


//Coletando informações
console.log("Para conferir seu desempenho, digite seu nome:");
nome = leia.question("");


//Calculando média:
media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4.0;



if(media >= 7) {
   console.table({Nome: nome, 'N1': notas[0], 'N2': notas[1], 'N3': notas[2], 'N4': notas[3], Media: media});
   console.log(`Parabéns, ${nome}! Você está aprovado(a) com média: ${media}`);
}
else if(media >=5) {
   console.table({Nome: nome, 'N1': notas[0], 'N2': notas[1], 'N3': notas[2], 'N4': notas[3], Media: media});
   console.log(`Infelizmente você ficou de recuperação com média: ${media}`);
}
else {
   console.table({Nome: nome, 'N1': notas[0], 'N2': notas[1], 'N3': notas[2], 'N4': notas[3], Media: media});
   console.log(`Você está automaticamente reprovado com média: ${media}`);
}