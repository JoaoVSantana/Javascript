const Emprestimo = function (salario, prestacao) {
    return ((salario * 0.2) < prestacao) ? "Empréstimo não pode ser concedido!" : "Empréstimo pode ser concedido!";
}
console.log(Emprestimo(4500, 550));