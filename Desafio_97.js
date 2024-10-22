const cursos = ["JavaScript", "Java","Python","Node","ReactNative"]

function ArrayMaiusculoInvertido(array) {
    return array.map(function(string){
        return string.toUpperCase().split("").reverse().join("")
    })

}

console.log(ArrayMaiusculoInvertido(cursos))