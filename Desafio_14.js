const base = 20

function calcularAreaDoTriangulo(altura) {
    let area = (base*altura)/2
    return (`A area do triangulo é ${area}`)
}
console.log(calcularAreaDoTriangulo(5))