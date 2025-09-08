function contar() { 
    // Obtemos os valores dos campos de entrada
    var startNumber = document.getElementById("start"); // Acessa o valor do campo de início
    var endNumber = document.getElementById("end"); // Acessa o valor do campo de fim
    var stepNumber = document.getElementById("step"); // Acessa o valor do campo de passo
    var result = document.getElementById("result"); // Acessa o elemento onde o resultado será mostrado

    // Verificação se algum campo está vazio
    if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) { 
        // Se qualquer campo estiver vazio
        result.innerHTML = "Por favor, preencha todos os campos corretamente!"; // Exibe uma mensagem de erro
    } else {
        result.innerHTML = "Contando: <br>"; // Inicia a exibição da contagem
        result.innerHTML += "🏠 "; // Exibe o emoji de "casa" no início da contagem

        let i = Number(startNumber.value);  // Convertemos o valor de início para número
        let f = Number(endNumber.value);    // Convertemos o valor final para número
        let p = Number(stepNumber.value);   // Convertemos o valor do passo para número

        // Verificação do valor do passo
        if (p <= 0) { // Se o passo for menor ou igual a zero
            window.alert("O passo deve ser um número positivo. Considerando passo 1."); // Exibe um alerta informando o erro
            p = 1;  // Se o passo for inválido, define o passo como 1
        }

        // Condição para contagem crescente
        if (i < f) { 
            // Se o valor de início for menor que o de fim (contagem crescente)
            for (let c = i; c <= f; c += p) { // Inicia um loop para contar de i até f, com passo p
                result.innerHTML += `${c} ✌🏻 `; // Exibe o número seguido do emoji de "peace"
            }
        } else { 
            // Se o valor de início for maior que o de fim (contagem regressiva)
            for (let c = i; c >= f; c -= p) { // Inicia um loop para contar de i até f de forma decrescente, com passo p
                result.innerHTML += `${c} ✌🏻 `; // Exibe o número seguido do emoji de "peace"
            }
        }

        // Substituímos a palavra "Fim" por emoji de bandeira quadriculada
        result.innerHTML += `🏁`; // Exibe o emoji de bandeira quadriculada no final
    }
}
