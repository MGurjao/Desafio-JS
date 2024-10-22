const cursos = ["JavaScript", "HTML", "CSS", "Python"]

function duplicarVogais(array) {
    return array.map(function(palavra) {
        return palavra.replace(/[aeiouAEIOU]/g, function(vogal) {
            return vogal + vogal
        })
    })
}

console.log(duplicarVogais(cursos))