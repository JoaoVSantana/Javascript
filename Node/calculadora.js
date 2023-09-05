let calculadora = {};

calculadora.soma = function(a, b) {
    return a + b;
}

calculadora.sub = function(a, b) {
    return a - b;
}

calculadora.mult = function(a, b) {
    return a * b;
}


calculadora.div = function(a, b) {
    return a / b;
}

calculadora.calcular = function(equacao){
     let operador = "nada"

     let listaOp = ["+","-","*","/"];

     for(i = 0; i < equacao.length; i++){
        if (listaOp.includes(equacao.charAt(i))){
            operador = equacao.charAt(i);
            break
        }
     }

     if(operador == "nada"){
        return console.log("Operação inválida")
     }

     let partes = equacao.split(operador);

     let a = parseFloat(partes[0]);
     let b = parseFloat(partes[1]);

     switch(operador){
        case '+':  
           return calculadora.soma(a,b);

        case '-':
            return calculadora.sub(a,b);

        case '*':
            return calculadora.mult(a,b);

        case '/':
            return calculadora.div(a,b);
     }
}

module.exports.calcular = calculadora.calcular;