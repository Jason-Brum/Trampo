const prompt = require('prompt-sync')();

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

module.exports = {obterNumeroDeIntervalo};