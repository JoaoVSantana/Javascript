const Voto = function (idade) {
    if (idade < 16) {
        return "Não eleitor";
    } else if (idade < 18 || idade > 65) {
        return "Eleitor facultativo";
    }
    return "Eleitor obrigatório";
}
console.log(Voto(66));
