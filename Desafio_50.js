const cursos = ["JavaScript", "Java","Python","Node","ReactNative"]

function filtrarCaracteres(array) {
    return array.filter(function(str) {
        return str.length === 4;
    })

}

console.log(filtrarCaracteres(cursos))