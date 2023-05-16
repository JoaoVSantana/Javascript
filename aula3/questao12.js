let array3 = [2, 4, 6];
let array4 = [9, 7, 5];

console.log(soma());

function soma() {
    
    let newArray = [3];
    for(let cont = 0; cont < array3.length; cont++){
        newArray[cont] = array3[cont] + array4[cont]
    }
    return newArray;
}