let numeros = [0, 18, 7, 9, 4, 3, 1, 18, 6];

for(let i = 0; i < numeros.length; i++) { //a variável i começa com 0 e percorre cada elemento do array (lenght) enquanto esta for menor que o array. Há um incremento para que se repita (i++)
    for(let j = 0; j < numeros.length - 1 - i; j++) { //dentro deste segundo for, criei a variável j que controla onde se está na lista
        if(numeros [j] > numeros[j + 1]){
            let temp = numeros[j]
            numeros[j] = numeros [j+1]
            numeros [j + 1] = temp
        }
    }
}

console.log(numeros)