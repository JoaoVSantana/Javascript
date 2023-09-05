function media (array){
    let soma = 0;
    let media = 0;
    for(i = 0; i < array.length; i++){
        soma += array[i];
    }
    media = soma / array.length;

    console.log("A média dos números do array era " , media);
};

module.exports.media = media;