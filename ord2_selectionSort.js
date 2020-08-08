////////////////////////////  importação ////////////////////////////

let vet = require("./amostras/10-mil-nomes.js")

//////////////////////////// selectionSort ////////////////////////////

// função para ordenar (Números, Palavras ou Letras)
function selectionSort(vet) {

    // Variáveis
    let menor; // item utilizado para comparação 

    // processo 
    for (let i = 0; i < vet.length - 1; i++) {
        menor = i; // comparador recebe i 
        for (let j = i + 1; j < vet.length; j++) {
            if (vet[j] < vet[menor]) { // caso a variável 'menor' seja maior que 'j' (i + 1 ou seja o proximo) 'menor' recebera 'j'
                menor = j;
            }
        }
        if (i != menor) { // se 'i' não for igual a 'menor' será feito a troca caso nn permanece como esta
            [vet[i], vet[menor]] = [vet[menor], vet[i]]; // É feito a troca (EX: D, C retorna C, D)
        }
    }
    return vet;
}

// Não recomendado para grandes conjuntos de dados.

//chamada da função

selectionSort(vet)
console.table(vet)