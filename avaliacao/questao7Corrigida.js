const contar = (str) => {
    str = str.toLowerCase();
    let duplo = [];
    let strSplit=[];
    str =  str.split("");
    str.forEach(palavra => {
        palavra.split("").forEach((letra) =>{
        strSplit.push(letra);
    })
});

for(let i = 0 ; i <strSplit.length;i++ ){
    if ( strSplit[i].match ("[a-z]") && duplo[strSplit[i]] > 0){
        
        duplo[strSplit[i]]++;
    }else{
        duplo[strSplit[i]] = 1;
    }

}
let resposta = {};
for(letra in duplo){
    if (duplo[letra] >= 2){
        resposta[letra]= duplo[letra];
    }
}
return resposta;
}
console.log(contar("programacao web e mobile"));