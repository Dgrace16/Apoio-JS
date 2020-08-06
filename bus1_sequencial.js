//////////////////////////// Busca sequencial ////////////////////////////

function busSequencial(vet, procurado) {

    //Processo
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == procurado) {
            return i; // caso encontrado retorne a posição do valor 
        }
    }
    return -1 // caso não encontrado retorne -1 
}

// Ele vai analizar todos os itens (um por um)