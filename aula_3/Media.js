const leia = require('readline-sync');
let media = leia.questionFloat("Digite a media do aluno: ");

if (media >= 7) { 
    console.log('Aluno aprovado!'); 
} else if(media >= 5 && media < 7){ 
    console.log('Aluno em recuperação!');
} else {
    console.log("Aluno reprovado!");
}
