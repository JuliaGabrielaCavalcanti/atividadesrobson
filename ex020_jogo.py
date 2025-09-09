from time import sleep
import random  # Importando o módulo random

choices_list = ["pedra", "papel", "tesoura"]
print("""
COMPUTADOR: Vamos jogar Pedra, Papel, Tesoura!
As regras são as seguintes:
- Papel vence Pedra e perde para Tesoura
- Pedra vence Tesoura e perde para Papel
- Tesoura vence Papel e perde para Pedra
""")

player_prompt = str(input("Você escolhe pedra, papel ou tesoura? \n")).lower()


# Função para imprimir a escolha do jogador e do computador
def judge(computer, player):
    print(f"""
Jogador: {player}
Computador: {computer}
""")

    if player != "pedra" and player != "papel" and player != "tesoura":
        return print(f"{player} não é uma opção válida. Escolha pedra, papel ou tesoura!")

    if computer == player:
        return print("Empate. Vamos jogar novamente!")

    if player == "pedra" and computer == "tesoura":
        return print("Pedra vence tesoura. Jogador ganhou.")

    if player == "tesoura" and computer == "pedra":
        return print("Pedra vence tesoura. Computador ganhou.")

    if player == "papel" and computer == "pedra":
        return print("Papel vence pedra. Jogador ganhou.")

    if player == "pedra" and computer == "papel":
        return print("Papel vence pedra. Computador ganhou.")

    if player == "papel" and computer == "tesoura":
        return print("Tesoura vence papel. Computador ganhou.")

    if player == "tesoura" and computer == "papel":
        return print("Tesoura vence papel. Jogador ganhou.")


# Simulação do jogo
print("JO")
sleep(0.50)
print("KEN")
sleep(0.5)
print("PÔ!!!")

computer_choice = random.choice(choices_list)  # Escolhendo aleatoriamente a opção do computador
judge(computer_choice, player_prompt)
