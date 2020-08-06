////////////////////////////  importação ////////////////////////////

let vet = require("./amostras/25-mil-nomes.js")

//////////////////////////// insertionSort ////////////////////////////

// função para ordenar (Numeros, Palavras ou Letras)
function insertionSort(vet) {

    // Variaveis
    let atual;

    // processo
    for (let i = 0; i < vet.length; i++) { // Ele vai percorrer os conjuntos
        let j = i - 1;
        atual = vet[i]
        while (j >= 0 && atual < vet[j]) { // aqui sera feito a subistituição (levando o maior numero para as ultimas posições )
            vet[j + 1] = vet[j];
            j--;
        }
        vet[j + 1] = atual
    }
    return vet
}

// Recomendado para maiores conjunto de dados.

//chamada da função
insertionSort(vet)
console.table(vet)