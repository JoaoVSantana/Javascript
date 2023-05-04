let num = [10,9,8,7,6,5,4,3,2,1];

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            let aux = num[i];
            num[i] = num[j];
            num[j] = aux;
        }
    }
}

console.log(num)
