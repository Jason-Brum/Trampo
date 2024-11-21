const prompt = require('prompt-sync')();

let numeros = [];
let soma = 0;
let qdtPares = 0;
let qtdImpares = 0;

for (let e = 0; e < 5; e++) {
    let numero = parseInt(prompt('Digite 5 números de 0 a 100: '));
    numeros.push(numero);
}

soma = soma + numero;
let media = soma / 5;
let maiorNumero = 0;
let menorNumero = 100;

for(let i =0; i < numeros.length; i = i + 1) {

    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i]
    }

}


if (soma % 2 == 0){
    console.log("A soma é um número par");
} else {
    console.log("A soma é um número ímpar");
}

if (numero % 2 == 0) {
    qdtPares++; 
} else {
    qtdImpares++;
}

console.log("Números inseridos: ", numeros);
console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Quantidade de números pares: " + qdtPares);
console.log("Quantidade de números ímpares: " + qtdImpares);
console.log("Maior número " + maiorNumero);
console.log("Menor número " + menorNumero);


// soma fora do laço (erro) e ficou confuso com dois laços for