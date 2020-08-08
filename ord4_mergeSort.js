////////////////////////////  importação ////////////////////////////

let vet = require("./amostras/100-mil-nomes.js")

//////////////////////////// mergeSort ////////////////////////////

//////////////////////////// ordenar ////////////////////////////

// função para ordenar (Números, Palavras ou Letras)
function ordenar(vet, inicio, meio, fim) {
    //variáveis

    let tamanho = fim - inicio + 1; // tamanho do vetor ex(20 - 0 + 1= 21) vetor se começa por zero (0)

    esquerdo = inicio; // início do primeira parte do vetor
    direito = meio + 1; // início da segunda parte do vetor

    let fim_esquerdo = false, // para autentificar se está em ordem o lado esquerdo
        fim_direito = false; // para autentificar se está em ordem o lado direito
    let ordenado = []; // Vetor que irá auxiliar até o final o vetor

    //processo
    for (let i = 0; i < tamanho; i++) {
        if (!fim_esquerdo && !fim_direito) { //se os dois juntos dois estiverem falsos ele ira trocar 
            if (vet[esquerdo] < vet[direito]) { // se o lado direito for maior que o esquerdo ele adiciona o esquerdo ao ordenado
                ordenado[i] = vet[esquerdo++];
            } else { // se o lado esquerdo for maior que o direito ele adiciona o direito ao ordenado
                ordenado[i] = vet[direito++];
            }

            if (esquerdo > meio) fim_esquerdo = true;
            // se a primeira parte chegar ao final ou seja ate o meio ele valida  

            if (direito > fim) fim_direito = true;
            // se a segunda parte chegar ao final do meio +1 ate o final ele valida a segunda parte

        } else { // caso não tenha sido validado um dos lados 
            if (!fim_esquerdo) { //caso não tenha sido validado o lado esquerdo é adicionado ao ordenado o lado esquerdo
                ordenado[i] = vet[esquerdo++];
            } else { // caso o lado não validado seja o direito é adicionado ao ordenador o lado direito
                ordenado[i] = vet[direito++];
            }
        }
    }
}

//////////////////////////// função mergeSort ////////////////////////////
function mergeSort(vet, inicio, fim) {
    // processo
    if (inicio < fim) {
        let meio = Math.floor((inicio + fim) / 2);
        mergeSort(vet, inicio, meio); // Para dividir o vetor do inicio ao meio //////////// função recursiva 
        mergeSort(vet, meio + 1, fim); // para dividir o vetor do meio + 1 ao fim ////////// função recursiva 
        ordenar(vet, inicio, meio, fim); // ordenar é uma função onde se é colocado a ordem 
    }
    return vet
}
// Recomendado para maiores conjunto de dados.

//chamada da função
mergeSort(vet)
console.table(vet)