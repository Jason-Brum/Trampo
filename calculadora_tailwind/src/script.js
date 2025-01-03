let numeroArmazenado = ''; //variável para o número digitado
let numeroAnterior = ''; //variável para o número que foi digitado antes
let operacao = null; //variável usada para armazenar a operação escolhida
let operacaoFinalizada = false;

const display = document.getElementById('calc-display')  //uso DOM para acessar o HTML do visor da calculadora para exibir números digitados e resultado da operação


function atualizaDisplay(value) {  //função para atualizar os valores no visor
    display.value = value; //value conmtém o num que será mostrado no visor
}

//seleciona todos os botões da classe num-btn, já o .forEach adiciona um evento clique em cada botão
document.querySelectorAll('.num-btn').forEach (button => {
    button.addEventListener('click', () => {
        if (operacaoFinalizada){
            numeroArmazenado = ' '; //se a op realizada for true, o número é convertido em uma string vazia para que o usuário digite um novo número
            operacaoFinalizada = false
        }

        numeroArmazenado = numeroArmazenado + button.textContent;
        atualizaDisplay(numeroArmazenado);
    }) ;

});

//evento para o botão de soma
document.getElementById('btn-soma').addEventListener('click', () => {
    const num1 = parseFloat(numeroAnterior || 0); // rimeiro número
    const num2 = parseFloat(numeroArmazenado || 0); // segundo número
    const result = num1 + num2; // Realiza a soma

    atualizaDisplay(result); //mostra o resultado imediatamente
    numeroAnterior = result.toString(); // Armazena o resultado para operações futuras
    numeroArmazenado = ''; // Limpa o número atual para entrada do próximo número
    operacao = 'soma'; // Define a operação atual como soma
    operacaoFinalizada = false; // Permite continuar operando
});

document.getElementById('btn-subtracao').addEventListener('click', () => {
    if (numeroArmazenado !== '') {
        numeroAnterior = numeroArmazenado;
        numeroArmazenado = ''; // Limpa o número atual
        operacao = 'subtracao';
        operacaoFinalizada = false;
    }
});

// Evento para o botão de multiplicação
document.getElementById('btn-multiplicacao').addEventListener('click', () => {
    if (numeroArmazenado !== '') {
        numeroAnterior = numeroArmazenado;
        numeroArmazenado = ''; // Limpa o número atual
        operacao = 'multiplicacao';
        operacaoFinalizada = false;
    }
});

// Evento para o botão de divisão
document.getElementById('btn-divisao').addEventListener('click', () => {
    if (numeroArmazenado !== '') {
        numeroAnterior = numeroArmazenado;
        numeroArmazenado = ''; // Limpa o número atual
        operacao = 'divisao';
        operacaoFinalizada = false;
    }
});

// Evento para o botão igual
document.querySelector('.bg-green-500').addEventListener('click', () => {
    if (operacao && numeroAnterior !== '' && numeroArmazenado !== '') {
        let result;
        const num1 = parseFloat(numeroAnterior);
        const num2 = parseFloat(numeroArmazenado);

        switch (operacao) {
            case 'soma':
                result = num1 + num2;
                break;
            case 'subtracao':
                result = num1 - num2;
                break;
            case 'multiplicacao':
                result = num1 * num2;
                break;
            case 'divisao':
                result = num2 !== 0 ? num1 / num2 : 'Erro'; // Evita divisão por zero
                break;
            default:
                atualizaDisplay('Erro');
                return;
        }

        atualizaDisplay(result);
        numeroArmazenado = result.toString();
        numeroAnterior = '';
        operacao = null;
        operacaoFinalizada = true; // Marca que a operação foi concluída
    }
});

// Evento para o botão 'C' (Limpar tudo)
document.getElementById('limpa-tudo').addEventListener('click', () => {
    numeroArmazenado = '';
    numeroAnterior = '';
    operacao = null;
    operacaoFinalizada = false; // Redefine estado
    atualizaDisplay(''); // Limpa o visor
});

// Evento para o botão 'CE' (Limpar último número)
document.getElementById('limpa-ultimo').addEventListener('click', () => {
    numeroArmazenado = '';
    atualizaDisplay(''); // Limpa o número atual do visor
});

// Evento para o botão '%'
document.getElementById('percentual').addEventListener('click', () => {
    if (numeroArmazenado !== '') {
        numeroArmazenado = (parseFloat(numeroArmazenado) / 100).toString();
        atualizaDisplay(numeroArmazenado);
    }
});
