

function somar(a, b) {
    return a + b;
}

console.log(somar(3,4)); //7

////////////////////////////////////////////

const subtrair = function (a, b){
    return a - b;

};

console.log(subtrair(10,3)); //7

////////////////////////////////////////////

const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4)); //12

////////////////////////////////////////////

let variavelGlobal = "Olá";

function minhaFuncao(){
    console.log(variavelGlobal);

}

minhaFuncao ();
console.log(variavelGlobal);

////////////////////////////////////////////

function minhaFuncao(){
    let variavelLocal = "Olá";
    console.log(variavelLocal);

}

minhaFuncao();
console.log(variavelLocal);

////////////////////////////////////////////