let cont = 0;
let contaPrimos = 0;

function primos() {
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0 ) {
                cont ++;
            }
        }
        if(cont == 2){
            console.log(i);
            contaPrimos++;
        }
        cont = 0;
    }
    return "Foram no total " + contaPrimos + " números primos";
}
console.log(primos())