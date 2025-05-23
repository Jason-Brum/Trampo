

document.getElementById('formularioDeLogin').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim(); 
    const password = document.getElementById('password').value.trim();

    //se o campo usuário estiver vazio motra msg
    if (username === '') {
        alert('Por favor, preencha o campo Usuário.');
        event.preventDefault(); 
        return; 
    }

    //se o campo senha estiver vazio mostra msg
    if (password === '') {
        alert('Por favor, preencha o campo Senha.');
        event.preventDefault();
        return;
    }

    // Verificar se o campo de usuário é um e-mail válido
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
        alert('Por favor, insira um e-mail válido no campo Usuário.');
        event.preventDefault(); 
        return; 
    }

    // Verificar se o campo de senha contém apenas números
    const numericRegex = /^\d+$/;
    if (!numericRegex.test(password)) {
        alert('A senha deve conter apenas números.');
        event.preventDefault();
        return;
    }

    // Tudo certo, permitir envio
});
