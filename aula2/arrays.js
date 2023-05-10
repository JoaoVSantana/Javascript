const frutas = ["maçã", "banana", "uva"];

console.log(frutas[1]);

////////////////////////////////////////////

const numeros = [1,2,3];

numeros.push(4);
console.log(numeros);

numeros.pop();
console.log(numeros);

////////////////////////////////////////////

const animais = ["cachorro", "gato", "coelho"];

animais.shift();
console.log(animais);

animais.unshift("tartaruga");
console.log(animais);

////////////////////////////////////////////

const cores = ["vermelho", "verde", "azul"];

cores.splice(1,0, "amarelo");
console.log(cores);

cores.splice(1,2);
console.log(cores);

////////////////////////////////////////////

const numeros2 = [1,2,3,4,5];

numeros2.forEach((numero2) =>  {
    console.log(numero2 * 2);

});

////////////////////////////////////////////

const numeros3 = [1,2,3,4,5];
const dobrados = numeros3.map((numero3) =>  {
    return numero3 * 2;

});
console.log(dobrados);

////////////////////////////////////////////

const numeros4 = [1,2,3,4,5];
const impares = numeros.filter((numero4) => {
    return numero4 % 2 !== 0;

});
console.log(impares);

////////////////////////////////////////////

const numeros5 = [1,2,3,4,5,]; 
const soma = numeros.reduce((acumulador, numero5) => {
    return acumulador + numero5;

}, 0);
console.log(soma);