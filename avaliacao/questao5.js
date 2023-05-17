//letra a)
const livro = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    anoPublicacao: 1988,
}

//letra b)
console.log(livro.titulo);

//letra c)
livro.anoPublicacao = 1992;
console.log(livro.anoPublicacao)

//letra d)
livro.editora = 'Rocco';

//letra e)
livro.getDescricao = function () {
    return console.log(`O livro ${this.titulo} do autor ${this.autor}, foi publicado pela editora ${this.editora} no ano de ${this.anoPublicacao}.`);
}
console.log(livro.getDescricao());