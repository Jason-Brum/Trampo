let numeroArmazenado = ''; // Número atualmente digitado
let numeroAnterior = ''; // Número armazenado antes da operação
let operacao = null; // Operação escolhida
let operacaoFinalizada = false; // Controle se uma operação foi concluída

const display = document.getElementById('calc-display'); // Acessa o visor da calculadora

// Função para atualizar o visor
function atualizaDisplay(value) {
    display.value = value;
}

// Evento para os botões numéricos
document.querySelectorAll('.num-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (operacaoFinalizada) {
            numeroArmazenado = ''; // Limpa o número armazenado para iniciar um novo cálculo
            operacaoFinalizada = false; // Redefine o estado de operação finalizada
        }
        numeroArmazenado += button.textContent; // Concatena o número clicado
        atualizaDisplay(numeroArmazenado); // Atualiza o visor
    });
});

// Evento para o botão de soma
document.getElementById('btn-soma').addEventListener('click', () => {
    if (numeroArmazenado !== '') {
        if (numeroAnterior !== '') {
            numeroAnterior = (parseFloat(numeroAnterior) + parseFloat(numeroArmazenado)).toString();
        } else {
            numeroAnterior = numeroArmazenado;
        }
        operacao = 'soma';
        numeroArmazenado = ''; // Limpa o número atual
        atualizaDisplay(numeroAnterior);
    }
});

// Evento para o botão de subtração
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
