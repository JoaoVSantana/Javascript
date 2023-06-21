let jmudarCorFundo = document.getElementById('mudarCorFundo');
let jmudarCorTitulo = document.getElementById('mudarCorTitulo');
let jmudarCorTexto = document.getElementById('mudarCorTexto');
let jmudarFonteTitulo = document.getElementById('mudarFonteTitulo');
let jmudarFonteTexto = document.getElementById('mudarFonteParagrafo');
let jmudarTudo = document.getElementById('mudarTudo');
let jtitulo = document.getElementById('titulo');
let jtexto = document.getElementById('paragrafo');

function corAleatoria() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
};

jmudarCorFundo.addEventListener('click', function () {
    document.body.style.backgroundColor = corAleatoria()
});

jmudarCorTitulo.addEventListener('click', function () {
    jtitulo.style.color = corAleatoria();
})

jmudarCorTexto.addEventListener('click', function () {
    jtexto.style.color = corAleatoria();
})

const fontes = [
    'Bebas Neue',
    'Montserrat',
    'Creepster',
    'Pangolin',
    'Mukta',
    'Playfair',
    'Abril Fatface',
    'Indie Flower',
    'Alata',
    'Concert One',
    'Special Elite',
    'Delicious Handrawn',
    'Parisienne',
    'Itim',
    'Nanum Pen Script',
];

function fontesAleatorias() {
    return fontes[parseInt(Math.random() * fontes.length)];
}

jmudarFonteTitulo.addEventListener('click', function () {
    console.log(fontesAleatorias)
    jtitulo.style.fontFamily = fontesAleatorias();
});

jmudarFonteTexto.addEventListener('click', function () {
    jtexto.style.fontFamily = fontesAleatorias();
})

console.log(corAleatoria())

jmudarTudo.addEventListener('click', function(){
    document.body.style.backgroundColor = corAleatoria()
    jtitulo.style.color = corAleatoria();
    jtexto.style.color = corAleatoria();
    jtitulo.style.fontFamily = fontesAleatorias();
    jtexto.style.fontFamily = fontesAleatorias();
})
