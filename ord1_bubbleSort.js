////////////////////////////  importação ////////////////////////////

let vet = require("./amostras/1-mil-nomes.js")

//////////////////////////// bubbleSort ////////////////////////////

// função para ordenar (Numeros, Palavras ou Letras)
function bubbleSort(vet) {

    // Variaveis
    let confirmacao; //Para confirmação para sair do do loop
    let ultimo = vet.length - 1; // para definir que o ultimo valor foi trocado

    // processo 
    do {
        confirmacao = false;
        for (let i = 0; i < ultimo; i++) {
            if (vet[i] > vet[i + 1]) {
                [vet[i], vet[i + 1]] = [vet[i + 1], vet[i]] // É feito a troca (EX: D, C retorna C, D)
                confirmacao = true;
            }
        }
        ultimo--;
    } while (confirmacao);
    return vet
}

// Não recomendado para grandes conjuntos de dados.

//chamada da função
bubbleSort(vet)
console.table(vet)