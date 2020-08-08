//////////////////////////// Busca Binaria ////////////////////////////

function busBinaria(vet, procurado, posInicial = 0, posFinal = vet.length - 1) {

    // Variaveis
    const posMeio = Math.floor((posInicial - posFinal) / 2)
    let comp = procurado - vet[posMeio]

    // Processo
    if (procurado == vet[posMeio]) {
        return posMeio // Encontrado 
    } else if (posInicial == posFinal) {
        return -1 // Não Encontrado
    } else if (comp < 0) {
        posFinal = posMeio - 1
        return busBinaria(vet, procurado, posInicial, posFinal)
            // para dividir o vetor para uma nova procura do inicio até o meio desta divisão ////// função recursiva 
    } else {
        posInicial = posMeio + 1
        return busBinaria(vet, procurado, posInicial, posFinal)
            // para dividir o vetor para uma nova procura do meio até o final nesta divisão ////// função recursiva 
    }
}