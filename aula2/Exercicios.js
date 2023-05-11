//questao 1
function adicionar(a, b) {
    return a + b;

};
console.log(adicionar(4, 4));

//questao 2
function subtrair(a, b) {
    return a - b;

};
console.log(subtrair(10, 3));

//questao 3
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 8));

//questao 4
let par = false;

function ehPar(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(ehPar(4));

//questao 5
let notas = [1, 2, 3, 4, 5];

const soma = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
});
console.log(soma / 5);

//questao 6
let palavra = "balacobaco";

const maiuscula = palavra.toUpperCase((palavra) => {
    return maiuscula;
});
console.log(maiuscula);

//questao 7
let num = 5;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maiores = numeros.filter(numero => {
    return numero > num
});

console.log(maiores);

//questao 8
let valor = 3;
let cont = 0;
let vetor = [1, 2, 3, 4, 5, 3, 7, 8, 3, 10];

const verifica = vetor.filter(vetor => {
    if (vetor == valor) {
        cont++;
    }
    return cont;
});
console.log(cont);

//questao 9

let vogais = ["a", "e", "i", "o", "u"];
let String = "Subi no onibus";
let contarVogais = 0;

function checar(String) {
    for (let cont1 = 0; cont1 < String.length; cont1++) {
        if (vogais.indexOf(String[cont1]) != -1) {
            contarVogais++;
        }
    }

    return contarVogais;
}
console.log(checar(String));



//questao 10
let Nnumero = 7;
let array = [];

function criarArray() {
    for (let cont = 1; cont <= Nnumero; cont++) {
        array.push(cont)
    }
    return array;
}
console.log(criarArray());


//questao 11
const carro = {
    marca: "Bmw",
    modelo: "Toma",
    ano: 2025,
}

carro.getIdade = function () {
    return 2023 - this.ano;
}

carro.getDescricao = function () {
    return console.log(`O carro é da marca ${this.marca}, do modelo ${this.modelo}, e ano ${this.ano}.\nPossui ${this.getIdade()} anos`);
}

console.log(carro.getIdade());
console.log(carro.getDescricao());

//questao 12
function aleatorio() {
    return Math.round(Math.random() * 100)
}

console.log(aleatorio());

//questao 13-1
let data1 = new Date()
data1.setDate(20)
let data2 = new Date()
data2.setDate(15)

function DiferencaDias(data1, data2) {
    return data1.getDate() - data2.getDate()
}

console.log(DiferencaDias(data1, data2) + " Dias")

//questao 13-2
let novaData = new Date();

novaData.setDate(novaData.getDate() + 100);

console.log(novaData.getDate(), novaData.getMonth(), novaData.getFullYear());

//questao 14
const conta = {
    saldo: 1000,
    titular: "joao",
}

conta.depositar = function deposito(){
    conta.saldo = conta.saldo + 400;
    return conta.saldo;
}

conta.saque = function sacar(){
    conta.saldo = conta.saldo - 200;
    return conta.saldo;
}

conta.verSaldo = function verSaldo(){
    return this.saldo;
}

console.log(conta.depositar());
console.log(conta.saque());
console.log(conta.verSaldo());

//questao 15
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[1]);

frutas.push("manga");
console.log(frutas);

frutas.shift()
console.log(frutas);

console.log(frutas.length)

for(let cont = 0; cont < frutas.length; cont++){
    console.log(frutas[cont]);
}

frutas.forEach((fruta) =>  {
    console.log(fruta);
});

const tamanho = frutas.map((fruta) =>  {
    return fruta.length;
});

console.log(tamanho);

const maioresF = frutas.filter((fruta) => {
    return fruta.length > 5 ;
});

console.log(maioresF);

const somando = frutas.reduce((acumulador, fruta) => {
    return acumulador + fruta.length;

}, 0);
console.log(somando);

