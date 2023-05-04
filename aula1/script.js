console.log("hello world")

// "//" = comentário de uma linha
//const: uma variável que não pode ser mudada.
//var: uma variável "errada" que pode ser declarada mais de uma vez. Usar dentro de funções
//let: declara uma variável apenas uma vez. Usada fora de funções

// function exemploVar(){
//     var nome = "Maria";
//     console.log(nome);
// }

// exemploVar();
// console.log(nome);

let idade = 25;
let nome = "João";
let sobrenome = "Silva";
let saudacao = `Olá, ${nome} ${sobrenome}`;

console.log(saudacao);

let vazio = undefined;
let nada = null;

let num = 20;

if(num % 2 == 0){
    console.log("É par");

} else {
    console.log("É ímpar");

}

const n = 10;
let a = 0;
let b = 1;

console.log("Sequência de Fibonacci.");
for (let i = 0; i <= n; i ++){
    console.log(b);
    let temp = a;
    a = b;
    b = temp + b;
}