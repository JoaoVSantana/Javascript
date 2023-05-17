//letra a)
const frutas = ["maça", "banana", "laranja"];

console.log(frutas);

//letra b)
frutas.push("manga" , "abacaxi");
console.log(frutas);

//letra c)
frutas.shift();
console.log(frutas);

//letra d) 
frutas.splice(1,0, "tangerina" , "abacate");
console.log(frutas);

//letra e)
frutas.splice(0,1, "abacaxi");
console.log(frutas);

//letra f)
function tamanhoA(){
    return frutas.length;
}

console.log("Tamanho do Array: " + tamanhoA());

//letra g)
const tamanho = frutas.map((fruta) =>  {
    return fruta.length;

});
console.log(tamanho);

//letra h)
const maiores  = frutas.filter((fruta) => {
    return fruta.length > 5;

});
console.log(maiores);

//letra i)
console.log(frutas)