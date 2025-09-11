// Configurações iniciais
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ajustar o tamanho do canvas para a tela
function resizeCanvas() {
  canvas.width = window.innerWidth;  // Largura total da janela
  canvas.height = window.innerHeight; // Altura total da janela
}

// Inicializa o tamanho do canvas
resizeCanvas();

// Parâmetros da pista
const trackWidth = 600; // Largura fixa da pista
const trackHeight = canvas.height; // A pista vai ter a altura total da tela
const trackX = (canvas.width - trackWidth) / 2; // Centraliza a pista na tela

// Parâmetros do carrinho
const carWidth = 40;  // Largura do carro
const carHeight = 80; // Altura do carro
const carSpeed = 5;
let carX = trackX + (trackWidth / 2) - (carWidth / 2); // Inicia o carrinho no centro da pista
let carY = canvas.height - carHeight - 20; // Carrinho fica um pouco acima do fundo

// Obstáculos
const obstacles = [];
const obstacleWidth = 50;
const obstacleHeight = 20;
const obstacleSpeed = 2;

// Controle de movimento
let rightPressed = false;
let leftPressed = false;

// Variáveis de pontuação
let score = 0;
let gameOver = false;

// Sons
const backgroundSound = new Audio("somfundo.mp3");
const collisionSound = new Audio("sombatida.mp3");
const gameOverSound = new Audio("somgameover.mp3");
const victorySound = new Audio("somvitoria.mp3");

// Função de controle do teclado
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }

  // Começar o som de fundo ao pressionar qualquer tecla para jogar
  if (!backgroundSound.isPlaying) {
    backgroundSound.loop = true; // Loop do som de fundo
    backgroundSound.play();
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

// Função para desenhar a pista (faixa de corrida)
function drawTrack() {
  ctx.fillStyle = "#2c3e50"; // Cor da pista (cinza escuro)
  ctx.fillRect(trackX, 0, trackWidth, trackHeight); // A pista ocupa o centro da tela

  // Linha central da pista
  ctx.strokeStyle = "#ffffff"; // Cor da linha central (branca)
  ctx.lineWidth = 4;
  ctx.setLineDash([20, 20]); // Linha tracejada
  ctx.beginPath();
  ctx.moveTo(trackX + trackWidth / 2, 0); // Linha começa do topo
  ctx.lineTo(trackX + trackWidth / 2, canvas.height); // Linha vai até o fundo
  ctx.stroke();
  ctx.setLineDash([]); // Reseta o estilo de linha
}

// Função para desenhar o carrinho (mantendo a orientação vertical)
function drawCar() {
  // Carro é desenhado como um retângulo com rodas
  ctx.beginPath();
  ctx.rect(carX, carY, carWidth, carHeight); // Desenha o corpo do carro
  ctx.fillStyle = "#3498db"; // Cor do carro (azul bonito)
  ctx.fill();
  ctx.closePath();

}

// Função para desenhar os obstáculos
function drawObstacles() {
  ctx.fillStyle = "#FF0000"; // Cor dos obstáculos (vermelho)
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
  }
}

// Função para desenhar o placar
function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "#000000";  // Alterado para preto
  ctx.fillText("Pontos: " + score, 10, 30);
}

// Função para movimentar o carrinho
function moveCar() {
  if (rightPressed && carX < trackX + trackWidth - carWidth) {
    carX += carSpeed; // Mover para a direita
  }
  if (leftPressed && carX > trackX) {
    carX -= carSpeed; // Mover para a esquerda
  }
}

// Função para movimentar os obstáculos
function moveObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += obstacleSpeed; // Movimenta os obstáculos para baixo
    if (obstacles[i].y > canvas.height) {
      obstacles.splice(i, 1); // Remove obstáculos que saíram da tela
      score++; // Aumenta a pontuação
      createObstacle(); // Cria um novo obstáculo
    }
  }
}

// Função para verificar colisões
function checkCollisions() {
  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];
    if (
      carX < obstacle.x + obstacleWidth &&
      carX + carWidth > obstacle.x &&
      carY < obstacle.y + obstacleHeight &&
      carY + carHeight > obstacle.y
    ) {
      collisionSound.play(); // Som de colisão
      gameOver = true; // Se houve colisão, o jogo acaba
    }
  }
}

// Função para criar obstáculos
function createObstacle() {
  const x = Math.random() * (trackWidth - obstacleWidth) + trackX; // Obstáculos aparecem aleatoriamente dentro da pista
  obstacles.push({ x: x, y: -obstacleHeight }); // Começam acima da tela
}

// Função para reiniciar o jogo
function restartGame() {
  score = 0;
  obstacles.length = 0;
  carX = trackX + (trackWidth / 2) - (carWidth / 2);
  carY = canvas.height - carHeight - 20;
  gameOver = false;
  createObstacle();
  draw();
}

// Função principal para desenhar e atualizar o jogo
function draw() {
  if (gameOver) {
    // Exibe a tela de Game Over
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "36px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("GAME OVER!", canvas.width / 2 - 100, canvas.height / 2 - 50);
    ctx.font = "24px Arial";
    ctx.fillText("Pontuação final: " + score, canvas.width / 2 - 90, canvas.height / 2);
    // Tocar som de Game Over
    gameOverSound.play();

    // Botão para reiniciar o jogo
    const restartButton = document.createElement("button");
    restartButton.innerHTML = "Reiniciar";
    restartButton.style.position = "absolute";
    restartButton.style.left = "50%";
    restartButton.style.top = "60%";
    restartButton.style.transform = "translateX(-50%)";
    restartButton.style.fontSize = "20px";
    document.body.appendChild(restartButton);
    restartButton.onclick = function () {
      document.body.removeChild(restartButton);
      restartGame();
    };
    return;
  }

  // Limpa a tela
  ctx.fillStyle = "#ecf0f1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Desenha a pista
  drawTrack();
  moveCar();
  moveObstacles();
  drawCar();
  drawObstacles();
  drawScore();
  checkCollisions();
  requestAnimationFrame(draw); // Atualiza o jogo continuamente
}

// Inicia o jogo criando obstáculos periodicamente
setInterval(createObstacle, 1500);

// Ajustar o tamanho do canvas sempre que a janela for redimensionada
window.addEventListener('resize', resizeCanvas);

// Começa o jogo
draw();
