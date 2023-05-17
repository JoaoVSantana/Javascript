const aluno = {
    nome: 'Joao',
    nota1: 8,
    nota2: 8,
    nota3: 8,
}

aluno.media = function (){
    return ((this.nota1 + this.nota2 + this.nota3) / 3)
}

aluno.situacao = function(num){
    if(num >= 7){
        return 'Aprovado';

    } else {
        return 'Reprovado';
    } 
}
console.log(aluno.nome);
console.log(aluno.media());
console.log(aluno.situacao(aluno.media()));