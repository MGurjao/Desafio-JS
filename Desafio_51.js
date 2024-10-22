const numeros = [1, 2, 3, 4, 5];

function incrementarNumeros(array) {
    return array.map(function(num) {
        return num + 5
    });
}


const resultado = incrementarNumeros(numeros);

console.log(resultado)

