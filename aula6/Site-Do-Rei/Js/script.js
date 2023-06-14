let botaoAdicionar = document.getElementById("rei");
let botaoSub = document.getElementById("botao-Subt");
let botaoReset = document.getElementById("botao-Reset");
let textoCont = document.getElementById('cont');

var contador = 0;

botaoAdicionar.addEventListener('click', function(){
    contador++;
    textoCont.textContent = contador
});

botaoSub.addEventListener('click' , function(){
      contador --;
      textoCont.textContent = contador
   } 
)

botaoReset.addEventListener('click' , function(){
    contador = 0;
    textoCont.textContent = contador;
})



