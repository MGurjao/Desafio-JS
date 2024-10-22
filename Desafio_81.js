const cursos = ["javaScript", "HtmL", "CSS", "python"]

function transformarStrings(array) {
    return array.map(function(palavra) {
        if (palavra.length > 0) {
            const primeiraLetra = palavra.charAt(0).toUpperCase()
            const ultimaLetra = palavra.charAt(palavra.length - 1).toLowerCase()
            return primeiraLetra + palavra.slice(1, -1) + ultimaLetra
        }
        return palavra
    })
}

console.log(transformarStrings(cursos))