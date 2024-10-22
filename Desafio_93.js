const cursos = ["JavaScript", "HTML", "CSS", "Python"]

function triplicarVogais(array) {
    return array.map(function(palavra) {
        return palavra.replace(/[aeiouAEIOU]/g, function(vogal) {
            return vogal + vogal + vogal 
        })
    })
}

console.log(triplicarVogais(cursos))