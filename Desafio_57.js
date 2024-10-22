const cursos = ["JAVASCRIPT","PYTHON","SPRINGBOOT"]

function ArrayMenorInvertido(array) {
    return array.map(function(string){
        return string.toLowerCase().split("").reverse().join("")
    })

}

console.log(ArrayMenorInvertido(cursos))