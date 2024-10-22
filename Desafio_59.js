const numeros = [1, 2, 3, 4, 5]

function elevarAoCubo(array) {
    return array.map(function(num) {
        return Math.pow(num, 3)
    })
}

console.log(elevarAoCubo(numeros))