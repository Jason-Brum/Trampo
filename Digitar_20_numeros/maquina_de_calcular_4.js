const prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;
let qtdPares = 0;
let qtdImpares = 0;
let maiorNumero = 0;
let menorNumero = 100;

//function(obter numero) Informar o intervalo de números e criar condição de só aceitar números 

// function obterNumero(min, max) {


for (let e = 0; e < 5; e++) {
    let numero;
    do {
        numero = parseInt(prompt('Digite um número entre 0 e 100: '));
        if (numero < 0 || numero > 100 || numero != isNaN) {
            console.log('Número inválido! Por favor, digite um número entre 0 e 100.');
            
        }
    } while (numero < 0 || numero > 100 || numero != isNaN);

    numeros.push(numero);
    soma = soma + numero;

    if (numero % 2 == 0) {
        qtdPares++;
    } 
    if (numero % 2 == 1) {
        qtdImpares++;
    }

    if (numero > maiorNumero) maiorNumero = numero;
    if (numero < menorNumero) menorNumero = numero;
}

let media = soma / numeros.length;

console.log("Números inseridos: ", numeros);
console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Quantidade de números pares: " + qtdPares);
console.log("Quantidade de números ímpares: " + qtdImpares);
console.log("Maior número: " + maiorNumero);
console.log("Menor número: " + menorNumero);

if (soma % 2 == 0) {
    console.log("A soma é um número par");
} 
if (soma % 2 == 1) {
    console.log("A soma é um número ímpar");
}
// utlização de isNaN para só aceitar números, tem um problema no while e o min e max não estão sendo usadas
