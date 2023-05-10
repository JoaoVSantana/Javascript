//Objeto

////////////////////////////////////////////

const carro = {
    marca: 'Toyota',
    modelo: 'Corrola',
    ano: 2020,
    ligar: function(){
        console.log('O carro está ligado');

    }
};

carro.cor = 'preto';

console.log(carro.marca);
console.log(carro.ano);
carro.ligar();
console.log(carro.cor);

////////////////////////////////////////////

let pessoa = {
    nome: "Joao",
    idade: 30,
    cidade: "São Paulo"

};
console.log(pessoa.nome);
console.log(pessoa["idade"]);

////////////////////////////////////////////

console.log(Math.random());
console.log(Math.round(4,7));
console.log(Math.round(4,4));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.min(0, 150, 30, 20, -8, -200));

////////////////////////////////////////////

let dataAtual = new Date();
console.log(dataAtual);

let dataEspecifica = new Date("2023-12-25");
console.log(dataEspecifica);

let data = new Date();

console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getDate());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());