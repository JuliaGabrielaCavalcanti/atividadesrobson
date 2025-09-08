var idade = 67 // Declara uma variável chamada idade e atribui a ela o valor 67.
console.log(`Você tem ${idade} anos.`) // Imprime no console uma mensagem informando a idade, substituindo ${idade} pelo valor da variável idade.
if (idade < 16) { // Inicia uma condição que verifica se a variável idade é menor que 16; se for verdadeira, o bloco de código subsequente será executado.
    console.log("Não vota.") // Imprime no console a mensagem "Não vota." para informar que a pessoa não pode votar.
} else if (idade < 18 || idade > 65) { // Inicia uma nova condição que verifica se a idade é menor que 18 ou maior que 65; se uma dessas condições for verdadeira, o bloco de código subsequente será executado.
    console.log("Voto opcional.") // Imprime no console a mensagem "Voto opcional." para indicar que a pessoa pode votar, mas não é obrigatório.
} else { // Inicia um bloco de código que será executado se as condições anteriores (if e else if) não forem verdadeiras.
    console.log("Voto obrigatório.") // Imprime no console a mensagem "Voto obrigatório." para indicar que a pessoa deve votar.
}