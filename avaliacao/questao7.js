let String = "programacao web e mobile"
let letra = " ";
let indicador = 0;

function verifica(){
    let array = [String.length];
    for(let i = 0; i < String.length; i++){
        array[i] = String.indexOf(i);
        for(let j = 1; j< String.length; j ++){
            if(String.indexOf() == array[i]){
                indicador++;
                letra = String.indexOf(j);
            }
        }
        console.log("letra:" + letra + " aparece " + indicador + " vezes");
        indicador = 0;
        letra = "";
    }
}
console.log(verifica());