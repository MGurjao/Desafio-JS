const numeros = [2,4,6,8,10];

function incrementarNumeros(array) {
    return array.map(function(num) {
        return num - 2
    })
}


const resultado = incrementarNumeros(numeros)

console.log(resultado)