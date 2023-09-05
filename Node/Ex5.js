const calculadora = require('./calculadora');

//Operação de adição
const conta = "2+2";

let resultado = calculadora.calcular(conta);

console.log(resultado);

//Operação de subtração
const conta2 = "70-1";

let resultado2 = calculadora.calcular(conta2);

console.log(resultado2);

//Operação da multiplicação
const conta3 = "8*8";

let resultado3 = calculadora.calcular(conta3);

console.log(resultado3);

//Operação de divisão
const conta4 = "72/8";

let resultado4 = calculadora.calcular(conta4);

console.log(resultado4);