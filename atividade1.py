print("Comparados de números \n") # Definição: Imprime a string "Comparados de números" seguida por um caractere de nova linha no console, fornecendo um título ou introdução para o programa.
num1 = int(input("Digite um número inteiro: \n")) # Definição: Solicita ao usuário que digite um número inteiro, lê a entrada como uma string, converte-a em um inteiro e atribui o valor inteiro à variável `num1`.
num2 = int(input("Digite outro número inteiro: \n")) # Definição: Solicita ao usuário que digite outro número inteiro, lê a entrada como uma string, converte-a em um inteiro e atribui o valor inteiro à variável `num2`.

if num1 > num2: # Definição: Inicia uma instrução condicional. Se o valor de `num1` for maior que o valor de `num2`, o código dentro do bloco `if` é executado.
    print("O primeiro valor é maior, pois {} > {}.".format(num1, num2))
elif num2 > num1:
    print("O segundo valor é maior, pois {} > {}.".format(num2, num1))
else:
    print("Não existe valor maior; os números digitados são iguais.")
