const campoTexto = document.getElementById('campoTexto')
const botao_pesquisa = document.getElementById("botao_pesquisa")
const temperatura = document.getElementById("temperatura")
const umidade = document.getElementById('umidade')
const sensacao = document.getElementById('sensacao')
const velocidade_vento = document.getElementById('velocidade_vento')


async function buscaCidade() {
    try {   
        let cidade = campoTexto.value
        const _consultaCidade = await fetch(`https://api.weatherapi.com/v1/current.json?key=1dedf2f99a5a4ab894f230325231107&q=${cidade}&aqi=no`)
        const consultaCidade = await _consultaCidade.json()
        const clima = consultaCidade.current
        if (consultaCidade.erro) {
            throw Error("Cidade não encontrada")
        }
        
        console.log(consultaCidade)

        temperatura.textContent = "Temperatura: "+ clima.temp_c+ "°C"
        umidade.textContent = "Umidade: " + clima.humidity + "%"
        sensacao.textContent = "Sensação Térmica: " + clima.feelslike_c + "°C"
        velocidade_vento.textContent = "Velocidade do Vento: " + clima.wind_kph + "KM/H"
        
        


        return consultaCidade
        } catch(erro){
        mensagemErro.innerHTML = '<p>Erro</p>'
        return "error"
    }

}

botao_pesquisa.addEventListener("click", buscaCidade)