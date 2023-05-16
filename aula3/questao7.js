const Lucro = function (valCompra) {
    return (valCompra < 20) ? (valCompra * 1.45) : (valCompra * 1.3);
}
console.log("Valor de venda: R$" + Lucro(40));