let num = [1,2,3,4,5,6,7,8,9,10];

let maior = 0;

for(let i = 0; i < num.length; i++){
    if (num[i] > maior){
        maior = num[i];
    }
}
console.log(maior);