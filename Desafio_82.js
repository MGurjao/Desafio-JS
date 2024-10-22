const cursos = ["JavaScript", "Java","Python","Node","ReactNTV"]

function filtrarCaracteres(array) {
    return array.filter(function(str) {
        return str.length === 8
    })

}

console.log(filtrarCaracteres(cursos))
