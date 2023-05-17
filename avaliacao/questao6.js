let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function verifica() {
    let array3 = [array1.length];
    for (let cont = 0; cont < array3.length; cont++) {
        if(array1[cont] == array2[cont]){
        array3[cont] = array1[cont] + array2[cont]
        }
    }
    return array3;
}
console.log(verifica());