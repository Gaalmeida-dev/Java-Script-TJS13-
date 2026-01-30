const leia = require("readline-sync");

let cores = [];
let numeros = [10, 25, 5, 45, 85, 95];


for (let indice = 0; indice < numeros.length; indice++) {
    console.log(`numeros [${indice}] = ${numeros[indice]}`);
}

console.log(`O tamanho do vetor numeros é: ${numeros.length}`);
console.table(numeros);


for (let indice = 0; indice < 5; indice++) {
   cores[indice] = leia.question("Digite o nome de uma cor: ");
}

console.table(cores);


console.table(numeros.sort((a, b) => a - b)); 

console.table(cores.sort());
