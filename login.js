// Seleciona o formulário e a div de mensagens
const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

// Adiciona um evento ao formulário para quando for enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário e senha estão corretos
    if (username === 'admin' && password === '123@456') {
        messageDiv.textContent = 'Login bem-sucedido!'; // Mensagem de sucesso
        messageDiv.style.color = 'green'; // Altera a cor da mensagem para verde
    } else {
        messageDiv.textContent = 'Usuário ou senha incorretos.'; // Mensagem de erro
        messageDiv.style.color = 'red'; // Altera a cor da mensagem para vermelha
    }
});