function CelsiusParaFah(c){
    return (c * 9/5) + 32;
}

function FahParaKelvin(f){
    return (f - 32) * 9/5 + 273.15;
}

function KelvinParaCelsius(k){
    return k - 273.15;
}

module.exports.CelsiusParaFah = CelsiusParaFah;
module.exports.FahParaKelvin = FahParaKelvin;
module.exports.KelvinParaCelsius = KelvinParaCelsius;