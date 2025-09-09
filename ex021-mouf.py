s = str(input("Digite m ou f: \n")).strip().upper()[0]
# s = variavel || str = tipo de dado || input = quando usa input é para usuario digitar algo
# /n = pula para linha de baixo ||| strip = corta espaço digitado pelo usuario ||
# upper = converte em maiuscula || [0] = caso usuario digite masculino ele pega somente o caractere 0, no caso a letra M

while s not in "MmFf":
# while: Inicia um loop que continuará enquanto a condição for verdadeira
#s not in "MmFf": Verifica se a variável s não está presente na string "MmFf". Essa string contém as letras possíveis para entrada: "M" (masculino) e "F" (feminino), tanto em maiúsculas quanto em minúsculas. Se s não for nenhuma dessas letras, o loop continua

    m = str(input("caro asno, digite m ou f: \n")).strip().upper()[0]
#input("CARO ASNO, digita só M ou F: \n"):Exibe a mensagem e aguarda a resposta do usuário. O \n pula para a linha de baixo
#str(...): Garante que o resultado seja tratado como uma string (redundante, pois input() já retorna uma string)
#.strip():Remove espaços em branco no início e no final da entrada, evitando problemas com entradas como " M "
#.upper():Converte a string inteira para letras maiúsculas, uniformizando a entrada (ex.: "m" se torna "M")
#[0]:Acessa o primeiro caractere da string resultante, garantindo que apenas "M" ou "F" sejam considerados

print("Sexo do(a) fela é {}".format(s))
#print(...): Exibe uma mensagem na tela.
#"Sexo do fela é {}".format(s): Usa o método .format() para inserir o valor de s na string. O {} é um marcador que será substituído pelo valor de s. Se s for "M", a saída será "Sexo do fela é M."

print(f"Sexo do(a) fela é {s}. ")
#print(f"..."): Utiliza uma f-string (string formatada) para exibir a mensagem. O f antes da string permite a inclusão de expressões entre chaves {}.
#{s}: Substitui {s} pelo valor atual da variável s. Isso é uma maneira mais moderna e concisa de formatar strings.