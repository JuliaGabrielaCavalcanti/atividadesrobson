function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    const imageElement = document.getElementById('timeImage');
    
    if (hour < 12) {
        greetingElement.textContent = 'Bom Dia!';
        imageElement.src = 'manhã.png'; // Substitua pelo URL da sua imagem
    } else if (hour < 18) {
        greetingElement.textContent = 'Boa Tarde!';
        imageElement.src = 'tarde.png'; // Substitua pelo URL da sua imagem
    } else {
        greetingElement.textContent = 'Boa Noite!';
        imageElement.src = 'noite.png'; // Substitua pelo URL da sua imagem
    }
}

window.onload = updateGreeting;