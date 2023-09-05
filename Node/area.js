function quadrado (l){
    return l*l;
}

function retangulo (b,h){
    return b*h;
}

function circulo (r){
    return 3.14 *(r*r);
}

module.exports.quadrado = quadrado;
module.exports.retangulo = retangulo;
module.exports.circulo = circulo;