// Selecionar o visor
const display = document.getElementById('calc-display');

// Selecionar todos os botões numéricos
const numButtons = document.querySelectorAll('.num-btn');

// Adicionar evento de clique a cada botão
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Adicionar o número ao visor
        //display.value += button.textContent;
        display.value = display.value + button.textContent
    });
});

