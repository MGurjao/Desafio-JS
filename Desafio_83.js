const numeros = [10, 20, 30, 40, 50];

function incrementarNumeros(array) {
    return array.map(function(num) {
        return num - 4 
    });
}


const resultado = incrementarNumeros(numeros);

console.log(resultado)