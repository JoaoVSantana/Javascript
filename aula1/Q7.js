let palavra = "Arara";

let contrario = palavra.split('').reverse().join('').toLowerCase();

if(palavra.toLowerCase() == contrario){
    console.log(`${palavra} é um palíndromo`)

} else {
    console.log(`${palavra} não é um palíndromo`)
}