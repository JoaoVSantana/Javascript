function verificar(a){
    if(a % 2 != 0){
        console.log("O número " , a , " é primo")
    } else {
        console.log("O número " , a , " não é primo")
    }
};

module.exports.verificar = verificar