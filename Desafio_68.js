const numeros = [10,20,15,25,31,35,45]


function FiltrarNumImparesMaior15(array) {
    return array.filter(function(num) {
        if (num > 15)
        return num % 2 !== 0
    })
}

console.log(FiltrarNumImparesMaior15(numeros))