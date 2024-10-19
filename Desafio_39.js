var numeros = [2,4,6,8,10]

var numerosFormatados = numeros.map(function(numero) {
    return numero.toFixed(1)
})
numerosFormatados = numerosFormatados.join(" ")

console.log(numerosFormatados)