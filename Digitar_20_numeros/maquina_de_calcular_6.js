const prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;
let qtdPares = 0;
let qtdImpares = 0;
let maiorNumero = 0;
let menorNumero = 100;

console.log("Digite quantos números você vai informar: ")
qtdeInformada = obterNumeroDeIntervalo(2,30) 

function obterNumeroDeIntervalo(min, max) {
    let numero;
    do {
        numero = parseInt(prompt(`Digite um número entre ${min} e ${max}: `));
        if(isNaN(numero)|| numero < min || numero > max){
            console.log(`Número inválido. Digite um número entre ${min} e ${max}`)
        }
    } while (isNaN(numero) || numero < min || numero > max)
    return numero   
}


for (let e = 0; e < qtdeInformada; e++) {
    let numero = obterNumeroDeIntervalo(0, 50)
    numeros.push(numero)
    soma = soma + numero


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


//definição pelo próprio usuário da qtde de números digitados e a função sendo utilizada em dois lugares