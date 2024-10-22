const numeros = [1, 2, 3, 4, 5]

function elevarA4(array) {
    return array.map(function(num) {
        return Math.pow(num, 4)
    })
}

console.log(elevarA4(numeros))