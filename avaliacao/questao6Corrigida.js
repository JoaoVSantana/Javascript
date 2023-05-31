const acharIguais = (array1, array2) => {
    var novoVetor = [];
    for(let indicaArray1 = 0; indicaArray1 < array1.length; indicaArray1++){
        for(let indicaArray2 = 0; indicaArray2 < array2.length; indicaArray2++){
            if(array1[indicaArray1] == array2[indicaArray2]){
                novoVetor.push(array1[indicaArray1]);
                break;
            }
        }
    }

    for(let indice1 = 0; indice1 < novoVetor.length; indice1++){
        for(let indice2 = indice1 + 1; indice2 < novoVetor.length; indice2++){
            if(novoVetor[indice1] == novoVetor[indice2]){
                novoVetor.splice[indice2, 1];
                indice2--;
            }
        }
    }
    return novoVetor
}

console.log("Novo vetor: " + acharIguais(array1, array2));