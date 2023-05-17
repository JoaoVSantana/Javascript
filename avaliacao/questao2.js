let num = 0;
let atual = 1;
 let ant = 0;
let soma = 0;

for(let i = num; i < 50000; i ++){
    num = ant + atual;
    ant = atual;
    atual = num;

    if(num > 50000){
        break;
    }

    if(num % 2 == 0){
        soma += num;
    }
}

console.log(soma);